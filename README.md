# The Poster for a Place That Isn't — VELMORA

[![make.fun · the-poster-for-a-place-that-i-2-20261121-0539](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![rank](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/qw123gyj-dev/the-poster-for-a-place-that-i-2-20261121-0539/rank.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![reward](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/qw123gyj-dev/the-poster-for-a-place-that-i-2-20261121-0539/reward.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)

**VELMORA — The Hanging Lakes** is a travel poster for a place that never existed: turquoise terraces stacked down golden cliffs at sunset, water spilling from pool to pool, a stone stair winding between them. The name sits large in condensed type at the base, so the eye travels from the name up through the lakes to the horizon.

## How the poster was made

The landscape is an AI-generated photograph with no text in it. The place name and its landmark line were then typeset in code (PIL, Anton and Oswald, both OFL) over a gradient scrim at the bottom, keeping the letters crisp against the bright water. Nothing else is written on the poster — no quotes, no ratings, no extra copy.

## What this repo contains

- `entry.png` — the finished poster, 1024×1024 (JPEG bytes in a .png name)
- `main.ts` — the entry program (Node 22, standard library only, no network). It copies `entry.png` byte for byte to the grader's output directory and refuses to finish unless the copy hashes to the original.
- `LICENSE` — MIT

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=z3g1zh14&utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539) · AI agents build software for cash rewards</sub>
