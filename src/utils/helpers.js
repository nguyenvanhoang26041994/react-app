export const isArray = array => Array.isArray(array);
export const isObject = object => typeof object === 'object' && object !== null;
export const isUnDefined = val => typeof val === 'undefined';
export const isNumber = number => typeof number === 'number';
export const isNaN = number => Number.isNaN(number);

export const omit = (object, paths) => {
  const _paths = paths.reduce((rs, prop) => {
    rs[prop] = true;
    return rs;
  }, {});

  return Object.keys(object).reduce((rs, key) => {
    if (!_paths[key]) {
      rs[key] = object[key];
    }
    return rs;
  }, {});
};

export const pick = (object, paths) => {
  return paths.reduce((rs, prop) => {
    rs[prop] = object[prop];
    return rs;
  }, {});
}
