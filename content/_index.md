---
# Leave the homepage title empty to use the site title
title:
date: 2025-02-28
type: landing

sections:
  - block: hero
    content:
      title: Welcome to KGI4NFDI
      image:
        filename: KGI4NFDI_diagramme.png
      text: |
        KGI4NFDI advocates for a central and reusable **Knowledge Graph Infrastructure (KGI)** to enhance interoperability within the research domain and support the objectives of the **German National Research Data Infrastructure ([NFDI](https://www.nfdi.de/?lang=en))**. KGI4NFDI provides a Knowledge Graph (KG) registry and empowers research communities to create decentralised KG instances using standardised approaches, technologies, and expertise. Through surveys, documentation, consulting services, and ontology harmonisation, KGI4NGFI contributes to the "One NFDI" vision and promotes the FAIR data principles across diverse disciplines and international frameworks. The service is currently in its initialisation phase, the first of three service development phases.  

        {{% cta cta_link="./about/" cta_text="Read more →" %}}

      # TODO here also other services could be linked which you provide, e.g. a hub or the documentation
  

  - block: markdown
    content:
      title: Interoperability of Knowledge Graphs
      subtitle: 
      text: | 
        Interoperability is crucial in the context of Knowledge graphs because it enables seamless data integration, exchange, and reuse across different systems, domains, and organizations. By adhering to established standards, such as those for representation (RDF, Labelled Property Graphs, etc.), or querying (SPARQL, Graph Query Language, etc.), interoperable KGs ensure that diverse datasets can be linked and understood in a unified way, reducing data silos, and enhancing discoverability. In the following report, we provide an overview and best practices on such standards and practices by focusing on metadata mapping, linking, and integration: [https://zenodo.org/records/15780729](https://zenodo.org/records/15780729)
    design:
      columns: '1'


#  - block: markdown
#    content:
#      title:
#      subtitle:
#      text: |
#        {{% cta cta_link="./team/" cta_text="Meet KGI4NFDI Team →" %}}
#    design:
#      columns: '1'

# {{% cta cta_link="./contact/" cta_text="Contact us →" %}}
---
