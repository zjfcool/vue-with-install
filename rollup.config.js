import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import { main, module } from "./package.json";

export default {
  input: "index.ts",
  output: [
    {
      file: main,
      format: "cjs",
    },
    {
      file: module,
      format: "esm",
    },
  ],
  plugins: [typescript(), terser()],
};
