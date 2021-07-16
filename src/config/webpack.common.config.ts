import Types from 'webpack';

export interface CommonOpts {
  entry: string;
  output: string;
  filename?: string;
}

export const common = ({ entry, output, filename }: CommonOpts): Types.Configuration => ({
  node: false,
  target: 'node',
  entry,
  output: {
    filename,
    path: output,
    library: {
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript']
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
    ],
  },
});

export default common;
