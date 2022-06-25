---
id: proposals
title: Proposals
sidebar_label: Proposals
---

Proposals can be used for all types of decision-making in the DAO. Add/remove members, allocate Shares and Loot, distribute funds, and even interact with other applications and communities.

### Standard Proposal Types

These are the standard proposal types used within the governance in most DAOs. 

-   **Membership** - Tributing capital and Requesting new shares to join the DAO
-   **Funding** - Tributing Spoils or Requesting funds from the DAO to work on internal projects and improvements
-   **Token** -  Request to add support for a new ERC20 token
-   **Trade**  - Request the DAO to swap one asset for another within the War Chest
-   **GuildKick** - Request to forcibly remove a malicious member through a vote
-   **Minion** - A contract that allows execution of arbitrary calls i.e swapping assets in the DAO bank

With additional Minions and Boosts, there will be more proposal types available for your DAO (e.g. "Superfluid" for Superfluid Minion, etc.)

### Proposal Playlists 

Proposal playlists are custom folders for you to group relevant proposals together, minimizing the information overload for DAO members when submitting proposals. 

More specifically, Proposal Playlists enable DAOs to: 
* **Group proposals together in a playlist** to streamline for a specific persona (e.g. "New Joiners") or use case (e.g. "DeFi/NFTs")
* **Edit proposal titles and description** to optimise the language used for your DAO members' persona 

The default proposal playlists are: 
1. **Favorites**: Commonly used proposals to help you kickstart your DAO's favourite proposals
2. **The Classics**: Classic proposal types if you are more familiar with the previous Proposals flow 

To learn how to create, edit and manage Proposal Playlists, refer to [How To Manage Proposal Playlists](manage-proposal-playlists.md). 


### Proposal Process

To submit a proposal, navigate to your [DAOhaus DAO](https://app.daohaus.club/explore) and select “View Proposals” followed by New Proposal.

Select the Proposal Type (described above) and fill in the relevant information. 

![](https://i.imgur.com/MCHcVzJ.png)

> The default Proposal Type shown will be the "Favorites" proposals. If you cannot find your proposals in "Favorites", try toggling to another Proposal Playlist. 

Here are some of the things you’ll want to keep in mind when filling out a proposal.

-   **TITLE:** Enter a description of the proposal. Example: New Member - Jane Doe
-   **DESCRIPTION:** Anything you believe is relevant to your proposal. The shorter the description the better, and the important piece here is the _WHAT_ you are asking for and _WHY_.
-   **LINK:** Whatever information gives us the best context to review your proposal and make an informed decision.
-   **APPLICANT** With respect to funding proposals, this is the recipient or sender address you would like to have funds sent to or from.  
-   **PAYMENT REQUESTED:** The number of Shares or amount of payment requested. Payment can be requested in any token held by the DAO, or in shares and loot.
-   **+REQUEST SHARES:** Voting shares in the DAO. If it is a funding proposal, Members can request payment be made in shares up to x% of the total amount requested.
-   **+REQUEST LOOT:** Non-voting shares in the DAO. This means you will have shares which can be raqequit but do not hold voting rights. Loot shares cost the same as regular shares.
-   **GIVE TRIBUTE:** The amount of capital you are committing to deposit to the DAO bank. (Tribute is relevant to Membership and Funding Proposals).


### Stages of a Proposal

**1. Submit Proposal**

Anyone, even non-members, can submit proposals to the DAO.

**2. Sponsor Proposal**

After submitting a proposal, it will enter the **Unsponsored Proposals** section. This means someone with shares (which could be you) must Champion the proposal in order for it to be moved to voting.

*Note: You can sponsor your own Proposal, but it is recommended that you have another member sponsor it so they can make sure you have filled out the proposal with the correct information and you get the result you intended for.*

Only members can 'Sponsor' the proposal, sending it to the `Queue`

**3. In Queue**

Once the proposal has been sponsored it will enter the **Queue**. The queue ensures proposals are funneled to voting in an orderly fashion. One proposal will go from the queue to the Voting Period in a time-frame specified by the summoners of your DAO.

**4. Voting Period**

Once in the **Voting Period**, members can now vote on the proposal. Every proposal has an 'x' amount of time in the voting period where it must receive more Yes than No votes to pass.

**5. Grace Period**

Voting is over, and the Proposal is set to pass or fail depending on the votes cast during Voting. Members who voted No, and have no other pending Yes votes, can ragequit during this period

**6. Ready for Processing**

Next, The proposal is sent to **Processing** in which the vote is time stamped on-chain.

**7. Completed**

After being processed, the proposal is marked as **Completed**, and all shares, funds or outcomes are executed as specified in the proposal. All outcomes of a proposal that affect you can be viewed by clicking your Address (top right) and selecting **View Member Profile**.
