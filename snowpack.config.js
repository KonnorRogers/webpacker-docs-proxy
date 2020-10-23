const path = require("path")
// const babel = require("@rollup/plugin-babel").default
const install = [
  // "bridgetown-quick-search"
]

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
];
const installOptions = {
  NODE_ENV: true,
  // rollup: {
  //   plugins: [
   //    babel({
    //     babelHelpers: "bundled",
    //     include: "node_modules/bridgetown-quick-search/**/*",
     //    configFile: path.resolve(__dirname, "babel.config.json"),
    //   }),
   //  ],
  // },
};
const devOptions = {
  clean: true,
  open: "none",
  port: 4002,
  out: "output/_frontend_",
};
const buildOptions = {
  baseUrl: "/",
  metaDir: "",
  bundle: false,
};
const mount = { frontend: "/" };

module.exports = {
  install: install,
  plugins: plugins,
  devOptions,
  buildOptions,
  mount,
  installOptions,
};
