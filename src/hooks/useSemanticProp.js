import getLatestTruthyProp from '../utils/getLatestTruthyProp';
import { useMemo } from 'react';

const makeDepsTracking = (props, deps) => deps.map(name => props[name]);

export default (name, props, deps) => {
  return useMemo(() => {
    if (props.hasOwnProperty(`${name}`)) {
      return props[name];
    }

    return getLatestTruthyProp(props, deps);
  }, [
    ...makeDepsTracking(props, deps),
    props[name],
  ]);
}
