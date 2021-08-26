---
id: meta-api
title: Metadata API
sidebar_label: Metadata
slug: /devs/meta-api
---

This endpoint lets you get DAO curated metadata.

## Endpoint

```url

https://data.daohaus.club/dao/{contract address}

```
**Type** : **`GET`**

## Example

### 1. Valid Contract Address

**Request:**

```url

https://data.daohaus.club/dao/0x283bdc900b6ec9397abb721c5bbff5ace46e0f50

```

**Output:** 

```josn
[
   {
      "contractAddress":"0x283bdc900b6ec9397abb721c5bbff5ace46e0f50",
      "network":"xdai",
      "name":"HausDAO",
      "description":"Community governance of the DAOhaus ecosystem",
      "purpose":"Products",
      "version":"2",
      "slug":"hausdao-0il",
      "importedCreateDate":"1597330013904",
      "avatarImg":"https://gateway.pinata.cloud/ipfs/QmU2KcPJvU5KXjAqzSfQzZ8sFWLPSNZwUKLU8g4UC3RWhN",
      "customTheme":{
         "primary500":"#6f0485",
         "primaryAlpha":"rgba(16,21,61,0.9)",
         "secondary500":"#5ea313",
         "secondaryAlpha":"rgba(235,138,35,0.75)",
         "bg500":"#03061B",
         "bgOverlayOpacity":"0.75",
         "primaryFont":"Inknut Antiqua",
         "bodyFont":"Rubik",
         "monoFont":"Space Mono",
         "brandImg":"/static/media/Daohaus__Castle--Dark.d5efbecd.svg",
         "bgImg":"/static/media/daohaus__hero--falling.c5523f35.jpg",
         "background500":"#643f02"
      },
      "daosquarecco":0,
      "tags":[
         
      ],
      "links":{
         
      },
      "proposalConfig":null,
      "settings":null,
      "customTerms":{
         "proposals":"Proposals",
         "proposal":"Proposal",
         "bank":"Bank",
         "members":"Members",
         "member":"Member",
         "boosts":"Apps",
         "boost":"App",
         "discord":"https://discord.gg/NPEJysW",
         "medium":"https://medium.com/daohaus-club",
         "telegram":"https://t.me/joinchat/IJqu9xPa0xzYLN1mmFKo8g",
         "website":"https://daohaus.club",
         "other":"https://wikipedia.com",
         "f04title":"404 What's Lost Can Be Found",
         "f04heading":"You have been slain",
         "f04subhead":"Please reload from the most recent save point.",
         "f04cta":"Start Over"
      },
      "boosts":{
         "transmutation":{
            "active":true,
            "metadata":{
               "exchangeRate":0.5,
               "paddingNumber":10000,
               "burnRate":0.25,
               "minCap":100000,
               "maxCap":250000,
               "contributionRoundPerc":0.125,
               "githubRepo":"https://github.com/HausDAO",
               "startDate":"1600804800"
            }
         },
         "customTheme":{
            "active":true,
            "metadata":{
               "primary500":"#6f0485",
               "primaryAlpha":"rgba(16,21,61,0.9)",
               "secondary500":"#5ea313",
               "secondaryAlpha":"rgba(235,138,35,0.75)",
               "bg500":"#03061B",
               "bgOverlayOpacity":"0.75",
               "primaryFont":"Inknut Antiqua",
               "bodyFont":"Rubik",
               "monoFont":"Space Mono",
               "brandImg":"/static/media/Daohaus__Castle--Dark.d5efbecd.svg",
               "bgImg":"/static/media/daohaus__hero--falling.c5523f35.jpg",
               "daoMeta":{
                  "proposals":"Proposals",
                  "proposal":"Proposal",
                  "bank":"Bank",
                  "members":"Members",
                  "member":"Member",
                  "boosts":"Apps",
                  "boost":"App",
                  "discord":"https://discord.gg/NPEJysW",
                  "medium":"https://medium.com/daohaus-club",
                  "telegram":"https://t.me/joinchat/IJqu9xPa0xzYLN1mmFKo8g",
                  "website":"https://daohaus.club",
                  "other":"https://wikipedia.com",
                  "f04title":"404 What's Lost Can Be Found",
                  "f04heading":"You have been slain",
                  "f04subhead":"Please reload from the most recent save point.",
                  "f04cta":"Start Over"
               },
               "background500":"#643f02"
            }
         },
         "discourse":{
            "active":true,
            "metadata":{
               "name":"HAUSDAO",
               "color":"25AAE2",
               "autoProposal":true,
               "categoryId":5,
               "slug":"hausdao"
            }
         },
         "vanilla minion":[
            "0x8ef3d05099b737f5f53079ab4bedc04ad82f5b2e"
         ]
      },
      "allies":[
         
      ]
   }
]
```

### 2. Invalid Contract Address

**Request:**

```url

https://data.daohaus.club/dao/0x283bdc900b6ec9397abb721c5bbff5ace46e0f55

```

**Output:** 

```json

[]

```