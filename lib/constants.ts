export const SECONDS_IN_ONE_MINUTE = 60;
export const SECONDS_IN_ONE_HOUR = SECONDS_IN_ONE_MINUTE ** 2;
export const HOURS_IN_ONE_DAY = 24;

export const TZ_OFFSET = 1; // UTC+1, or Central European Time
export const TZ_OFFSET_MS = TZ_OFFSET * SECONDS_IN_ONE_HOUR * 1000;

export const BEAT_DIVISOR = SECONDS_IN_ONE_HOUR * HOURS_IN_ONE_DAY;
export const BEAT_REGEX = /^@(\d{3})$/;

export const MICROBEATS_PER_SECOND = 11574;
