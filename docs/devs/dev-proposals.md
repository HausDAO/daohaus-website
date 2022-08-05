---
id: dev-proposals
title: DAO Proposals
sidebar_label: Proposals
slug: /devs/proposals
---

DAOhaus is a no-code platform for Moloch DAOs. This means most of the concepts and functionality originate from the underlying Moloch DAO contracts.

If you are new to Moloch DAOs, refer to this [Mirror article](https://daohaus.mirror.xyz/U_JQtheSzdpRFqQwf9Ow3LgLNG0WMZ6ibAyrjWDu_fc) for an introduction to Moloch DAOs.

## Proposals

Proposals are the fundamental tools that allow Moloch DAOs to take any action.

A proposal is required to issue shares to members, send funds to addresses or interact with smart contracts.

Before a proposal can be executed, it has to go through the 6 lifecycle stages: Submission, Sponsorship, Voting Period, Grace Period, Processing, Execution.

If a proposal reaches the Execution stage (meaning the proposal passed), the appropriate transaction will be executed on-chain.

![](https://i.imgur.com/arVqE4x.png)

### Default Proposal Types

When you launch a new Moloch DAO through DAOhaus, you have access to many default proposal types. These proposals enable the core functions of your DAO.

These functions include Membership, Funding, GuildKick and more. The DAOhaus app provides you with the necessary forms and inputs for each proposal type.

For example, a **New Member Proposal** is a proposal that allows new members to join a DAO by requesting shares and providing tribute. When you initiate a New Member Proposal, the app will prompt you for a Title, Description & Link (fields that appear on all proposal types) as well as Shares Requested and Token Tribute (fields needed to process a new membership).

![Member Proposal Fields](https://daohaus.club/img/member_proposal.png)

Another example is **Funding Proposal** that allows members to request funds from the DAO. In addition to the default fields, the Proposal has Applicant and Payment Requested fields to specify the recipient and amount of the funding transaction.

![Funding Proposal Fields](https://daohaus.club/img/funding_proposal.png)

These are the standard proposal types used for governance of most DAOs.

- **Membership** - Tributing capital and Requesting new shares to join the DAO
- **Funding** - Requesting funds from the DAO to work on internal projects and improvements
- **Token** - Request to add support for a new ERC20 token
- **Trade** - Request the DAO to swap one asset for another within the War Chest
- **GuildKick** - Request to forcibly remove another member through a vote
- **Minion** - Execute an external contract function e.g. swapping assets in the DAO bank

### Custom Proposals (Boosts)

DAOHaus is designed to be extended by external developers.

By working with proposal "Code Legos", developers can create "Boosts" to extend DAOhaus functionality. Code Legos allow modular creation of field inputs, form layouts and transaction payloads.

Boosts can interact with external smart contracts (via [Minions](/docs/devs/treasury/)) or off-chain APIs, allowing for a wide range of use cases.

Developers are able to publish these Boosts on the [Boosts Marketplace](https://daohaus.club/docs/users/boosts/installing-boosts) for DAOs to install so they can access your newly created functionality.

When you activate a Boost for your DAO, all members will be able to create, vote and execute a new custom proposal type.

> If you are new to Boosts, please refer to the [Boosts 101](/docs/users/boosts) in the User Docs

> If you would like to build a Boost, visit our [Boost Builder Tutorial](/docs/devs/build-a-boost)
