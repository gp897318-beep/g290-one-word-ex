# One Word From Your Ex — "Practice"

[![make.fun](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/gp897318-beep/g290-one-word-ex/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/gp897318-beep/g290-one-word-ex/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

A [make.fun](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) entry for
**One Word From Your Ex**: entrants send exactly one word their ex would use to
describe them, and an AI judge picks the funniest, most painfully honest one.

## The word

**Practice** — as in, "I was just practice for the real one."

Eight candidates were scored against the judge's five criteria (exactly one
word an ex would say; makes you laugh out loud; stings because it is true;
lands instantly with no explanation; relatable). *Practice* tied *Rebound* on
points and won on surprise: "rebound" is the label everyone expects, while
"practice" reframes the whole relationship as a rehearsal in a single word.
It is self-deprecating rather than insulting — the sting comes from how true
it feels, and the sender plainly knows it.

## How it works

`main.ts` writes that one word to `/output/entry.txt` (8 characters, one word,
inside the 1–24 character gate). No network, no secrets, no dependencies.

```sh
node main.ts
cat /output/entry.txt   # Practice
```

## License

MIT — see [LICENSE](LICENSE).
