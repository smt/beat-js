# beat-js

Utilities to support [.beat time (a.k.a. Swatch Internet Time)](https://en.wikipedia.org/wiki/Swatch_Internet_Time) strings.

## What is a .beat?

The Wikipedia link above explains it the best, but to summarize...

**.beat time** is a form of decimal time, where each day is divided into 1,000 parts called _.beats_. Each .beat lasts for 86.4 seconds in standard time.

.beat time is always relative to midnight, Central European Time (UTC+1). There are no timezones, and no DST rules. At 42 .beats past midnight CET, the .beat time is represented this way: **@042**.

## tl;dr

This tiny library provides some trivial utilities to format a Date as a .beat string, or find the start and end times for a .beat string.

The main use case is to simply output the current time formatted as a .beat, like so:

```ts
import { beat } from "@smt/beat";

beat();
// => "@123"
```

## Installation

**beat** is a [JSR](https://jsr.io/docs/introduction) package. As such, you may use the following methods to install it in your JavaScript or TypeScript project.

### Deno

With Deno, you may optionally use this package without an install step like so:

```ts
import { beat } from "jsr:@smt/beat";
```

Otherwise, you can install it using the following command:

```sh
deno add @smt/beat
```

The install step will add an import map entry to the `deno.json` file, looking something like this:

```json
{
  "imports": {
    "@smt/beat": "jsr:@smt/beat@^0.0.1"
  }
}
```

### npm and npm-compatible package managers

With npm, you may install this package using one of the following commands, depending on the package manager you are using:

```sh
npx jsr add @smt/beat
yarn dlx jsr add @smt/beat
pnpm dlx jsr add @smt/beat
bunx jsr add @smt/beat
```

The install step will add a dependency entry to the `package.json` file, looking something like this:

```json
{
  "dependencies": {
    "@smt/beat": "npm:@jsr/smt__beat@^0.0.1"
  }
}
```

This will also modify the `.npmrc` file to enable the custom `@jsr` scope, like so:

```
@jsr:registry=https://npm.jsr.io
```

Please ensure that you check the modified `.npmrc` file into source control after installation.

## Usage

### beat()

Returns a .beat string.

The first argument may be a string in ISO-8601 format or a Date object. If no value is provided, or if a valid date cannot be parsed from the provided value, the function will default to using the current time.

```ts
import { beat } from "@smt/beat";

// Get the .beat for the current time (default)
beat();
// => "@789"

// Get the .beat from an ISO-8601 datetime string
beat("2024-06-21T00:00:00.000Z");
// => "@041"

// Get the .beat from a Date object
beat(new Date("2024-06-21T00:00:00.000Z"));
// => "@041"
```

### isBeat()

A convenience utility to check if the given value is a .beat string, based on the following regex: `/^@(\d{3})$/`.

```ts
import { isBeat } from "@smt/beat";

isBeat("@123");
// => true

isBeat(123);
// => false

isBeat("123");
// => false

isBeat("LOL");
// => false

isBeat(null);
// => false
```

### toInterval()

Returns an Interval object containing the start Date and end Date of the given .beat string.

By default, it assumes the interval should be future-dated relative to the current time, but you can override this by using the `from` (future-date starting from the provided Date) or `until` (past-date based on the provided Date) options.

```ts
import { toInterval } from "@smt/beat";

// Get the start and end of the .beat (future-dated relative to the current time)
toInterval("041");
// => { start: 2024-06-20T23:59:02.400Z, end: 2024-06-21T00:00:28.800Z }

// Get the start and end of the .beat (future-dated relative to the provided time)
toInterval("041", { from: new Date("2024-06-21T00:00:00.000Z") });
// => { start: 2024-06-21T23:59:02.400Z, end: 2024-06-22T00:00:28.800Z }

// Get the start and end of the .beat (past-dated relative to the provided time)
toInterval("041", { until: new Date("2024-06-21T00:00:00.000Z") });
// => { start: 2024-06-19T23:59:02.400Z, end: 2024-06-20T00:00:28.800Z }
```
