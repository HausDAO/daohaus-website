---
id: contexts
title: Application Contexts
sidebar_label: Contexts
slug: /contexts
---

## Custom Theme Context

- `theme` - chakra theme context extended with the default and/or custom theme
- `updateTheme` - update the theme for the interface
- `tempTheme` - current theme saved in local state
- `updateTempTheme` - update the theme set in local state
- `resetTheme` - clear set theme to default

## DAO Context

- `daoProposals` - Array of DAO proposals
- `daoActivities` - Array of DAO activities from proposals history
- `daoMembers` - Array of Members
- `daoOverview` - DAO stats
- `isCorrectNetwork` - Injected network is the same as the DAO network
- `refetch` - function to trigger refetching DAO
- `hasPerformedBatchQuery` - reference to has performed query

## DAO Member Context

- `currentMemberRef`
- `isMember`
- `daoMember`
- `memberWalletRef`

## Default Provider Context

- `changeDappChain`
- `dappProvider`
- `setConnectBy`

## Explore Context

- `exploreDaos` -
- `hasLoadedExploreData` -

## Injected Provider Context

- `injectedProvider`
- `requestWallet`
- `disconnectDapp`
- `injectedChain`
- `web3Modal`
- `address`

## MetaData Context

- `daoMetaData`
- `hasFetchedMetadata`
- `shouldUpdateTheme`
- `customTerms`
- `refetchMetaData`

## Overlay Context

- `daoSwitcherModal`
- `setDaoSwitcherModal`
- `daoAccountModal`
- `setDaoAccountModal`
- `hubAccountModal`
- `setHubAccountModal`
- `proposalModal`
- `setProposalModal`
- `errorToast`
- `successToast`
- `warningToast`
- `txInfoModal`
- `setTxInfoModal`
- `imageUploadModal`
- `setImageUploadModal`
- `genericModal`
- `setGenericModal`

## Token Context

- `currentDaoTokens`
- `shouldFetchInit`
- `shouldFetchContract`

## TX Context

- `refreshDao` - refresh dao data after a tx

## User Context

- `userHubDaos`
- `hasLoadedHubData`
- `cachePoll`
- `resolvePoll`
- `outstandingTXs`
- `refetchUserHubDaos`
