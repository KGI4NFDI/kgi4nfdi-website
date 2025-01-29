---
title: Public SPARQL Endpoint
date: 2025-01-01
type: page

dropdown_items:
  - query_label: "Get all triplets"
    #backend: "https://api.dev.kgi.services.base4nfdi.de"
    backend: "http://juist.openstack.bielefeld:8888"
    query_path: "query_examples/list_all_triplets.rq"
    
  - query_label: "Count all triplets"
    backend: "http://juist.openstack.bielefeld:8888"
    query_path: "query_examples/count_all_triplets.rq"
    
  - query_label: "KGs overview list"
    backend: "http://juist.openstack.bielefeld:8888"
    query_path: "query_examples/kg_overview_list.rq"
---


{{< query_control >}}

