import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'
import myPlugin from './plugins/myPlugin'
import myVitrualPlugin from './plugins/myVitrualPlugin'
import pkg from './package.json'

export default defineConfig(({ mode }) => {


  const env = loadEnv(mode, process.cwd(), '')
  const define = {
    "process.env.mode": `"${mode}"`,
    "process.env.app_version": "'1.0.0'"
  }

  return {
    define,
    resolve: {
      alias: [{
        find: /^@\//, replacement: path.join(__dirname, './src/')
      }]
    },
    build: {
      minify: false,
      // lib: {
      //   name: 'myUtil',
      //   fileName: 'my-util',
      //   entry: 'main.ts'
      // }
    },
    plugins: [
      myPlugin(),
      myVitrualPlugin({ current: pkg.version }),
    ]
  }
  
})