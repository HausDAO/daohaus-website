---
id: subgraphs
title: Getting Moloch Data
sidebar_label: Subgraphs
slug: /devs/subgraphs
---

## What is TheGraph?

The Graph is an indexing protocol that the incentivizes and coordinates indexing of public blockchain data. The Graph provides queryable data using GraphQL for your API to plug into. By indexing Moloch contracts with The Graph any user with an access to TheGraph can find data on all compatible DAOs instantly.

## Subgraphs

### Primary "Supergraph" Subgraph

The primary DAOhaus subgraph tracks the primary entities of v1 and v2/2.1 DAOs: members, proposals, votes, and tokens. [Jump to explorers 👇](#daohaus-subgraph-explorers)

#### Moloches

```json
{
    moloches {
        id                      // ID               identifier or DAO address
        title                   // String           name of the DAO
        version                 // String           version of Moloch: 1, 2, 2.1
        summoner                // Address          address of the summoner
        newContract             // String
        deleted                 // Boolean          whether or not the dao has been deleted
        summoningTime           // BigInt           timestamp for when dao was summoned
        createdAt               // String           same as summoningTime
        totalShares             // BigInt           total number of shares for all members
        totalLoot               // BigInt           total number of non-voting shares for all members
        periodDuration          // BigInt           number of seconds in a proposal period
        votingPeriodLength      // BigInt           number of periods in the voting period
        gracePeriodLength       // BigInt           number of periods in the grace period
        proposalDeposit         // BigInt           deposit for proposal sponsorship
        dilutionBound           // BigInt           see docs, can't over dilute membership with proposal
        processingReward        // BigInt           reward for processing proposal, taken from deposit
        depositToken            // Token            token used for proposal deposit and default tribute
        approvedTokens          // [Token]          tokens whitelisted by the DAO
        tokens                  // [Token]          token balances
        members                 // [Member]         members (inc. previously) of the DAO
        tokenBalances           // [TokenBalance]   token balances of the dao
        proposals               // [Proposal]       proposals submitted to the DAO
        rageQuits               // [RageQuit]       rage quits from the DAO
        minions                 // [Minion]         minions launched for the DAO
        guildBankAddress        // Address          address of the GuildBank (same as dao in v2)
        guildBankBalanceV1      // BigInt           balance of GuildBank for v1 DAOs
    }
}
```

#### Members

```json

{
    members {
        id                          // ID               address + dao address
        createdAt                   // String           time entity was created
        moloch                      // Moloch           connected moloch entities
        molochAddress               // Address          moloch address of member
        memberAddress               // Address          member's address
        delegateKey                 // Address          member's delegate can vote on behalf
        shares                      // BigInt           number of shares
        loot                        // BigInt           number of non-voting shares
        exists                      // Boolean          exists in the DAO (?)
        highestIndexYesVote         // Proposal         proposal ID for highest yes vote (for RageQuit)
        tokenTribute                // BigInt           amount tributed for membership
        didRagequit                 // Boolean          has ragequitted
        votes                       // [Vote]           votes on proposals
        submissions                 // [Proposal]       proposals submitted
        tokenBalances               // [TokenBalance]   internal token balances for the member
        rageQuits                   // [RageQuit]       ragequits from the member
        proposedToKick              // Boolean          has been proposed to be kicked
        kicked                      // Boolean          has been kicked
        jailed                      // Proposal         proposal Id for guild kick
    }
}
```

#### Proposals

```json
{
    proposals {
        id                                  // ID       entity id of proposal
        createdAt                           // String
        proposalIndex                       // BigInt
        proposalId                          // BigInt
        moloch                              // Moloch
        molochAddress                       // Bytes
        member                              // Member
        memberAddress                       // Bytes
        delegateKey                         // Bytes
        applicant                           // Bytes
        proposer                            // Bytes
        sponsor                             // Bytes
        processor                           // Bytes
        sharesRequested                     // BigInt
        lootRequested                       // BigInt
        tributeOffered                      // BigInt
        tributeToken                        // Bytes
        tributeTokenSymbol                  // String
        tributeTokenDecimals                // BigInt
        paymentRequested                    // BigInt
        paymentToken                        // Bytes
        paymentTokenSymbol                  // String
        paymentTokenDecimals                // BigInt
        startingPeriod                      // BigInt
        yesVotes                            // BigInt
        noVotes                             // BigInt
        sponsored                           // Boolean
        sponsoredAt                         // String
        processed                           // Boolean
        processedAt                         // String
        didPass                             // Boolean
        cancelled                           // Boolean
        cancelledAt                         // String
        aborted                             // Boolean
        whitelist                           // Boolean
        guildkick                           // Boolean
        newMember                           // Boolean
        trade                               // Boolean
        details                             // String
        maxTotalSharesAndLootAtYesVote      // BigInt
        votes                               // [Vote!]
        yesShares                           // BigInt
        noShares                            // BigInt
        votingPeriodStarts                  // BigInt
        votingPeriodEnds                    // BigInt
        gracePeriodEnds                     // BigInt
        molochVersion                       // String
        isMinion                            // Boolean
        isMinionApplicant                   // Boolean
        minionAddress                       // Bytes
        minion                              // Minion
    }
}
```

#### Tokens

```json
{
    tokens {
        id              // ID
        moloch          // Moloch
        tokenAddress    // Address
        whitelisted     // Boolean
        symbol          // String
        decimals        // BigInt
    }
}
```

#### Minions

```json
{
    minions {
        id                  // ID
        createdAt           // String
        minionAddress       // Bytes
        molochAddress       // Bytes
        moloch              // Moloch
        details             // String
        minionType          // String
        proposals           // [Proposal]
    }
}
```

#### Votes

```json
{
    votes {
        id                  // ID
        createdAt           // String
        proposal            // Proposal
        member              // Member
        uintVote            // Int
        molochAddress       // Bytes
        memberAddress       // Bytes
        memberPower         // BigInt
        proposalIndex       // BigInt
        delegateKey         // Bytes
    }
}
```

#### RageQuits

```json
{
    ragequits {
        id                  // ID
        createdAt           // String
        moloch              // Moloch
        molochAddress       // Bytes
        member              // Member
        memberAddress       // Bytes
        shares              // BigInt
        loot                // BigInt
    }
}
```

#### DAOhaus Subgraph Explorers

- [Mainnet](https://thegraph.com/explorer/subgraph/odyssy-automaton/daohaus)
- [Kovan](https://thegraph.com/explorer/subgraph/odyssy-automaton/daohaus-kovan)
- [Rinkeby](https://thegraph.com/explorer/subgraph/odyssy-automaton/daohaus-rinkeby)
- [xDai](https://thegraph.com/explorer/subgraph/odyssy-automaton/daohaus-xdai)
- [Matic](http://35.224.233.211/subgraphs/name/matic/daohaus)

### Stats Subgraph

The DAOhaus Stats Subgraph provides aggregated statistics and metrics for users and communities across the platform.

#### Moloches Stats

```json
{
    moloch {
        id                      // ID
        timestamp               // String
        summoner                // Bytes
        title                   // String
        version                 // String
        newContract             // String
        deleted                 // Boolean
        summoningTime           // BigInt
        guildBankAddress        // Bytes
        proposalCount           // BigInt
        memberCount             // BigInt
        voteCount               // BigInt
        rageQuitCount           // BigInt
        balances                // [Balance]
        totalGas                // BigInt
    }
}
```

#### Balances

```json
{
    balances {
        id                      // ID!
        timestamp               // String!
        balance                 // BigInt!
        tokenAddress            // Bytes!
        molochAddress           // Bytes!
        moloch                  // Moloch!
        payment                 // Boolean!
        tribute                 // Boolean!
        action                  // String!
        amount                  // BigInt
        rageQuitAllShares       // Boolean
        version                 // String!
        tokenSymbol             // String
        tokenDecimals           // BigInt
        currentShares           // BigInt!
        currentLoot             // BigInt
    }
}
```

#### Stats Badge

```json
{
    badges {
        id                      // ID
        memberAddress           // Bytes
        voteCount               // BigInt
        summonCount             // BigInt
        proposalSponsorCount    // BigInt
        proposalSubmissionCount // BigInt
        proposalProcessorCount  // BigInt
        rageQuitCount           // BigInt
        jailedCount             // BigInt
        memberships             // BigInt
        dissents                // BigInt
        assents                 // BigInt
        totalGas                // BigInt
    }
}
```

#### Stats Subgraph Explorers

- [Mainnet](https://thegraph.com/explorer/subgraph/odyssy-automaton/daohaus-stats)
- [Kovan](https://thegraph.com/explorer/subgraph/odyssy-automaton/daohaus-stats-kovan)
- [Rinkeby](https://thegraph.com/explorer/subgraph/odyssy-automaton/daohaus-stats-rinkeby)
- [xDai](https://thegraph.com/explorer/subgraph/odyssy-automaton/daohaus-stats-xdai)
- [Matic](http://35.224.233.211/subgraphs/name/matic/daohaus/graphql)

### Transmutation Subgraph

The transmutation subgraph tracks transmutation proposal entities.

#### Transmutation Entities

```json
{
    transmutations {
        id
        ...
    }
}
```

#### Transmutation Explorer

- [Kovan](https://thegraph.com/explorer)
- [xDai](https://thegraph.com/explorer)

