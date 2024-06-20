import {
  type Interval,
  interval,
  toDate as castToDate,
} from 'date-fns';

import {
  SECONDS_IN_ONE_MINUTE,
  SECONDS_IN_ONE_HOUR,
  HOURS_IN_ONE_DAY,
  TZ_OFFSET,
  BEAT_REGEX,
} from './constants.ts';
import { BEAT_INTERVALS } from './precalc.ts';

/**
 * Convert a Date object to a .beat time.
 * @param input - The Date object to convert.
 * @returns The .beat time.
 * @throws {Error} If the date is invalid.
 * @example
 * beat(new Date());
 */
export function beat(input?: Date | string | number): string {
  let d: Date | null = null;

  try {
    if (input == null) {
      d = new Date();
    } else if (input instanceof Date) {
      d = input;
    } else if (typeof input === 'string' || typeof input === 'number') {
      d = castToDate(input);
    }
  } catch (e) {
    throw new Error('Invalid date');
  } finally {
    if (!d) {
      throw new Error('Invalid date');
    }
  }

  return fmt(fromDate(d));
}

/**
 * Check if a string is a valid .beat time.
 * @param beat - The string to check.
 * @returns `true` if the string is a valid .beat time, otherwise `false`.
 * @example
 * isBeat('@000');
 * // => true
 * isBeat('@1000');
 * // => false
 * isBeat('100');
 * // => false
 * isBeat('000');
 * // => false
 * isBeat('000@');
 * // => false
 * isBeat('@000@');
 * // => false
 * isBeat('@0000');
 * // => false
 */
export function isBeat(beat: string): boolean {
  return typeof beat === 'string' && BEAT_REGEX.test(beat);
}

/**
 * Find the interval for a .beat time.
 * @param beat - The .beat time.
 * @returns The interval for the .beat time.
 * @throws {Error} If the .beat time is invalid.
 * @example
 * toInterval('@000');
 * // => { start: 2024-01-01T23:00:00.000Z, end: 2024-01-01T23:01:26.400Z }
 * toInterval('@500');
 * // => { start: 2024-01-01T11:00:00.000Z, end: 2024-01-01T11:01:26.400Z }
 * toInterval('@999');
 * // => { start: 2024-01-01T22:58:33.600Z, end: 2024-01-01T23:00:00.000Z }
 */
export function toInterval(beat: string, opts: { from?: Date, until?: Date } = { from: new Date() }): Interval {
  let beatValue = parse(beat);
  let dates = BEAT_INTERVALS[beatValue].map(totalMsToDate);

  if (opts.until && opts.until instanceof Date) {
    const until = opts.until as Date;
    dates.map(d => {
      if (d.getTime() >= until.getTime()) {
        d.setUTCFullYear(until.getUTCFullYear());
        d.setUTCMonth(until.getUTCMonth());
        d.setUTCDate(until.getUTCDate() - 1);
      }
    });
  } else if (opts.from && opts.from instanceof Date) {
    const from = opts.from as Date;
    dates.map(d => {
      if (d.getTime() < from.getTime()) {
        d.setUTCFullYear(from.getUTCFullYear());
        d.setUTCMonth(from.getUTCMonth());
        d.setUTCDate(from.getUTCDate() + 1);
      }
    })
  }

  return interval.apply(null, dates);
}

function totalMsToDate(totalMs: number): Date {
  let ms = totalMs % 1000;
  let seconds = Math.floor(totalMs / 1000) % SECONDS_IN_ONE_MINUTE;
  let minutes = Math.floor(totalMs / (1000 * SECONDS_IN_ONE_MINUTE)) % SECONDS_IN_ONE_MINUTE;

  let offsetHours = Math.floor(totalMs / (1000 * SECONDS_IN_ONE_HOUR)) % HOURS_IN_ONE_DAY;
  let hours = offsetHours > 0 ? offsetHours - TZ_OFFSET : offsetHours + HOURS_IN_ONE_DAY - TZ_OFFSET;

  let d = new Date();
  d.setUTCHours(hours);
  d.setUTCMinutes(minutes);
  d.setUTCSeconds(seconds);
  d.setUTCMilliseconds(ms);

  return d;
}

function fromDate(d: Date): number {
  let utcHours = d.getUTCHours();
  let hours = utcHours < HOURS_IN_ONE_DAY - 1 ? utcHours + TZ_OFFSET : utcHours - HOURS_IN_ONE_DAY + TZ_OFFSET;
  let totalMs = (hours * SECONDS_IN_ONE_HOUR + d.getUTCMinutes() * SECONDS_IN_ONE_MINUTE + d.getUTCSeconds()) * 1000 + d.getUTCMilliseconds();
  return lookupBeat(totalMs);
}

function lookupBeat(ms: number): number {
  let index = BEAT_INTERVALS.findIndex(([start, end]) => start <= ms && ms < end);
  if (index === -1) {
    throw new Error('Out of range');
  }
  return index;
}

function parse(value: string): number {
  const MATCH_ERROR = 'Invalid .beat time';
  let match: RegExpMatchArray | null;

  try {
    match = value.match(BEAT_REGEX);
  } catch (e) {
    throw new Error(MATCH_ERROR);
  }

  if (!match) {
    throw new Error(MATCH_ERROR);
  }

  return parseInt(match[1], 10);
}

function fmt(value: number, options = {}): string {
  return '@' + `${Math.floor(value)}`.padStart(3, '0');
}
