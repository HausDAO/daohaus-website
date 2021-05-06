---
id: review-process
title: How Code Review Works
sidebar_label: Code Review Process
slug: /devs/review-process
---

### Before Submitting

- Run the code
- Try to do your own QA and break the component
- Skim changes and make sure the code is clean
- Make sure that every aspect in the 'Deliverables' portion of the spec has been implemented.
- For contract interaction:
  - Test the TX many times with different args
  - Make sure the poll updates
  - Make sure that all of the relevant values have been refreshed properly after TX
  - Close the browser window during the TX and open it again. Make sure the caching utilities work.

### Submit a PR

- label your PR by type
  - ex. (feature/BrandNewFeature or bug/FixSummonForm)
- Leave the PR. Do not merge.
- Wait for a review from a peer
- They will read the code and comment to make sure it adheres to the code guide.
- If the component is ready to go, the review sends it to QA
- If it doesn't, pull down your PR again and update it.

### QA Testing

- QA tester uses the new feature or upgrade
- Pretending they're the user, they try to break the component
- They log out values to observe possible weaknesses.
- Any additional stress testing.
- QA tester cleans up any nasty code that the code reviewer may have missed.
- Once the component is safe, it gets pushed to develop

### Deploying

- (Sam)

### Common sense clause

- There can't be a rule for everything, so changes can be rejected even if they're not part of the rules
- Sumbitters are also very free to break rules if they have a reason to do so, though it's better to explain why in a comment
- Bugs and quick fixes may not need such a thorough review process.
