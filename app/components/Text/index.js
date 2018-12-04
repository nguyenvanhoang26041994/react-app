import React from 'react';

import P from './P';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import H5 from './H5';
import H6 from './H6';
import Span from './Span';
import Field from './Field';

const Text = props => <Span {...props} />;

Text.P = P;
Text.H1 = H1;
Text.H2 = H2;
Text.H3 = H3;
Text.H4 = H4;
Text.H5 = H5;
Text.H6 = H6;
Text.Span = Span;
Text.Field = Field;

export default Text;
export { P, H1, H2, H3, H4, H5, H6, Span, Field };
