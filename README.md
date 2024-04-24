# Switchboard On-Demand: Solana

Documentation: https://switchboardxyz.gitbook.io/switchboard-on-demand/links-and-technical-documentation</br>
Rust crate: https://crates.io/crates/switchboard-on-demand</br>
npm module: https://www.npmjs.com/package/@switchboard-xyz/on-demand</br>
Typedoc: https://switchboard-docs.web.app/</br>

## Intro

This is the example monorepo for switchboard-on-demand.

The core examples to review in this repo are pertaining to:

- On-Demand Feeds
- On-Demand Randomness
- On-Demand Secrets

For testing on-demand feeds see `sb-on-demand-solana/`

To test feed creation and usage:

```bash
cd sb-on-demand-solana/
pnpm i
ts-node src/pull.ts
```
