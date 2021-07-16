import cloneDeep from 'clone-deep';
import Types from 'webpack';

import common, { CommonOpts } from './webpack.common.config';

export const development = (opts: CommonOpts): Types.Configuration => ({
  ...(cloneDeep(common(opts))),
  mode: 'development',
});

export default development;
