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
  [
    "snowpack-plugin-rollup-bundle",
    {
      entrypoints: "output/_frontend_/javascript/index.js",
    },
  ],
];
const installOptions = { NODE_ENV: true };

const devOptions = {
  clean: true,
  open: "none",
  port: 4002,
  out: "output/_frontend_",
};
const buildOptions = {
  baseUrl: "/_frontend_",
  metaDir: "",
  bundle: true,
};
const mount = {
  frontend: "/"
};

module.exports = {
  plugins: plugins,
  buildOptions,
  mount,
  devOptions,
  installOptions,
};
