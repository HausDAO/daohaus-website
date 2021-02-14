---
id: proposals
title: DAO Proposals
sidebar_label: Proposals
slug: /proposals
---

## Proposal Types

### Generic Proposal (Member, Funding, Trade)

The generic proposal function `submitProposal` is used for most proposal types and are modified on the frontend to accommodate different user facing proposal configurations based on the subset of inputs.

#### General Proposal Fields

Fields can be configured to match the desired proposal type inputs.

- Details (Title, Description, & Link)
- Recipient/Applicant
- Shares Requested
- Loot Requested
- Tribute Offered
- Payment Requested

#### Pre-made proposal configurations

##### Member Proposal

The member proposal is a simple way to join a DAO with tribute.

Fields:

- Details
- Shares Requested
- Tribute Offered

##### Funding Proposal

The funding proposal is a straight forward way to request or grant funds from the DAO.

Fields:

- Details
- Recipient
- Payment Requested

##### Loot Grab Proposal

The loot grab proposal is a proposal where members provide contribution for non-voting shares in the DAO.

Fields:

- Details
- Recipient
- Tribute Offered
- Loot Requested is calculated in the proposal settings

##### Trade Proposal

The trade proposal is a simple swap between the proposer and the DAO at a proposed price.

Fields:

- Details
- Recipient
- Payment Requested
- Tribute Offered

### Whitelist Proposal

The whitelist proposal function `submitWhitelistProposal` is used to approve tokens for usage within the DAO. Any tokens sent to the DAO without being whitelisted will be irretrievable without a whitelist proposal from the DAO.

#### Whitelist Proposal Fields

- Details
- Token Address

### GuildKick Proposal

The guild kick proposal function `submitGuildkickProposal` is used to prepare a vote to `jail` a member.

#### GuildKick Proposal Fields

- Details
- Member Address

## Some Intricacies of Proposal Fields

### Applicant

- supports ENS, member select, 0x

### Tribute Input

- must be unlocked and less than balance

### Shares & Loot

- must be integers
