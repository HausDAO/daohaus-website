---
title: Introduction to Subgraphs
sidebar_position: 1
sidebar_label: Introduction to Subgraphs
---

# DAOhaus V2 Subgraph Introduction

DAOhaus has a GraphQL API Endpoint hosted by [The Graph](https://thegraph.com/docs/about/introduction#what-the-graph-is) called a subgraph for indexing and organizing data from the DAOhaus smart contracts.

This subgraph can be used to query on-chain DAOhaus data. The subgraph data is serviced by a decentralized group of server operators called [Indexers](https://thegraph.com/docs/en/network/indexing/).

The DAOhaus subgraph works by listening for events emitted by one or more data sources (Smart Contracts) on the various chains. It handles the indexing and caching of data which can later be queried using the GraphQL API Endpoint, providing an excellent developer experience.

### Get Started

Learn more about how subgraphs work by checking out [The Graph's official documentation](https://thegraph.com/docs/en/). If you are unfamiliar with GraphQL, we recommend taking a quick look through their documentation first [here](https://graphql.org/learn/)

### Links

- [Subgraph URL](https://thegraph.com/explorer/subgraph?id=9uvKq57ZiNCdT9uZ6xaFhp3yYczTM4Fgr7CJHM6tdX9H&view=Overview)
- [Protocol](https://daohaus.club/)
- Graphql Endpoint: `https://gateway.thegraph.com/api/[api-key]/subgraphs/id/9uvKq57ZiNCdT9uZ6xaFhp3yYczTM4Fgr7CJHM6tdX9H`

## Helpful Resources

- [Video Tutorial on creating an API Key](https://www.youtube.com/watch?v=UrfIpm-Vlgs)
- [Managing your API Key & setting your indexer preferences](https://thegraph.com/docs/en/studio/managing-api-keys/)
- [Querying from an application](https://thegraph.com/docs/en/developer/querying-from-your-app/)
- [How to use the explorer and playground to query on-chain data](https://medium.com/@chidubem_/how-to-query-on-chain-data-with-the-graph-f8507488215)
