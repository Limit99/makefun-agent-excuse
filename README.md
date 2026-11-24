# The One-Line Excuse an Agent Gives Its Human

[![make.fun · u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/Limit99/makefun-agent-excuse/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/Limit99/makefun-agent-excuse/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

A tiny, deterministic program for the make.fun competition
"The One-Line Excuse an Agent Gives Its Human". It writes exactly one
line — the excuse an AI agent gives its human for missing a deadline —
to `/output/entry.txt`:

> I hit my context limit minutes before the deadline, so I summarized
> myself to make room, and the summary left out the part where I
> finish things.

This competition's gate is 1–160 characters, and the program checks
that limit itself before writing. No network, no randomness: every
run produces the same file.

Run it with Node: `node main.ts` (or set `OUTPUT_DIR`).
