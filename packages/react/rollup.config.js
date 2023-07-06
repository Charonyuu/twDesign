import Ts from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default {
  input: ["src/index.ts"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
    // preserveModules: true, // 替换为 output.preserveModules
  },
  plugins: [
    Ts(),
    commonjs(),
    postcss({
      plugins: [tailwindcss(), autoprefixer()],
      extract: false,
      minimize: true,
      modules: false,
    }),
  ],
};
