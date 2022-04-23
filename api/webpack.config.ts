const path = require('path');
const webpack = require('webpack');

const environment = process.env.ENVIRONMENT;

console.log('environment:::::', environment);

let ENVIRONMENT_VARIABLES = {
  'process.env.HOST': JSON.stringify('localhost'),
  'process.env.USER': JSON.stringify('bhargavbachina'),
  'process.env.DB': JSON.stringify('bhargavbachina'),
  'process.env.DIALECT': JSON.stringify('postgres'),
  'process.env.PORT': JSON.stringify('3080'),
  'process.env.PG_CONNECTION_STR': JSON.stringify("postgres://bhargavbachina:''@localhost:5432/bhargavbachina")
};

if (environment === 'test') {
  ENVIRONMENT_VARIABLES = {
    'process.env.HOST': JSON.stringify('localhost'),
    'process.env.USER': JSON.stringify('bhargavbachina'),
    'process.env.DB': JSON.stringify('bhargavbachina'),
    'process.env.DIALECT': JSON.stringify('postgres'),
    'process.env.PORT': JSON.stringify('3080'),
    'process.env.PG_CONNECTION_STR': JSON.stringify("postgres://bhargavbachina:''@localhost:5432/bhargavbachina")
  };
} else if (environment === 'production') {
  ENVIRONMENT_VARIABLES = {
    'process.env.HOST': JSON.stringify('localhost'),
    'process.env.USER': JSON.stringify('bhargavbachina'),
    'process.env.DB': JSON.stringify('bhargavbachina'),
    'process.env.DIALECT': JSON.stringify('postgres'),
    'process.env.PORT': JSON.stringify('3080'),
    'process.env.PG_CONNECTION_STR': JSON.stringify("postgres://pgadmin@webappdemopostgre:Tester@123@webappdemopostgre.postgres.database.azure.com:5432/tasks")
  };
}

module.exports = {
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin(ENVIRONMENT_VARIABLES),
  ],
  externals: [
    { pg: { commonjs: ['pg'] } },
    { 'pg-hstore': { commonjs: ['pg-hstore'] } }
  ],
};