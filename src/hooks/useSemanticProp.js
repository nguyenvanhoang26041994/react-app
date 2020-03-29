import getLatestTruthyProp from '../utils/getLatestTruthyProp';
import { useMemo } from 'react';

export default (name, props, deps, tracking = []) => {
  return useMemo(() => {
    if (props.hasOwnProperty(`${name}`)) {
      return props[name];
    }

    return getLatestTruthyProp(props, deps);
  }, tracking);
}
