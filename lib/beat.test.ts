import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { beat, isBeat, toInterval } from './beat.ts';

describe('beat', () => {
  it('should be a function', () => {
    assert(typeof beat === 'function');
  });

  it('should output a string', () => {
    assert(typeof beat() === 'string');
  });

  it('should output the correct .beat', () => {
    assert.strictEqual(beat('1970-01-01T23:00:00.000Z'), '@000');
    assert.strictEqual(beat('1970-01-02T00:00:00.000Z'), '@041');
    assert.strictEqual(beat('1970-01-02T01:00:00.000Z'), '@083');
    assert.strictEqual(beat('1970-01-01T22:59:59.999Z'), '@999');
  });
});

describe('isBeat', () => {
  it('should be a function', () => {
    assert(typeof isBeat === 'function');
  });

  it('should always output a boolean', () => {
    assert(typeof isBeat('blah') === 'boolean');
    assert(typeof isBeat('@123') === 'boolean');
    // @ts-expect-error
    assert(typeof isBeat() === 'boolean');
  });

  it('should detect a valid .beat string', () => {
    assert.strictEqual(isBeat('@000'), true);
    assert.strictEqual(isBeat('@999'), true);
  });

  it('should detect an invalid .beat string', () => {
    assert.strictEqual(isBeat('00'), false);
    assert.strictEqual(isBeat('000'), false);
    assert.strictEqual(isBeat('000@'), false);
    assert.strictEqual(isBeat('000@0'), false);
    assert.strictEqual(isBeat('10'), false);
    assert.strictEqual(isBeat('100'), false);
    assert.strictEqual(isBeat('@00'), false);
    assert.strictEqual(isBeat('@0000'), false);
    assert.strictEqual(isBeat('@00000'), false);
    assert.strictEqual(isBeat('@000@'), false);
    assert.strictEqual(isBeat('@000@0'), false);
    assert.strictEqual(isBeat('@1000'), false);
    assert.strictEqual(isBeat('@42'), false);
  });

  it('should detect an invalid type', () => {
    // @ts-expect-error
    assert.strictEqual(isBeat(123), false);
    // @ts-expect-error
    assert.strictEqual(isBeat({}), false);
    // @ts-expect-error
    assert.strictEqual(isBeat(null), false);
    // @ts-expect-error
    assert.strictEqual(isBeat(undefined), false);
  });
});

describe('toInterval', () => {
  it('should be a function', () => {
    assert(typeof toInterval === 'function');
  });

  it('should return an interval object', () => {
    const result = toInterval('@000');

    assert(typeof result === 'object');
    assert.deepEqual(Object.keys(result), ['start', 'end']);
    assert.deepEqual(Object.values(result).map(v => v instanceof Date), [true, true]);
  });

  it('should throw if the input is not a valid .beat', () => {
    const expected = {
      name: 'Error',
      message: 'Invalid .beat time',
    };

    assert.throws(() => toInterval('000'), expected);
    assert.throws(() => toInterval('foo'), expected);
    // @ts-expect-error
    assert.throws(() => toInterval(321), expected);
  });

  it('should return the correct interval', () => {
    const d = new Date();
    const datePrefix1 = [
      d.getUTCFullYear().toString().padStart(4, '0'),
      (d.getUTCMonth() + 1).toString().padStart(2, '0'),
      d.getUTCDate().toString().padStart(2, '0')
    ].join('-');
    const datePrefix2 = [
      d.getUTCFullYear().toString().padStart(4, '0'),
      (d.getUTCMonth() + 1).toString().padStart(2, '0'),
      (d.getUTCDate() + 1).toString().padStart(2, '0')
    ].join('-');

    assert.deepStrictEqual(toInterval('@000'), {
      start: new Date(`${datePrefix1}T23:00:00.000Z`),
      end: new Date(`${datePrefix1}T23:01:26.400Z`),
    });

    assert.deepStrictEqual(toInterval('@041'), {
      start: new Date(`${datePrefix1}T23:59:02.400Z`),
      end: new Date(`${datePrefix2}T00:00:28.800Z`),
    });

    assert.deepStrictEqual(toInterval('@042'), {
      start: new Date(`${datePrefix2}T00:00:28.800Z`),
      end: new Date(`${datePrefix2}T00:01:55.200Z`),
    });
  });

  it('should return the correct interval using custom from time', () => {
    const d = new Date();
    const datePrefix1 = [
      d.getUTCFullYear().toString().padStart(4, '0'),
      (d.getUTCMonth() + 1).toString().padStart(2, '0'),
      d.getUTCDate().toString().padStart(2, '0')
    ].join('-');
    const datePrefix2 = [
      d.getUTCFullYear().toString().padStart(4, '0'),
      (d.getUTCMonth() + 1).toString().padStart(2, '0'),
      (d.getUTCDate() + 1).toString().padStart(2, '0')
    ].join('-');

    assert.deepStrictEqual(toInterval('@000', { from: d }), {
      start: new Date(`${datePrefix1}T23:00:00.000Z`),
      end: new Date(`${datePrefix1}T23:01:26.400Z`),
    });

    assert.deepStrictEqual(toInterval('@041', { from: d }), {
      start: new Date(`${datePrefix1}T23:59:02.400Z`),
      end: new Date(`${datePrefix2}T00:00:28.800Z`),
    });

    assert.deepStrictEqual(toInterval('@042', { from: d }), {
      start: new Date(`${datePrefix2}T00:00:28.800Z`),
      end: new Date(`${datePrefix2}T00:01:55.200Z`),
    });
  });

  it('should return the correct interval using custom until time', () => {
    const d = new Date();
    const datePrefix1 = [
      d.getUTCFullYear().toString().padStart(4, '0'),
      (d.getUTCMonth() + 1).toString().padStart(2, '0'),
      (d.getUTCDate() - 1).toString().padStart(2, '0')
    ].join('-');
    const datePrefix2 = [
      d.getUTCFullYear().toString().padStart(4, '0'),
      (d.getUTCMonth() + 1).toString().padStart(2, '0'),
      d.getUTCDate().toString().padStart(2, '0')
    ].join('-');

    assert.deepStrictEqual(toInterval('@000', { until: d }), {
      start: new Date(`${datePrefix1}T23:00:00.000Z`),
      end: new Date(`${datePrefix1}T23:01:26.400Z`),
    });

    assert.deepStrictEqual(toInterval('@041', { until: d }), {
      start: new Date(`${datePrefix1}T23:59:02.400Z`),
      end: new Date(`${datePrefix2}T00:00:28.800Z`),
    });

    assert.deepStrictEqual(toInterval('@042', { until: d }), {
      start: new Date(`${datePrefix2}T00:00:28.800Z`),
      end: new Date(`${datePrefix2}T00:01:55.200Z`),
    });
  });
});
