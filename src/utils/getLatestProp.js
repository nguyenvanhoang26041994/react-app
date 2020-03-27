/**
 * Find latest props based on dependencies.
 *
 * @param {object} props The input props.
 * @param {array} deps The array has value to find.
 * @return {object} The latest object value.
 */

export default (props = {}, deps = []) => {
  if (props && deps.length > 0) {
    const propsKey = Object.keys(props);
    for (let i = propsKey.length - 1; i >= 0; i -= 1) {
      if (deps.indexOf(propsKey[i]) >= 0) {
        return {
          [propsKey[i]]: props[propsKey[i]]
        };
      }
    }
  }
  return {};
};
