# Patched theme templates

These files are **verbatim copies** of HugoBlox module templates with only
Hugo-deprecation fixes applied. They exist solely to silence build warnings;
they add no features. Delete them as soon as upstream fixes the calls.

Substitutions applied (nothing else was changed in any file):

```
site.Data         -> hugo.Data              # deprecated in Hugo v0.156.0
site.LanguageCode -> site.Language.Locale   # deprecated in Hugo v0.158.0
```

## From blox-bootstrap/v5 @ v5.9.8-0.20241012174104-661cadc17327

- `_default/baseof.html`
- `_default/rss.xml`
- `partials/functions/parse_theme.html`
- `partials/search.html`
- `partials/site_head.html`
- `partials/site_js.html`

Each one is required: delete any and a warning returns (verified by removing
them one at a time). `partials/components/headers/navbar.html` and
`partials/cookie_consent.html` also contain `site.Data`, but on this site those
branches never execute (language switcher — single language; cookie consent —
disabled), so they are deliberately not copied. Copy and patch them if you add
a second language or enable the privacy pack.

## From blox-seo @ v0.3.1

- `_partials/seo_tags.html`

`blox-seo/layouts/index.webmanifest` also uses `site.LanguageCode` but is not
rendered (`outputs.home` has no `WebAppManifest`), so it never warns. If you
enable that output, copy and patch it too.

## Not patches — real site customisations

`partials/components/footers/minimal.html` and `partials/head.html`. Leave
them alone.

## Related: the blox-seo sitemap in config/_default/module.yaml

blox-seo v0.3.1 ships `layouts/_markup/sitemap.xml`, but Hugo >= 0.163 reserves
`_markup/` for render hooks, so Hugo skipped it with `unrecognized render hook
template` and used its built-in sitemap instead — the module's sitemap has been
silently dead since that Hugo release. The warning is not suppressible
(`ignoreLogs` has no effect; these messages carry no log ID).

Fix: `module.yaml` imports blox-seo explicitly with `mounts` that leave
`layouts/_markup` unmounted. **The import must be listed before
blox-bootstrap** — listed after, blox-bootstrap's indirect import wins and the
warning returns. Because `mounts` replaces the module's own mount config, any
path added to blox-seo upstream must be added to that list by hand.

Output is unchanged: Hugo's built-in sitemap stays in use, exactly as before.
The module's version only adds filtering of `private: true` pages, which no
content uses. To activate it later, add this mount (verified warning-free; it
changes sitemap whitespace):

    - source: layouts/_markup/sitemap.xml
      target: layouts/sitemap.xml

## When bumping module versions

    BB="$(hugo config mounts | grep -o '"[^"]*blox-bootstrap[^"]*"' | tail -1 | tr -d '"')"
    diff "$BB/layouts/<file>" "layouts/<file>"   # expect ONLY the substitutions above

Anything else in a diff means upstream changed the template: re-copy from the
new version and re-apply the substitutions, or drop the copy if upstream no
longer uses the deprecated call. Then check `hugo 2>&1 | grep WARN` is empty.

`.Page.IsNode` (in `authors/list.html` and `partials/page_header.html`) and the
`imaging.quality` config key are also deprecated but only log at INFO, so they
are deliberately left unpatched. Patch them the same way if Hugo promotes them
to WARN.
