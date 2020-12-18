const formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 s',
    other: '{{count}} s'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a min',
    other: 'less than {{count}} min'
  },
  xMinutes: {
    one: '1 min',
    other: '{{count}} min'
  },
  aboutXHours: {
    one: 'about 1 h',
    other: 'about {{count}} h'
  },
  xHours: {
    one: '1 h',
    other: '{{count}} h'
  },
  xDays: {
    one: '1 d',
    other: '{{count}} d'
  },
  aboutXWeeks: {
    one: 'about 1 w',
    other: 'about {{count}} w'
  },
  xWeeks: {
    one: '1 w',
    other: '{{count}} w'
  },
  aboutXMonths: {
    one: 'about 1 mo',
    other: 'about {{count}} m'
  },
  xMonths: {
    one: '1 mo',
    other: '{{count}} mo'
  },
  aboutXYears: {
    one: 'about 1 y',
    other: 'about {{count}} y'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} y'
  },
  overXYears: {
    one: 'over 1 y',
    other: 'over {{count}} y'
  },
  almostXYears: {
    one: 'almost 1 y',
    other: 'almost {{count}} y'
  }
};

export function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}