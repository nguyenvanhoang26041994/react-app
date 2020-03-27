export default (props = {}, deps = []) => {
  if (props && deps.length > 0) {
    const propsKey = Object.keys(props);
    for (let i = propsKey.length - 1; i >= 0; i -= 1) {
      for (let j = 0; j < deps.length; j += 1) {
        if (deps[j] === propsKey[i]) {
          return {
            [propsKey[i]]: props[propsKey[i]]
          };
        }
      }
    }
  }
  return false;
};
