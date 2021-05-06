---
id: contracts
title: Contracts
sidebar_label: Contracts
slug: /devs
---

## Moloch Version 2

> Moloch v2 is designed to extend MolochDAO's operations from purely single-token public goods grants-making to acquiring and spending (or investing in) an unlimited portfolio of assets.
>
> Proposals in Moloch v2 now specify a tribute token and a payment token, which can be any whitelisted ERC20. Membership proposals which offer tribute tokens in exchange for shares can now offer any token, possibly helping balance the DAO portfolio. Grant proposals can now be in both shares and a stablecoin payment token to smooth out volatility risk, or even skip shares entirely to pay external contractors without awarding membership. Members can also propose trades to swap tokens OTC with the guild bank, which could be used for making investments, active portfolio management, selloffs, or just to top off a stablecoin reserve used to pay for planned expenses.
>
> In addition to standard proposals above, there are two special proposals. The first is for whitelisting new tokens to be eligible as tribute, and the second is for removing DAO members via Guild Kick. Both follow the same voting mechanics as standard proposals (no quorum, simple majority rules).

- [Moloch.sol on Github](https://github.com/MolochVentures/moloch/blob/master/contracts/Moloch.sol)
- [Dive into the v2 updates!](https://github.com/molochventures/moloch#general-changes)

### Moloch Version 1

The initial Moloch implementation included a separate GuildBank contract and could manage only a single currency.

> Moloch.sol - Responsible for managing membership & voting rights, proposal submissions, voting, and processing proposals based on the outcomes of the votes.
> and
> GuildBank.sol - Responsible for managing Guild assets.

- [v1 Contracts on Github](https://github.com/MolochVentures/moloch/tree/master/v1_contracts)

### Moloch Version 3

Different implementations are being mulled by the community. Reach out on discord to get plugged into these efforts.

- Moloch Mystics
- Baal
- LaoLand

### Summoner Factory

The Moloch Summoner follows the general proxy conventions while the v2.1 summoner implements an EIP-1167 Clone Factory to provide gas efficiencies when summoning.

- [HausDAO v2.1 Summoner](https://github.com/HausDAO/Molochv2.1/blob/main/MolochSummoner.sol)
- [OG Moloch v2 Summoner](https://github.com/MolochVentures/moloch/blob/master/contracts/MolochSummoner.sol)

## Minion

Minion is a contract that allows execution of arbitrary calls voted on by members of a Moloch DAO. Minion actions are submitted as new proposals and can be executed upon successful passing of the proposal.

- [RaidGuild Minion](https://github.com/raid-guild/moloch-minion)

### Minion Summoner Factory

The Minion Summoner also implements EIP-1167.

- [Minion Summoner Factory](https://github.com/HausDAO/MinionSummoner/blob/main/MinionFactory.sol)
