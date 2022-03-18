---
id: minion-dev-suite-v4-boost
title: Minion DEV Suite V4 (Cross-chain Safe Minion)
sidebar_label: Minion DEV Suite V4
---

* **Category**: `Dev Tools`
* **Publisher**: [DAOhaus](https://app.daohaus.club/dao/0x64/0xef3d8c4fbb1860fceab16595db7e650cd5ad51c1)
* **Available Networks**: `Ethereum Mainnet`, `Gnosis Chain`
* **Github**: https://github.com/HausDAO/MinionSummonerV2

:::info
Editors' note: This is great for users who want to access and control Ethereum Mainnet assets, while voting on proposals on Gnosis Chain. 
::: 

### Description 

This operation will deploy a new Gnosis Safe Minion with an AMB Module for your DAO. The Gnosis Safe Minion manages your DAO's funds & interacts with smart contracts, while the AMB Module helps relay data between chains.

By installing this Minion, your DAO will be able to vote on & pass proposals on Gnosis Chain, while controlling assets and executing transactions on Ethereum Mainnet. This gives DAOs greater access to use cases on Mainnet such as DeFis and NFTs, while minimizing governance costs.

With the ability to set quorum levels, transactions can be executed earlier once quorum requirements are met. This is especially useful for advanced DAOs looking to optimize their proposal velocity.

### Video Tutorial 

There is a video tutorial below which walks through the installation and usage of the Minion. Alternatively, we have broken down the process into a step-by-step format below. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/wGilfaE8-w0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Installation Steps 

1. Summon your Cross-chain Minion DEV Suite V4
    - Select your Foreign Chain as `Ethereum Mainnet` or `Gnosis Chain`, which is the chain where the Gnosis Safe and assets can be found.
    - Paste your Gnosis Safe address that is already deployed on the Foreign Chain 

   ![](https://i.imgur.com/xzMdQIU.png)
    
2. Switch network to your Foreign Chain (Please ensure that the current account is a signer on your Gnosis Safe)
    - Click **Deploy & Add Module** and you will be prompted to sign 2 transactions.
    - The first transaction installs the Zodiac Bridge Module
    - The second transaction sends a transaction to your Gnosis Safe

3. Switch back to your DAO's chain and sign the transaction to install the Boost
    - When you go to your DAO's treasury, you should see the newly-added Gnosis Safe with all the assets in it. 

    ![](https://i.imgur.com/eVgmaUk.png)

4. Go to your Gnosis Safe and click on Transactions > Queue. You will see an `enableModule` transaction that needs your approval and execution. 

![](https://i.imgur.com/fBm7MLh.png)

5. Execute the transaction to install the Zodiac Bridge module on your Gnosis Safe! At this point, your DAO can now control the Gnosis Safe on the Foreign Chain. 

### How to send tokens from a Gnosis Safe (Foreign Chain)
1. Go to your DAO's Cross-chain Safe Minion page and click **Transfer** 

![](https://i.imgur.com/bBYiYZI.png)

2. Enter the Payment Amount, Recipient address (Foreign Chain) and Description before clicking **Submit**.

![](https://i.imgur.com/MlE57Al.png)

3. When you click Submit, your proposal will go through the proposal lifecycle. 

4. When your proposal is ready to be executed, click **Execute Minion**. 

5. When the Minion transaction is executed, click on **Watch Cross-chain Tx** to view the status of your cross-chain transaction. This should open a site for the Arbitrary Message Bridge Live Monitoring application. 

![](https://i.imgur.com/xdf7dYK.png)

6. If your Foreign Chain is Ethereum, click **Execute** to execute transaction on the AMB Live Monitoring page. If your Foreign Chain is Gnosis Chain, the gas fees for the cross-chain transaction is subsidized and will be automatically executed. 

![](https://i.imgur.com/IwsSSjf.png)

7. Once your transaction is executed, your tokens will be succesfully sent from your Gnosis Safe. 

*Alternatively, you may send tokens by creating a Proposal under the Cross Chain Safe Minion Classics playlist. 

### How to batch-send tokens from a Gnosis Safe (Foreign Chain)

1. Create a new Proposal and select **Cross Chain Safe Minion TX Builder** under Cross Chain Safe Minon Classics. 

2. Select your Cross-chain Minion and enter the Title and Description 

3. For your first transaction, enter the Contract Address for the ERC-20 or ERC-721 token in the Contract Address Field. The Contract Function dropdown field should populate the contract functions available for you. 

4. For sending an ERC-20 token, select the `transfer` contract function. For the fields on the form, enter: 
* DST: Intended recipient address on the Foreign Chain 
* WAD: Amount of tokens to be sent

![](https://i.imgur.com/cALG7y5.png)

5. For sending an ERC-721 token, select the `safeTransferFrom` contract Function. For the fields on the form, enter: 
* From address: Address of your Foreign Chain Gnosis Safe
* To address: Intended recipient address on the Foreign Chain  
* Token ID: The specific token ID of the ERC-721 token 
* Value: You can pre-fill this with `0`

![](https://i.imgur.com/809BqoL.png)


6. Click **Add Tx** to Continue adding more Transactions into your Proposal 

7. Click **Encode Cross-chain Transaction** and wait until you see the symbol of a White Tick 

8. Click **Submit** to submit your proposal for next steps in the proposal lifecycle. 

9. When your proposal is ready to be executed, click **Execute Minion**. 

10. When the Minion transaction is executed, click on **Watch Cross-chain Tx** to view the status of your cross-chain transaction. This should open a site for the Arbitrary Message Bridge Live Monitoring application. 

![](https://i.imgur.com/xdf7dYK.png)

11. If your Foreign Chain is Ethereum, click **Execute** to execute transaction on the AMB Live Monitoring page. If your Foreign Chain is Gnosis Chain, the gas fees for the cross-chain transaction is subsidized and will be automatically executed. 

![](https://i.imgur.com/IwsSSjf.png)

12. Once your transaction is executed, your tokens will be succesfully sent from your Gnosis Safe. 

### Optional: How to remove existing Gnosis Safe signers

1. Go to your DAO's Cross-chain Safe Minion page and click **Remove Signers**. Approve the transaction in your wallet and the proposal to remove Gnosis Signers will be sent for next stages of the proposal lifeycle. 

![](https://i.imgur.com/bBYiYZI.png)

2. When your proposal is ready to be executed, click **Execute Minion**. 

3. When the Minion transaction is executed, click on **Watch Cross-chain Tx** to view the status of your cross-chain transaction. This should open a site for the Arbitrary Message Bridge Live Monitoring application. 

![](https://i.imgur.com/xdf7dYK.png)

4. If your Foreign Chain is Ethereum, click **Execute** to execute transaction on the AMB Live Monitoring page. If your Foreign Chain is Gnosis Chain, the gas fees for the cross-chain transaction is subsidized and will be automatically executed. 

![](https://i.imgur.com/IwsSSjf.png)

5. Once your transaction is executed, all signers will be removed from the Gnosis Safe and the Zodiac Bridge module now owns the Safe. 


### Support 

For support, please go to our Discord at https://discord.com/invite/daohaus
