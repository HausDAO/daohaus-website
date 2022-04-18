---
id: superfluid-boost
title: Superfluid
sidebar_label: Superfluid
---

* **Category**: `Payments`
* **Publisher**: [DAOhaus](https://app.daohaus.club/dao/0x64/0xef3d8c4fbb1860fceab16595db7e650cd5ad51c1)
* **Available Networks**: `Ethereum Mainnet`, `Polygon`, `Gnosis Chain`
* **Github**: -

:::info
Editors' note: We recommend using a V3 (Safe Minion) to primarily hold funds and Superfluid's minion for streaming funds. 
::: 

### Description 

Does your DAO have ongoing and recurring payments? If yes, the Superfluid Minion helps automate ongoing streams of payments via the SuperFluid Protocol to vendors, other DAOs and any addresses

Set it up once, and your payments will be streamed in real-time automatically as long as your minion vault has sufficient funds.


### Video Tutorial 

There is a video tutorial below which walks through the installation and usage of the Minion. Alternatively, we have broken down the process into a step-by-step format below. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/OaUibq9nrHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Installation Steps 

1. Select or Summon a new Minion (if you want to create Minions specifically for streaming payments)
2. Add Proposals Playlist
3. Sign the transaction & your Boost is installed! 
4. Once your Boost is installed, you will see a 'Superfluid Streams' button on the top right corner of the Minion page. 


### How to Stream Payments to Any Recipient 

1. Create a new Proposal and select **Superfluid Payment Stream** under Superfluid. 

2. Select your Minion and enter the Title, Description and Recipient. If the payment recipient is a DAO Member, click **Members** and select the Member from the dropdown list. 

3. Select the payment token and enter the total amount for the stream. 

> 3.1 If the current token is being streamed for the first time, you will need to create the token's SuperToken (a pre-requisite step before Superfluid streaming is possible). Click **Create Supertoken** and approve the transaction from your wallet.
> 
> ![](https://i.imgur.com/SdrFn15.png)
> 
> 3.2 Once the above transaction is completed, enter the amount of tokens you are requesting to be upgraded into SuperTokens for streaming. 

4. Select the time interval (per year / month / week / day / hour) and enter your streaming rate per time interval. After completing steps 1 to 4, your proposal details should look like the following sample. 

![](https://i.imgur.com/3YxZplN.png)

5. Click **Submit** to submit your proposal for next steps in the proposal lifecycle. 

> Recipients cannot have more than 1 active stream receiving the same token. For instance, if a DAO contributor is currently receiving a USDC stream, another USDC stream cannot be created for this recipient.  

6. When your proposal is ready to be executed, click **Execute Minion** and your Stream has started! 

7. (Optional) To verify that the Superfluid stream has started, go to the Minion page and click **Superfluid Streams** at the top right corner of the page. Here is a sample of a successfully-started Superfluid stream. 

![](https://i.imgur.com/IQM6qCL.png)

> The Superfluid Streams page shows
> - Supertoken Balances: Tokens & amount in the Minion Safe available for streaming. You can add or remove tokens for streaming by clicking **Return Balance** or **Convert**
> - Streams History: Existing and past streams along with the streaming rates and streamed amounts. You can cancel the stream by clicking **Cancel** or view more details by clicking **View**
> - Supertokens will have a `x` suffix after the token such as 'DAIx' for 'DAI'.


### How to Cancel a Superfluid Stream 

1. Go to the Minion Page with existing Superfluid Streams and click **Superfluid Streams**. 

2. Click **Cancel** on the existing stream you'd like to cancel. Once the transaction is approved, a Cancel Superfluid Proposal will be created and ready for the next steps in the proposal life cycle. 

![](https://i.imgur.com/2N9DTSr.png)

3. When your proposal is ready to be executed, click **Execute Minion** and your Stream has now been terminated! 

4. (Optional) To verify that the Superfluid stream has been terminated, go to the Minion page and click **Superfluid Streams** at the top right corner of the page. You will see that the **Cancel** button is now disabled and the Stream has stopped (when you click **View**)

## How to Add More Tokens for Streaming
> This tutorial explains how to add more tokens from the Safe Minion for stremaing by upgrading these tokens into SuperTokens (with `x` suffix) 

1. Go to the Minion Page with existing Superfluid Streams and click **Superfluid Streams**. 

2. Click **Convert** on the Asset you'd like to upgrade into SuperTokens for streaming. 

![](https://i.imgur.com/IQM6qCL.png)

3. Enter the amount of tokens you'd like to upgrade and submit your Superfluid Token Upgrade Proposal for the next steps in the proposal life cycle. 

![](https://i.imgur.com/DNYzbUF.png)

3. When your proposal is ready to be executed, click **Execute Minion** and the tokens have now been transferred from the Minion and upgraded to SuperTokens

4. (Optional) To verify that the token has been upgraded to a SuperToken, go to the Minion page and click **Superfluid Streams** at the top right corner of the page. You will see that the Supertoken Balance has now been updated.


## How to Remove Tokens from Streaming
> This tutorial explains how to remove tokens from streaming by downgrading them (currently SuperTokens with a `x` suffix) into tokens that can be returned to the Safe Minion. 

1. Go to the Minion Page with existing Superfluid Streams and click **Superfluid Streams**. 

2. Click **Return Balance** on the Asset you'd like to downgrade from SuperTokens to tokens, so they can be returned to the Safe Minion. 

![](https://i.imgur.com/IQM6qCL.png)

3. Enter the amount of tokens you'd like to downgrade and submit your Superfluid Token Downgrade Proposal for the next steps in the proposal life cycle. 

3. When your proposal is ready to be executed, click **Execute Minion** and the Supertokens have downgraded to tokens and transferred to the Minion. 

4. (Optional) To verify that the Supertokens have been downgraded and returned to the Minion, go to the Minion page and click **Superfluid Streams** at the top right corner of the page. You will see that the Supertoken Balance has now been updated.

### Support 

For support, please go to our Discord at https://discord.com/invite/daohaus
