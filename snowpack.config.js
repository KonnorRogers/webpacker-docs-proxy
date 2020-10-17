const plugins = [
  ["@snowpack/plugin-babel"],
  [
    "@snowpack/plugin-build-script",
    {
      cmd: "postcss --config postcss.config.js",
      input: [".css"],
      output: [".css"],
    },
  ],
  // [
  //   "snowpack-plugin-rollup-bundle",
  //   {
  //     emitHtmlFiles: true,
  //     preserveSourceFiles: true,
  //     entrypoints: "output/_frontend_/javascript/index.js",
  //   },
  // ],
];
const installOptions = { NODE_ENV: true };

const devOptions = {
  clean: true,
  open: "none",
  port: 4002,
  out: "output",
};
const buildOptions = {
  baseUrl: "/",
  metaDir: "",
  bundle: true,
};
const mount = {
  frontend: "/_frontend_",
  output: "/",
};

module.exports = {
  plugins: plugins,
  buildOptions,
  mount,
  devOptions,
  installOptions,
};
