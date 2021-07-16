import cloneDeep from 'clone-deep';
import Types from 'webpack';

import common, { CommonOpts } from './webpack.common.config';

export const production = (opts: CommonOpts): Types.Configuration => ({
  ...(cloneDeep(common(opts))),
  mode: 'production',
});

export default production;
