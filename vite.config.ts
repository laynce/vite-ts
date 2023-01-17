import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'

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
      // lib: { // 打包库模式
      //   name: 'myUtil',
      //   fileName: 'my-util',
      //   entry: 'main.ts'
      // }
    }
  }
  
})