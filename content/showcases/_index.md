---
title: Showcases
date: 2024-11-14
type: landing

sections:
  - block: markdown
    content:
      title: Showcases of KG (re)use across the NFDI ecosystem
      subtitle: 
      text: | 
        Throughout the Initialisation Phase, showstudies from various NFDI projects such as NFDI4Microbiota, NFDI4Culture, NFDI4DataScience, BERD@NFDI, MaRDI and NFDI4Health, among others will be featured on this page. The aim of the showcases is to highlight the development and/or adoption of KG technologies in the consortia and facilitate the exchange between KGI and selected cases.
        
        We welcome ideas for existing or new projects which can provide examples of ontology harmonisation and query federation for KGs from different consortia with close topical proximity. Such projects can become showcases exploring the required negotiation processes and relevant experiences contributing to the interoperability strategy of KGI4NFDI. 
        
        To share project ideas, get in touch via **kgi4nfdi@lists.nfdi.de**.
    design:
      columns: '1'

  - block: markdown
    content:
      title: Prerequisites for federation
      subtitle: 
      text: | 
        In the context of knowledge graphs, federation refers to the idea of using more than one knowledge graph in one query. In essence, this means that a question is expressed in a machine-friendly way and then sent to one knowledge graph, which will compute some partial results and then invoke one or more other knowledge graphs for further input. This only works if the different graphs have some content in common and some mechanisms to identify and refer to this overlapping content. KGI4NFDI is thus working on standardizing the ways in which overlaps between NFDI knowledge graphs can be assessed, and on harmonizing the way in which the overlapping content is referred to. This is complemented by efforts to harmonize the way in which individual queries are written, so as to maximize their utility and transparency while minimizing errors.
    design:
      columns: '1'

  - block: markdown
    content:
      title: Federated queries across NFDI4Culture, NFDI4Memory and NFDI4Objects 
      subtitle: 
      text: | 
        This showcase was developed jointly and presented at the [CHNT | Conference on Cultural Heritage and New Technologies](https://chnt.at/chnt29-2024/) in October 2024. It explores the potential of Wikibase instances to transform how interdisciplinary Cultural Heritage data from the fields of archaeology, history, architecture and art history, among others, is accessed and reused. Several projects across the NFDI consortia hosting diverse datasets highlight how Wikibase can manage spatial and chronological uncertainties in geoarchaeological contexts (Fuzzy-SL Wikibase), epigraphic inscriptions and historical entities (FactGrid), annotations of 3D models (Semantic Kompakkt), provenance research (Provenance Gazetteer) and citizen-science contributions through community-driven data curation (Wikidata). Furthermore, the showcase explores best practices and challenges in constructing federated SPARQL queries. 

        The presentation slides from CHNT can be accessed here: **https://zenodo.org/records/14055699**. Full paper publication in the conference proceedings is forthcoming. 

        A follow up of the showcase with additional query development was presented at a workshop on Federated Queries co-organised by Wikimedia in December 2024. Slides with example queries can be accessed here: **https://zenodo.org/records/14751598**  
    design:
      columns: '1'

  - block: markdown
    content:
      title: Queries to and from the MaRDI Knowledge Graph
      subtitle: 
      text: | 
        The mathematical consortium [MaRDI](https://mardi4nfdi.de/) runs a number of [services](https://portal.mardi4nfdi.de/wiki/MaRDI_Services), including the [MaRDI Knowledge Graph Query Service](https://portal.mardi4nfdi.de/wiki/Service:6672073). This can be queried in various ways (1) on its own, e.g. for [Formulas that are indexed in the Digital Library of Mathematical Functions and that depend indirectly on the gamma function](https://query.portal.mardi4nfdi.de/index.html#PREFIX%20wdt%3A%20%3Chttps%3A%2F%2Fportal.mardi4nfdi.de%2Fprop%2Fdirect%2F%3E%0APREFIX%20wd%3A%20%3Chttps%3A%2F%2Fportal.mardi4nfdi.de%2Fentity%2F%3E%0A%0ASELECT%20%28%3Fdep2nd%20as%20%3FqId%29%20%3Fdlmfid%20%3FdefinesLabel%20%3Fformula%0AWHERE%20%7B%0A%20%20%3Fitem%20wdt%3AP4%20wd%3AQ1818%20.%0A%20%20%20%20%20%20%20%20%20%3Fitem%20wdt%3AP3%20%3Fdefines%20.%0A%20%20%20%20%20%20%20%3Fdep2nd%20wdt%3AP4%20%3Fdefines%20%0A%20%20%20%20%20%20%20FILTER%28%20NOT%20EXISTS%20%7B%20%3Fdep2nd%20wdt%3AP4%20wd%3A1818.%7D%29%0A%20%20%20%20%20%20%20%20%20OPTIONAL%7B%3Fdep2nd%20wdt%3AP2%20%3Fdlmfid%20.%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20OPTIONAL%7B%3Fdep2nd%20wdt%3AP14%20%3Fformula%20.%7D%20%20%20%20%20%20%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22.%20%7D%0A%0A%20%20%20%20%20%20%7D%0ALimit%2010), (2) as a starting point for exploring other NFDI knowledge graphs, e.g. with [FactGrid](https://database.factgrid.de/wiki/Main_Page) (NFDI4Memory) for a list of people known to MaRDI and then the historic subset of these people for which FactGrid has street addresses information to yield a [map with street addresses of historic mathematicians in Paris](https://query.portal.mardi4nfdi.de/#%23title%3A%20Street%20addresses%20of%20historic%20mathematicians%20in%20Paris%0A%23%20This%20query%20combines%20data%20from%20%0A%23%20https%3A%2F%2Fquery.portal.mardi4nfdi.de%20%28MaRDI%29%0A%23%20and%20https%3A%2F%2Fdatabase.factgrid.de%2F%20%28NFDI4Memory%29%0A%0A%23defaultView%3AMap%0A%0APREFIX%20FactGrid_wd%3A%20%3Chttps%3A%2F%2Fdatabase.factgrid.de%2Fentity%2F%3E%0APREFIX%20FactGrid_wdt%3A%20%3Chttps%3A%2F%2Fdatabase.factgrid.de%2Fprop%2Fdirect%2F%3E%0A%0ASELECT%20DISTINCT%20%0A%20%20%3FFactGrid_mathematician%20%3FFactGrid_mathematicianLabel%20%3FFactGrid_addressLabel%20%3FFactGrid_coord%20%0A%20%20%3FMaRDI_person%20%3FMaRDI_personLabel%20WHERE%20%7B%0A%20%20%3FMaRDI_person%20wdt%3AP316%20%3FFactGrid_personID%20.%0A%20%20BIND%28URI%28CONCAT%28%22https%3A%2F%2Fdatabase.factgrid.de%2Fentity%2F%22%2C%20%3FFactGrid_personID%29%29%20AS%20%3FFactGrid_mathematician%29%0A%20%20SERVICE%20%3Chttps%3A%2F%2Fdatabase.factgrid.de%2Fsparql%3E%20%7B%0A%0A%20%20%20%20SELECT%20%3FFactGrid_mathematician%20%3FFactGrid_mathematicianLabel%20%3FFactGrid_addressLabel%20%3FFactGrid_coord%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20WHERE%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3FFactGrid_mathematician%20FactGrid_wdt%3AP2%20FactGrid_wd%3AQ7%3B%20%20%20%20%20%20%20%23%20person%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20FactGrid_wdt%3AP208%20%3FFactGrid_address.%20%20%23%20address%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3FFactGrid_address%20FactGrid_wdt%3AP48%20%3FFactGrid_coord%3B%20%20%20%20%20%20%20%20%20%20%20%23%20geocoordinates%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20FactGrid_wdt%3AP47%20FactGrid_wd%3AQ10441%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20LIMIT%20100%20%20%0A%20%20%7D%0A%20%20BIND%28%3FFactGrid_mathematicianLabel%20AS%20%3FmathematicianLabel%29%0A%0A%20%20BIND%28STR%28CONCAT%28%22MaRDI%3A%20%22%2C%20STR%28%3FmathematicianLabel%29%29%29%20AS%20%3FMaRDI_personLabel%29%20%20%0A%7D%0A), (3) for enriching a query coming in from an external knowledge graph, e.g. the [FAIR Jupyter](https://w3id.org/fairjupyter) knowledge graph (with information about the reproducibility of Jupyter notebooks from biomedical publications) to get [a list of publications known to both graphs and then enrich this subset with information from MaRDI about the software that was used alongside Jupyter in the research reported in the paper](https://reproduceme.uni-jena.de/#/dataset/fairjupyter/query?query=PREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20wikibase%3A%20%3Chttp%3A%2F%2Fwikiba.se%2Fontology%23%3E%0APREFIX%20mardi_wd%3A%20%3Chttps%3A%2F%2Fportal.mardi4nfdi.de%2Fentity%2F%3E%0APREFIX%20mardi_wdt%3A%20%3Chttps%3A%2F%2Fportal.mardi4nfdi.de%2Fprop%2Fdirect%2F%3E%0A%0APREFIX%20bd%3A%20%3Chttp%3A%2F%2Fwww.bigdata.com%2Frdf%23%3E%0APREFIX%20wikibase%3A%20%3Chttp%3A%2F%2Fwikiba.se%2Fontology%23%3E%0A%0ASELECT%20DISTINCT%20%3Ftitle%20%3Fdoi%20%3Fmethod%20%3FmethodLabel%0A%0AWHERE%20%7B%0A%20%20%3Ffj_article%20%3Chttps%3A%2F%2Fw3id.org%2Freproduceme%2Fdoi%3E%20%3Fdoi%20.%0A%0A%20%20service%20%3Chttp%3A%2F%2Fquery.portal.mardi4nfdi.de%2Fproxy%2Fwdqs%2Fbigdata%2Fnamespace%2Fwdq%2Fsparql%3E%20%7B%0A%20%20%20%20%3Fmardi_paper%20mardi_wdt%3AP27%20%3Fdoi%20.%0A%20%20%20%20%3Fmardi_paper%20mardi_wdt%3AP159%20%3Ftitle%20.%0A%20%20%20%20%0A%20%20%20%20%3Fmardi_paper%20mardi_wdt%3AP1463%20%3Fmethod%20.%0A%20%20%20%20%3Fmethod%20rdfs%3Alabel%20%3FmethodLabel%20.%0A%20%20%7D%0A%0A%7D%0ALIMIT%201000%0A).
     
    design:
      columns: '1'

---
