---
id: theme
title: Style and Theme
sidebar_label: Style & Theme
slug: /theme
---

## Extending Chakra UI

DAOhaus extends Chakra's extensive component library and leverages their inline mobile styling.

## Default Theme

Some defaults chosen were...

## Custom Theme

DAOs can customize their theme...

## Custom Components

### TextBox

`TextBox`es can be used anywhere labels or data are shown. The `label` variant is the default and `data` variant is perfect for data displayed from the blockchain.

```js
<TextBox size="xs" colorScheme="whiteAlpha.900">
  Asset
</TextBox>
```

### ContentBox

`ContentBox` can be used for any container of sub-components. A translucent background with rounded corners, padding and margin will be added.

```js
<ContentBox
  w={["100%", "100%", "100%", "340px", "340px"]}
  h="340px"
  mt={5}
  style={{ transition: "all .15s linear" }}
  _hover={{ transform: "scale(1.05)" }}
>
  {children}
</ContentBox>
```
