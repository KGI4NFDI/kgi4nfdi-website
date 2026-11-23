(function () {
  const STATUS_LABEL = {
    past: "Complete",
    current: "In progress",
    next: "Up next",
    upcoming: "Upcoming",
  };

  function parseISODate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function formatToday(date) {
    return date.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function rowPhaseStatus(today, start, end) {
    const t = today.getTime();
    const s = startOfDay(start).getTime();
    const e = startOfDay(end).getTime();
    if (t > e) return "past";
    if (t >= s && t <= e) return "current";
    return "upcoming";
  }

  function resolveStatuses(today, rows) {
    const base = rows.map((row) => rowPhaseStatus(today, row.start, row.end));

    if (base.includes("current")) {
      return base;
    }

    const nextIndex = base.findIndex(
      (status, index) =>
        status === "upcoming" && base.slice(0, index).every((s) => s === "past")
    );

    if (nextIndex !== -1) {
      base[nextIndex] = "next";
    }

    return base;
  }

  function applyRowState(row, status) {
    row.classList.remove(
      "incubator-timeline__row--past",
      "incubator-timeline__row--current",
      "incubator-timeline__row--next",
      "incubator-timeline__row--upcoming"
    );
    row.classList.add(`incubator-timeline__row--${status}`);
    const badge = row.querySelector(".incubator-timeline__badge");
    if (badge) {
      badge.dataset.status = status;
      badge.textContent = STATUS_LABEL[status] || status;
    }
  }

  function refreshTimeline(root) {
    const table = root.querySelector(".incubator-timeline__table tbody");
    if (!table) return;

    const rowEls = [...table.querySelectorAll("tr")];
    const rows = rowEls.map((el) => ({
      el,
      start: parseISODate(el.dataset.phaseStart),
      end: parseISODate(el.dataset.phaseEnd),
    }));

    const today = startOfDay(new Date());
    const statuses = resolveStatuses(today, rows);

    rowEls.forEach((el, index) => {
      applyRowState(el, statuses[index]);
    });

    const legend = root.querySelector(".incubator-timeline__legend-today");
    if (legend) {
      legend.textContent = `Timeline as of ${formatToday(today)}.`;
    }
  }

  function init() {
    document.querySelectorAll(".incubator-timeline").forEach(refreshTimeline);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();