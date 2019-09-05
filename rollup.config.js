import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';

export default {
  input: 'src/main.js',
  output: {
    name: 'captcha',
    file: 'index.js',
    format: 'umd'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    cleanup()
  ],
};
