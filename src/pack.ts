import webpack from 'webpack';
import { promisify } from 'util';
import path from 'path';

import development from './config/webpack.development.config';
import production from './config/webpack.production.config';
import { CommonOpts } from './config/webpack.common.config';

export interface PackOpts {
  production?: boolean;
  typescript?: boolean;
  out?: string;
  entry?: string;
}

export default async function pack(source: string, output: string, options: PackOpts) {
  const {
    out = 'index.js',
    entry,
    typescript = false,
    production: productionOpt = process.env.NODE_ENV === 'production' || false,
  } = options;
  const sourcePath = path.resolve(process.cwd(), source, entry || `index.${typescript ? 'ts' : 'js'}`);
  const outputPath = path.resolve(process.cwd(), output);
  const configOpts: CommonOpts = {
    entry: sourcePath,
    output: outputPath,
    filename: out,
  };
  const wpConfig = productionOpt ? production(configOpts) : development(configOpts);
  const compiler = webpack(wpConfig);
  const promiseRun = promisify(compiler.run).bind(compiler);
  const promiseClose = promisify(compiler.close).bind(compiler);
  const stats = await promiseRun();
  console.log(stats);
  await promiseClose();
  return stats;
}

