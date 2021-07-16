import minimist from 'minimist';

import pack, { PackOpts } from './pack';

const supportedOptions = {
  production: 'boolean',
  typescript: 'boolean',
  out: 'string',
  entry: 'string',
};
const getOptions = () => {
  const { _, ...opts } = minimist(process.argv.slice(2));
  const [ sourcePath, outputPath ] = _;
  const buildOptions: PackOpts = {
    production: false,
    ...opts,
  };

  for (let opt in opts) {
    const optConfig = supportedOptions[opt];
    if (typeof opts[opt] !== optConfig) {
      throw new Error(`Option "${opt}" not supported`);
    }
    buildOptions[opt] = opts[opt];
  }

  return [ sourcePath, outputPath, buildOptions ];
};

pack.apply(this, getOptions())
  .then();
