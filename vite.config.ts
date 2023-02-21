import { defineConfig, normalizePath } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import windi from 'vite-plugin-windicss';
import viteEslint from 'vite-plugin-eslint';
// 如果类型报错，需要安装 @types/node: pnpm i @types/node -D
import { resolve } from 'path';

// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(resolve(__dirname, './src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), windi(), viteEslint()],
  // css 相关的配置
  css: {
    modules: {
      // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    // 进行 PostCSS 配置
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['> 1%', 'last 2 versions']
        })
      ]
    }
  }
});
