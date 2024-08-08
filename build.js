import esbuild from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';

esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  target: ['node14'],
  outdir: 'dist',
  sourcemap: false,
  plugins: [dtsPlugin()],
  minify: true,
  tsconfig: './tsconfig.json',
  format: 'esm'  
}).catch(() => process.exit(1));
