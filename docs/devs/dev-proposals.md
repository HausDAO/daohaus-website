---
id: dev-proposals
title: DAO Proposals
sidebar_label: Proposals
slug: /devs/proposals
---

As a no-code platform for Moloch DAOs, most of DAOhaus' concepts and functionality originate from the functionalities of a Moloch DAO. If you are new to Moloch DAOs, refer to this [Mirror article](https://daohaus.mirror.xyz/U_JQtheSzdpRFqQwf9Ow3LgLNG0WMZ6ibAyrjWDu_fc) for an introduction to Moloch DAOs.

## Proposals
> If you are new to Proposals in Moloch DAOs, refer to [Introduction to Proposals](https://daohaus.club/docs/proposals).

Proposals are the mechanism which all Moloch DAOs use to take any action, from issuing shares to members to sending funds to addresses or interacting with smart contracts. Before a proposal can be executed, it has to go through the 6 lifecycle stages: Submission, Sponsorship, Voting Period, Grace Period, Processing, Execution

![](https://i.imgur.com/arVqE4x.png)

**Default Proposal Types**

Every DAO comes with default proposal types which enable the core functions of Moloch DAOs such as Membership, Funding, GuildKick, etc. These proposal types come with field inputs that are necessary for their respective functions. 

For instance, a **New Member Proposal** is a proposal that allows new members to join a DAO by requesting shares and providing tribute.  This Proposal Type contains the default fields ("Title", "Description" & "Link") as well as custom fields like "Shares Requested" and "Token Tribute".

![Member Proposal Fields](https://daohaus.club/img/member_proposal.png)

Another example is **Funding Proposal** that allows members to request funds from the DAO. Apart from default fields ("Title", "Description" & "Link"), the Proposal has fields such as "Applicant" and "Payment Requested".

![Funding Proposal Fields](https://daohaus.club/img/funding_proposal.png)

These are the standard proposal types used within the governance in most DAOs.
* Membership - Tributing capital and Requesting new shares to join the DAO
* Funding - Tributing Spoils or Requesting funds from the DAO to work on internal projects and improvements
* Token - Request to add support for a new ERC20 token
* Trade - Request the DAO to swap one asset for another within the War Chest
* GuildKick - Request to forcibly remove a malicious member through a vote
* Minion - A contract that allows execution of arbitrary calls i.e swapping assets in the DAO bank


**Custom Proposals (Boosts)**

DAOHaus is designed to be extended by external developers. By working with our proposal "code legos" developers can create "Boosts" to extend DAOhaus functionality. A Boost can include custom fields, inputs and layouts to build new proposal types.  For more information about Boosts, refer to documentation on [Boosts on the DAOhaus platform](./boosts).