# custom/

Hand-written code. **The editor reads this folder and never writes it.**

Nothing here is regenerated, pruned or banner-stamped. Your files, your
layering, your commit.

## What the editor reads

One folder here is a **HandSlice**. A slice's `ui/` segment is the only part
the editor looks at, and one exported standalone component in it is a
**HandScreen** — something a Screen in the editor can mount by name.

```
src/app/custom/
  charts/
    ui/revenue-chart.ts     <- read: a HandScreen
    lib/scale.ts            <- yours, unread
```

To be mountable, a component must be exported, standalone, carry a plain
element selector, and declare its contract with signals:

```ts
readonly total = input.required<number>();
readonly currency = input<string>();
readonly sliceClicked = output<string>();
```

`@Input()`, `@Output()` and `model()` are not read — a component using them
is skipped and listed in the editor's Custom panel with that reason. Input and
output types must be `string`, `number` or `boolean`, optionally as `T[]` or
`Record<string, T>`. Anything else is recorded and offered to nobody: an
object crossing this boundary would be two interfaces meeting, so take an id
and fetch your own copy.

The editor re-reads this folder when its tab regains focus and before every
Save, Sync and Run. Change a signature that a Screen already binds and it
raises a blocking Violation naming the Screen — Download and the emitted half
of Save refuse until you rebind or change it back.

## Imports

`custom/` may import from `src/app/shared/` and from nothing else this app
emits. `features/`, `pages/` and `widgets/` import *from* here, so the other
direction is a cycle. `npm run lint` enforces it.
