const plugins = [
    [
      "@snowpack/plugin-build-script",
      {
        "cmd": `babel --filename $FILE`,
        "input": [".js"],
        "output": [".js"]
      }
    ],
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
  NODE_ENV: true
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
  plugins: plugins,
  devOptions,
  buildOptions,
  mount,
  installOptions,
};
