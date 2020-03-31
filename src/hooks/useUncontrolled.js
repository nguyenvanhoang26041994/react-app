import { useMemo, useState, useEffect } from 'react';

export default (propName, props, config) => {
  const isControlled = useMemo(() => props.hasOwnProperty(propName), [propName]);
  const [state, setState] = useState(isControlled ? props[propName] : config.defaultState);

  useEffect(() => {
    if (isControlled) {
      setState(props[propName]);
    }
  }, [props[propName], isControlled]);

  useMemo(() => config.onChangeState(state), [state]);

  return [state, setState, isControlled];
};
