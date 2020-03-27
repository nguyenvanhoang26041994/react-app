import { isArray, isObject } from './helpers';

/**
 * Find latest truthy props based on dependencies.
 *
 * @param {object} props - The input props.
 * @param {array} deps - The array has value to find.
 * @return {string} The latest key value.
 */

export default (props = {}, deps = []) => {
  const result = '';

  if (!isObject(props) || !isArray(deps)) return result;

  if (deps.length === 0) return result;

  const propsKey = Object.keys(props);
  for (let i = propsKey.length - 1; i >= 0; i -= 1) {
    if (deps.indexOf(propsKey[i]) >= 0 && props[propsKey[i]]) {
      return propsKey[i];
    }
  }
};
