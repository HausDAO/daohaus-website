---
id: swap-tokens
title: How to Swap Tokens on DEXes
sidebar_label: Swap Tokens on DExes
---

# How to Swap Tokens on DEXes

## Allowances

In order for a contract to interact with your minion's tokens, the minion will need to provide an allowance for the contract for the specific token(s).

Allowances are made by calling the `approve` function on the ERC20 token contract with the `guy` (`recipent`) of the approval and the `wad` (`amount`).

Ex.
```s
approve(
    0x0000000000000000000000000000000000ROUTER,
    1000000000000000000,
)
```

### Uniswap V2 Router

#### Dex options 

__Gnosis Chain__
- Swapr
- Sushi
- Honeyswap
- Cowswap

__Arbitrum__
- Swapr
- Uniswap

<!-- TODO __Optimism__ -->

<!-- TODO __Polygon__  -->

Uniswap forks rely on the UniswapV2Router contract to navigate pairs and handle the liquidity provision and swapping. Check out [UniswapV2Router02.sol](https://github.com/Uniswap/v2-periphery/blob/master/contracts/UniswapV2Router02.sol) for the full contract.

> Look into the AutoRouter that leverages both v2 and v3 liquidity.

Swapping functions on Router:

It's generally recommended to use `SwapExact...For...` unless you have a specific case you're trying to hit.

- SwapExactTokensForTokens - Swapping an exact amount of token A for a minimum amount of token B
    - `(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)`
- SwapTokensForExactTokens - Swapping a maximum amount of token A for an exact amount of token B
    - `(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)`
- SwapExactETHForTokens - Swapping an exact amount of network token (ETH) for a minimum amount of token A
    - `(uint amountOutMin, address[] calldata path, address to, uint deadline)`
- SwapTokensForExactETH - Swapping a maximum amount of Token A for an exact amount of network token (ETH)
    - `(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)`
- SwapExactTokensForETH - Swapping an exact amount of Token A for a minimum amount of network token (ETH)
    - `(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)`
- SwapETHForExactTokens - Swapping an amount of network token (ETH) for an exact amount of Token A
    - `(uint amountOut, address[] calldata path, address to, uint deadline)`

## Executing the swap

_Either include an allowance in the tx bundle or check for a previous allowance._

The parameters for the swap function are similar so we'll provide one example with a breakdown of the amount parameters. The easiest option, generally, is swap exact tokens for tokens tho leaves a bit of room for slippage or 

```s
SwapExactTokensForTokens(
    uint amountIn,              # the amount of token A being sent to the swap
    uint amountOutMin,          # the minimum amount of token B to be received
    address[] calldata path,    # the path of tokens to route the swap through
    address to,                 # the final address to receive the amount of token B
    uint deadline,              # the deadline for the swap to be effective
)
```

To execute a demo swap we'll set some example parameters.
  - WETH Price: 3000 DAI per WETH
  - current timestamp: `1609459200` (01/01/2021 00:00Z)

Example Addresses:
  - the Minion with tokens: 0x0000000000000000000000000000000000MINION 
  - WETH: 0x000000000000000000000000000000000000WETH
  - DAI: 0x0000000000000000000000000000000000000DAI

### Function Call with Example Data

```s
SwapExactTokensForTokens(
    1000000000000000000,                                    # 1 WETH token, 1 * 10 ** 18
    2850000000000000000000,                                 # Given 5% flex of processing time, at least 2850 DAI received
    [
        0x000000000000000000000000000000000000WETH, 
        0x0000000000000000000000000000000000000DAI
    ],                                                      # start with WETH (current token), next step is to DAI
    0x0000000000000000000000000000000000MINION,             # the final address to receive the amount of token B
    1609632000,                                             # the deadline for the swap to be effective
)
```

