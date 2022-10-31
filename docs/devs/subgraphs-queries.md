---
title: Queries
sidebar_position: 3
sidebar_label: Queries
---

## Sample Queries

Below are some sample queries you can use to gather information from the polygon root subgraph

You can build your own queries using a [GraphQL Explorer](https://graphiql-online.com/graphiql) and enter your endpoint to limit the data to exactly what you need.

### Moloches

Description: This query filters through moloch proposals that didn’t get sponsored.

```graphql
{
  moloches {
    id
    createdAt
    proposals(where: { sponsored: false }) {
      details
      yesVotes
      sponsored
    }
    votingPeriodLength
  }
}
```

### RageQuits

Description: This query fetches the first 20 ragequits and the members associated.

```graphql
{
  rageQuits(first: 20) {
    id
    member {
      id
      createdAt
      didRagequit
      kicked
      memberAddress
      proposedToKick
    }
  }
}
```

### Minions

Description: This query fetches minion proposals that passed.

```graphql
{
  minions {
    minionType
    details
    proposals(where: { isMinion: true, didPass: true }) {
      createdAt
      didPass
      isMinion
    }
    minionAddress
  }
}
```
