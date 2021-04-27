---
id: caching
title: Caching Rules
sidebar_label: Caching Rules
slug: /devs/caching
---

We use a lot of cache unfortunately. Not only is cache the cause of many bugs, it can actually create a situation where the app permanently 'breaks' for the user.

Here are some rules to prevent the worst of caching bugs.

**Ask these questions before caching**

- Could the user come back and want to see this data again? (ex. Hub view)
- Does it take long to load this data (ex. massive graph or API fetch)?
- Is the user unlikely to change this data before their next refresh or contract TX?

If yes to all these, then use cache. Likely sessionStorage.

**When to use local storage vs. session storage**

- If the data is constant, and will only change based on the user's input or not at all (ex. _hasUserLoggedIn_ or _isDarkMode_), then use local storage
- If the data is likely to change eventually, but not likely to change before the user refreshes the page or fires a contract TX, then use Session storage (ex. the DAOs a user belongs to)
  - Note: Our session storage empties on refresh. TXs update all state, usually refreshing cache values. We also have a utility that empties cache if it goes over the browser limit (usually 5mb).

**After using cache**

- Document in code review when used
- Try to test edge cases.
- Think of how cache might cause state to 'stick'.
