---
id: dev-proposals
title: DAO Proposals
sidebar_label: Proposals
slug: /devs/proposals
---

import useBaseUrl from "@docusaurus/useBaseUrl";

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

### Member Proposal

The member proposal is a simple way to join a DAO with tribute.

<img alt="Member Proposal Fields" src={useBaseUrl("img/member_proposal.png")} />

Fields:

- Details
- Shares Requested
- Token Tribute

### Funding Proposal

The funding proposal is a straight forward way to request or grant funds from the DAO.

<img
  alt="Funding Proposal Fields"
  src={useBaseUrl("img/funding_proposal.png")}
/>

Fields:

- Details
- Applicant
- Payment Requested

### Loot Grab Proposal

The loot grab proposal is a proposal where members provide tribute for non-voting shares in the DAO.

<img
  alt="Loot Grad Proposal Fields"
  src={useBaseUrl("img/funding_proposal.png")}
/>

Fields:

- Details
- Applicant
- Payment Requested
- Loot Requested 
- Tribute Offered

### Trade Proposal

The trade proposal is a simple swap between the proposer and the DAO at a proposed price.

<img alt="Trade Proposal Fields" src={useBaseUrl("img/trade_proposal.png")} />

Fields:

- Details
- Token Tribute
- Trade for Payment Requested

### Whitelist Proposal

The whitelist proposal function `submitWhitelistProposal` is used to approve tokens for usage within the DAO. Any tokens sent to the DAO without being whitelisted will be irretrievable without a whitelist proposal from the DAO.

<img
  alt="Whitelist Proposal Fields"
  src={useBaseUrl("img/whitelist_proposal.png")}
/>

#### Whitelist Proposal Fields

- Details
- Token Address

### GuildKick Proposal

The guild kick proposal function `submitGuildkickProposal` is used to prepare a vote to `jail` a member.

<img
  alt="GuildKick Proposal Fields"
  src={useBaseUrl("img/guildkick_proposal.png")}
/>

#### GuildKick Proposal Fields

- Details
- Member Address

## Things to Remember About Proposal Fields

### Applicant

- supports ENS, member select, 0x

### Tribute Input

- must be unlocked and less than balance

### Shares & Loot

- must be integers