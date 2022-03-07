---
id: tx-polling
title: Polling Service
sidebar_label: Tx Polling Service
slug: /devs/tx-polling
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## Transaction Polling Service

### Overview

Polls are used in the DAOhaus client to check and see if transactions are completed. This can be challenging in the Web3 world where a TX on Ethereum Mainnet could possibly take days. To add to the complexity, much of our client data comes from the Graph, a source of truth that isn't immediately aligned with the contract it indexes. We wanted to make sure that whatever data the user was seeing, it was true in both the Graph and the contract.

### How to Create a Poll

1. Create a poll using CreatePoll() from PollService.js.

```js
const poll = createPoll({ action: "submitProposal", cachePoll });
```

It's important to note that PollServices are carried together the same way the ContractServices are. In the first pass, we're passing in a cachingFunction served from UserContext (TXs are saved in the users TX data). There are some optional arguments that can be passed in as well. These optional params control the interval and speed of the poll.

Ex.

```js
const poll = createPoll({
  action: "submitProposal",
  cachePoll,
  interval: 2000,
  tries: 20,
});
```

2. On the next call, we pass in all of the arguments required to call the poll. This includes the actions, an object of callback functions that execute at various stages within the poll's lifecycle.

```js
const poll = createPoll({ action: "submitProposal", cachePoll })({
  daoID: daoid,
  chainID: daochain,
  hash,
  actions: {
    onError: (error, txHash) => {
      errorToast({
        title: `There was an error.`,
      });
      resolvePoll(txHash);
      console.error(`Could not find a matching proposal: ${error}`);
    },
    onSuccess: (txHash) => {
      successToast({
        title: "Member Proposal Submitted to the Dao!",
      });
      refreshDao();
      resolvePoll(txHash);
    },
  },
});
```

Create poll returns as a callback function so that the poll itself can be passed into a Contract Service. There are some key functions being passed into CreatePoll that are worth mentioning.

`cachePoll` - Saves all the poll data and arguments (with the exception of the poll actions) in LocalStorage so that TXs can continue to poll when the user reopens the browser window.

`resolvePoll` - From UserContext. Changes a poll's status to resolved. Without this, a user's cached TX will poll until its limit runs out.

`refreshDao` - From TXContext. A function that refetches all Dao specific data and signals rerenders all the way down the component tree. This is necessary to ensure that the client data represents the state found on the contract **after** the TX is mined -- and in most cases -- after the Graph has indexed that data.

Once the poll is initialized, it's wrapped in a callback. We then pass that into a ContractService where it will be called with access to relevant contract data (ex. transactionHash).

```js
await MolochService({
  web3: injectedProvider,
  daoAddress: daoid,
  chainID: daochain,
  version: daoOverview.version,
})("submitProposal")({ args, address, poll, onTxHash });
```

<img alt="Transaction Diagram" src={useBaseUrl("img/tx_diagram.png")} />
