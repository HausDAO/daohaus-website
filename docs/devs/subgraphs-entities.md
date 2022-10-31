---
title: Entities
sidebar_position: 2
sidebar_label: Entities
---

# Entities

- [Moloch](#moloch)
- [TokenBalance](#tokenbalance)
- [Token](#token)
- [Member](#member)
- [Vote](#vote)
- [Proposal](#proposal)
- [RageQuit](#ragequit)
- [DaoMeta](#daometa)
- [Minion](#minion)
- [MinionStream](#minionstream)
- [SafeMinion](#safeminion)
- [MolochTransaction](#molochtransaction)
- [ProposalEscrow](#proposalescrow)
- [MinionAction](#minionaction)
- [Shaman](#shaman)
- [Content](#content)
- [Record](#record)

## Moloch

| Field                 | Type            | Description                                                                 |
| --------------------- | --------------- | --------------------------------------------------------------------------- |
| id                    | ID!             | Unique identifier and primary key of the entity                             |
| version               | String          | Version of moloch contract (v1, v2, v2.1, v2.2)                             |
| summoner              | Bytes!          | Address that created the dao                                                |
| newContract           | String          | Deprecated                                                                  |
| deleted               | Boolean         | Deprecated                                                                  |
| summoningTime         | BigInt!         | Timestamp of the block when the dao was summoned - duplicated               |
| createdAt             | String!         | Timestamp of the block when the dao was summoned                            |
| periodDuration        | BigInt!         | Length in seconds of the current voting period and grace period             |
| votingPeriodLength    | BigInt!         | Length in seconds of the current voting period                              |
| gracePeriodLength     | BigInt!         | Length in seconds of the current grace period                               |
| proposalDeposit       | BigInt!         | Deposit amount required to submit a proposal                                |
| dilutionBound         | BigInt!         | (1/dilutionBound) is the minimum membership treshold for a ragequit to pass |
| processingReward      | BigInt!         | Reward amount for processing a proposal                                     |
| depositToken          | Token!          | Token address for the dao's primary token                                   |
| approvedTokens        | [Token!]!       | Approved tokens scoped to this dao                                          |
| guildBankAddress      | Bytes           | The dao's treasury address                                                  |
| guildBankBalanceV1    | BigInt          | Deprecated                                                                  |
| tokens                | [Token!]!       | Tokens scoped to this dao                                                   |
| members               | [Member!]!      | Member addresses scoped to this dao                                         |
| tokenBalances         | [TokenBalance!] | Token balances scoped to this dao                                           |
| proposals             | [Proposal!]     | Proposals scoped to this dao                                                |
| rageQuits             | [RageQuit!]     | Ragequits scoped to this dao                                                |
| minions               | [Minion!]       | Minion addresses scoped to this dao                                         |
| shamans               | [Shaman!]       | Shamans scoped to this dao                                                  |
| documents             | [Content!]      | Documents scoped to this dao                                                |
| records               | [Record!]       | Records scoped to this dao                                                  |
| totalShares           | BigInt!         | Total circulating shares tokens                                             |
| totalLoot             | BigInt!         | Total circulating loot tokens                                               |
| v22Setup              | Boolean         | Boolean value of whether v2.2 is set up                                     |
| spamPreventionAddress | Bytes           | Unused - address that receives tributes for submitting a proposal           |
| spamPreventionAmount  | BigInt          | Unused - tribute amount required for submitting a proposal                  |

## TokenBalance

| Field        | Type     | Description                                                          |
| ------------ | -------- | -------------------------------------------------------------------- |
| id           | ID!      | Unique identifier and primary key of the entity                      |
| moloch       | Moloch!  | Moloch dao scoped to this token                                      |
| token        | Token!   | Token scoped to this token balance                                   |
| tokenBalance | BigInt!  | Amount of tokens in balance                                          |
| member       | Member   | Address of the associated member                                     |
| guildBank    | Boolean! | Boolean value of whether the token balance belongs to the moloch dao |
| ecrowBank    | Boolean! | Boolean value of whether the token balance belongs in the escrow     |
| memberBank   | Boolean! | Boolean value of whether the token balance belongs to the member     |

## Token

| Field        | Type          | Description                                     |
| ------------ | ------------- | ----------------------------------------------- |
| id           | ID!           | Unique identifier and primary key of the entity |
| moloch       | Moloch!       | Moloch dao scoped to this token balance         |
| tokenAddress | TokenAddress! | Token address                                   |
| whitelisted  | Boolean!      | Boolean value of whether token is whitelisted   |
| symbol       | String        | Token symbol                                    |
| decimals     | BigInt        | Token decimals                                  |

## Member

| Field                | Type            | Description                                                                                                                           |
| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| id                   | ID!             | Unique identifier and primary key of the entity                                                                                       |
| createdAt            | String!         | Timestamp when the member was created                                                                                                 |
| moloch               | Moloch!         | Moloch dao scoped to this member                                                                                                      |
| molochAddress        | Bytes!          | Related dao address                                                                                                                   |
| memberAddress        | Bytes!          | Address of the member                                                                                                                 |
| delegateKey          | Bytes!          | Address that has received delegated shares from the member (most often, the member's own address)                                     |
| shares               | BigInt!         | Current shares held by the member                                                                                                     |
| loot                 | BigInt!         | Current loot held by the member                                                                                                       |
| exists               | Boolean!        | Deprecated                                                                                                                            |
| highestIndexYesVotes | Proposal        | latest proposal that the member has voted yes on (helper value for disabling ragequit if member has a yes vote on an active proposal) |
| tokenTribute         | BigInt!         | Amount of token tributed when the member first joined the dao                                                                         |
| didRageQuit          | Boolean!        | Boolean value of whether member ragequit from the dao                                                                                 |
| votes                | [Vote!]         | Votes scoped to this member                                                                                                           |
| submissions          | [Proposal!]     | Submitted proposals scoped to this member                                                                                             |
| tokenBalances        | [TokenBalance!] | Token balances scoped to this member                                                                                                  |
| rageQuits            | [RageQuit!]     | Rage quits scoped to this member                                                                                                      |
| proposedToTick       | Boolean         | Boolean value of whether member was proposed to be kicked from the dao                                                                |
| kicked               | Boolean         | Boolean value of whether member was kicked from the dao                                                                               |
| jailed               | BigInt          | Proposal index of the proposal that kicked the member from the dao (0 if member is unkicked)                                          |
| isDao                | Moloch          | Moloch dao address (if the member is a dao)                                                                                           |
| isSafeMinion         | SafeMinion      | Safe minion address (if the member is a safe minion)                                                                                  |

## Vote

| Field         | Type      | Description                                                                                       |
| ------------- | --------- | ------------------------------------------------------------------------------------------------- |
| id            | ID!       | unique identifier and primary key of the entity                                                   |
| createdAt     | String!   | Block timestamp when the vote was submitted                                                       |
| proposal      | Proposal! | Related proposal                                                                                  |
| member        | Member!   | Related/voting member                                                                             |
| uintVote      | Int!      | Whether the dao member has voted yes or no (1 for yes, 2 for no)                                  |
| molochAddress | Bytes!    | Contract address of the DAO related to this vote                                                  |
| memberAddress | Bytes     | Related/voting member address                                                                     |
| memberPower   | BigInt    | Member's proportional share of all dao shares at time of vote                                     |
| proposalIndex | BigInt    | Order that the proposal went through sponsorship process                                          |
| delegateKey   | Bytes     | Address that has received delegated shares from the member (most often, the member's own address) |

## Proposal

| Field                          | Type              | Description                                                                                       |
| ------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------- |
| id                             | ID!               | Unique identifier and primary key of the entity                                                   |
| createdAt                      | String!           | Block timestamp when the vote was submitted                                                       |
| createdBy                      | Bytes!            | Address that submitted the proposal                                                               |
| proposalIndex                  | BigInt            | Order that the proposal went through sponsorship process                                          |
| proposalId                     | BigInt!           | Id of the proposal                                                                                |
| moloch                         | Moloch!           | Moloch dao scoped to this                                                                         |
| molochAddress                  | Bytes!            | Contract address of the DAO related to this proposal                                              |
| member                         | Member!           | Member scoped to this proposal                                                                    |
| memberAddress                  | Member!           | Address of associated member                                                                      |
| delegateKey                    | Bytes!            | Address that has received delegated shares from the member (most often, the member's own address) |
| applicant                      | Bytes!            | Address of the proposal applicant                                                                 |
| proposer                       | Bytes             | Address of the proposal proposer                                                                  |
| sponsor                        | Bytes!            | Address of the proposal sponsor                                                                   |
| processor                      | Bytes             | Address of the proposal processor                                                                 |
| sharesRequested                | BigInt!           | Amount of shares requested in this proposal                                                       |
| lootRequested                  | BigInt!           | Amount of loot requested in this proposal                                                         |
| tributeOffered                 | BigInt!           | Amount of tribute offered in this proposal                                                        |
| tributeToken                   | Bytes!            | Address of tribute token                                                                          |
| tributeTokenSymbol             | String            | Symbol of tribute token"                                                                          |
| tributeTokenDecimals           | BigInt            | Decimals of tribute token                                                                         |
| paymentRequested               | BigInt!           | Amount of payment requested                                                                       |
| paymentToken                   | Bytes!            | Address of payment token requested                                                                |
| paymentTokenSymbol             | String            | Symbol of payment token requested                                                                 |
| paymentTokenDecimals           | BigInt            | Decimals of payment token                                                                         |
| startingPeriod                 | BigInt            | Timestamp when the proposal enters the proposal queue                                             |
| yesVotes                       | BigInt!           | Amount of current shares that have voted yes                                                      |
| noVotes                        | BigInt!           | Amount of current shares that have voted no                                                       |
| sponsored                      | Boolean!          | Boolean value of whether proposal was sponsored                                                   |
| sponsoredAt                    | String            | Block timestamp when the proposal was sponsored                                                   |
| processed                      | Boolean!          | Boolean value of whether proposal was processed                                                   |
| processedAt                    | String            | block timestamp when the proposal was processed                                                   |
| didPass                        | Boolean!          | Boolean value of whether proposal was passed                                                      |
| cancelled                      | Boolean           | Boolean value of whether proposal was cancelled                                                   |
| cancelledAt                    | String            | Block timestamp when the proposal was cancelled                                                   |
| aborted                        | Boolean           | Boolean value of whether this proposal is aborted                                                 |
| whiteList                      | Boolean           | Boolean value of whether this proposal is a whitelist token proposal                              |
| guildKick                      | Boolean           | Boolean value of whether this proposal is a guildkick proposal                                    |
| newMember                      | Boolean           | Boolean value of whether this proposal is a new member proposal                                   |
| trade                          | Boolean           | Boolean value of whether this proposal is a trade proposal                                        |
| guildkickOrWhitelistOrMinion   | Boolean           | Unused                                                                                            |
| details                        | String            | Proposal details scoped to this proposal                                                          |
| maxTotalSharesAndLootAtYesVote | BigInt            | Total dao shares and loot at time of yes vote (helper value for dilution bound calculation)       |
| votes                          | [Vote!]           | Votes scoped to this proposal                                                                     |
| yesShares                      | BigInt!           | Number of shares that voted yes                                                                   |
| noShares                       | BigInt!           | Number of shares that voted no                                                                    |
| votingPeriodStarts             | BigInt!           | Timestamp when the voting period starts                                                           |
| votingPeriodEnds               | BigInt!           | Timestamp when the voting period ends                                                             |
| gracePeriodEnds                | BigInt!           | Timestamp when the grace period ends                                                              |
| molochVersion                  | Moloch!           | Version of the moloch dao                                                                         |
| isMinion                       | Boolean!          | Boolean value of whether this is a minion proposal                                                |
| uberHausMinionExecuted         | Boolean           | Unused                                                                                            |
| executed                       | Boolean           | Boolean value of whether the proposal is executed (for minion proposals only)                     |
| minionAddress                  | Bytes             | Minion address                                                                                    |
| minionExecuteActionTx          | MolochTransaction | Transaction hash scoped to the minion execution for this proposal                                 |
| minion                         | Minion            | Minion object scoped to this proposal                                                             |
| escrow                         | ProposalEscrow    | Escrow minion that holds a nft tribute for a new member proposal                                  |
| actions                        | [MinionAction!]   | Minion action scoped to this proposal                                                             |

## RageQuit

| Field         | Type    | Description                                      |
| ------------- | ------- | ------------------------------------------------ |
| id            | ID!     | Unique identifier and primary key of the entity  |
| createdAt     | String! | Timestamp of the block when the dao was summoned |
| moloch        | Moloch! | Moloch dao scoped to this ragequit               |
| molochAddress | Bytes!  | Related dao address                              |
| member        | Member! | Member scoped to this ragequit                   |
| memberAddress | Bytes!  | Related member address                           |
| shares        | BigInt! | Number of shares ragequit                        |
| loot          | BigInt! | Number of loot ragequit                          |

## DaoMeta

| Field       | Type   | Description                                     |
| ----------- | ------ | ----------------------------------------------- |
| id          | ID!    | Unique identifier and primary key of the entity |
| title       | String | Deprecated                                      |
| version     | String | Deprecated                                      |
| newContract | String | Deprecated                                      |
| http        | String | Deprecated                                      |

## Minion

| Field                        | Type            | Description                                                  |
| ---------------------------- | --------------- | ------------------------------------------------------------ |
| id                           | ID!             | Unique identifier and primary key of the entity              |
| createdAt                    | String!         | Timestamp of the block when the minion was summoned          |
| minionAddress                | Bytes!          | Related dao address                                          |
| molochAddress                | Bytes!          | Moloch dao scoped to this minion                             |
| details                      | String!         | Name of the minion                                           |
| minionType                   | String!         | Type of minion                                               |
| proposals                    | [Proposal!]     | Proposals scoped to this minion                              |
| uberHausAddress              | Bytes           | Address of uberhaus dao                                      |
| uberHaus                     | Moloch          | Deprecated                                                   |
| uberHausDelegateRewardFactor | BigInt          | Deprecated                                                   |
| uberHausDelegate             | Bytes           | UberHausDelegate                                             |
| safeAddress                  | Bytes           | address of related safe                                      |
| safeMinionVersion            | String          | Version of the safe minion                                   |
| crossChainMinion             | Boolean!        | Boolean value of whether this minion is a cross-chain minion |
| foreignChainId               | String          | Chain id of the foreign chain                                |
| foreignSafeAddress           | Bytes           | Safe address on the foreign chain                            |
| bridgeModule                 | String          | Bridge module address for a cross-chain minion               |
| version                      | String          | Version of the minion                                        |
| minQuorum                    | BigInt          | Minimum quorum percentage of the minion                      |
| streams                      | [MinionStream!] | Minion stream scoped to this minion                          |

## MinionStream

| Field             | Type     | Description                                             |
| ----------------- | -------- | ------------------------------------------------------- |
| id                | ID!      | Unique identifier and primary key of the entity         |
| proposalId        | String!  | Related proposal Id                                     |
| createdAt         | String!  | block id when the minion stream was created             |
| to                | Bytes!   | Recipient address of minion stream                      |
| tokenAddress      | Bytes!   | Token address of minion stream                          |
| superTokenAddress | Bytes!   | Token address of super token                            |
| rate              | BigInt!  | Rate of minion stream per block                         |
| minDeposit        | BigInt!  | Minimum deposit amount to start the minion stream       |
| proposer          | Bytes!   | Member address that proposed the minion stream          |
| executed          | Boolean! | Boolean value of whether the minion stream was executed |
| executedBlock     | BigInt   | Block id when the minion stream was executed            |
| executedAt        | String   | Block timestamp when the minion stream was executed     |
| execTxhash        | Bytes    | Transaction hash when the minion stream was executed    |
| active            | Boolean! | Boolean value of whether the minion stream is active    |
| ctx               | Bytes!   | Transaction hash of cancellation of the minion stream   |
| cancelledAt       | String   | Block timestamp when the minion stream was cancelled    |
| cancelledBy       | Bytes    | Transaction hash hen the minion stream was cancelled    |
| minion            | Minion!  | Minion scoped to this minion stream                     |

## SafeMinion

| Field   | Type       | Description                                     |
| ------- | ---------- | ----------------------------------------------- |
| id      | ID!        | Unique identifier and primary key of the entity |
| minions | [Minion!]! | Minion scoped to this safe minion               |

## MolochTransaction

| Field     | Type    | Description                                             |
| --------- | ------- | ------------------------------------------------------- |
| id        | ID!     | Unique identifier and primary key of the entity         |
| createdAt | String! | Block timestamp when the moloch transaction was created |

## ProposalEscrow

| Field          | Type      | Description                                                                        |
| -------------- | --------- | ---------------------------------------------------------------------------------- |
| id             | ID!       | Unique identifier and primary key of the entity                                    |
| proposal       | Proposal! | Proposal scoped to this proposal escrow                                            |
| minionAddress  | Bytes!    | Address of the associated minion                                                   |
| molochAddress  | Bytes!    | Address of the associated moloch dao                                               |
| proposer       | Bytes!    | Address of the user who proposed this proposal escrow                              |
| tokenAddresses | [Bytes!]  | Address of the associated token                                                    |
| tokenTypes     | [BigInt!] | Token standards for tokens in escrow (1 for erc-20, 2 for erc-721, 3 for erc-1155) |
| tokenIds       | [BigInt!] | Token IDs for tokens in escrow                                                     |
| amounts        | [BigInt!] | Amounts for tokens in escrow                                                       |

## MinionAction

| Field         | Type      | Description                                                           |
| ------------- | --------- | --------------------------------------------------------------------- |
| id            | ID!       | Unique identifier and primary key of the entity                       |
| proposal      | Proposal! | Proposal scoped to this minion action                                 |
| minionAddress | Bytes!    | Related minion address                                                |
| molochAddress | Bytes!    | Related dao address                                                   |
| target        | Bytes!    | Target address of the minion action                                   |
| withdrawToken | Bytes!    | Address of the token withdrawn from this minion action                |
| withdrawValue | BigInt!   | Value of the token withdrawn from this minion action                  |
| data          | String!   | Encoded data for minion action                                        |
| memberOnly    | Boolean!  | Boolean value on whether the proposal can be executed by members only |
| index         | BigInt!   | Order of the minion action                                            |

## Shaman

| Field         | Type     | Description                                     |
| ------------- | -------- | ----------------------------------------------- |
| id            | ID!      | Unique identifier and primary key of the entity |
| createdAt     | String!  | Block timestamp when the shaman was added       |
| shamanAddress | Bytes!   | Address of the shaman                           |
| molochAddress | Bytes!   | Related dao address                             |
| moloch        | Moloch!  | Moloch dao scoped to this shaman                |
| enabled       | Boolean! | Boolean value of whether this shaman is enabled |

## Content

| Field           | Type     | Description                                                 |
| --------------- | -------- | ----------------------------------------------------------- |
| id              | ID!      | Unique identifier and primary key of the entity             |
| createdAt       | String!  | Block timestamp when the shaman was added                   |
| transactionHash | Bytes!   | Transaction hash when the content was created               |
| molochAddress   | String   | Related dao address                                         |
| moloch          | Moloch!  | Moloch dao scoped to this content                           |
| memberAddress   | Bytes!   | Related member address                                      |
| content         | String!  | Content of the content                                      |
| contentType     | String!  | Type of the content                                         |
| location        | String!  | Location of the content                                     |
| title           | String   | Title of the content                                        |
| description     | String   | Description of the content                                  |
| ratified        | Boolean! | Boolean value of whether the content is ratified by the dao |
| rawData         | String!  | Raw content of the content before parsing                   |

## Record

| Field       | Type    | Description                                     |
| ----------- | ------- | ----------------------------------------------- |
| id          | ID!     | Unique identifier and primary key of the entity |
| createdAt   | String! | Block timestamp when the record was added       |
| createdBy   | Bytes!  | Address that created the record                 |
| moloch      | Moloch! | Moloch dao scoped to this record                |
| tag         | Bytes!  | Related tag address                             |
| table       | String! | Record table                                    |
| contentType | String! | Type of the record                              |
| content     | String! | Content of the record                           |
