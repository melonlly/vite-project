import { defineConfig, normalizePath } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import windi from 'vite-plugin-windicss';
import viteEslint from 'vite-plugin-eslint';
import viteImagemin from 'vite-plugin-imagemin';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// 如果类型报错，需要安装 @types/node: pnpm i @types/node -D
import { resolve } from 'path';

// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(resolve(__dirname, './src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    // force: true, // 强制开启预构建
    entries: ['./src/main.ts']
  },
  resolve: {
    // 别名配置
    alias: {
      '@assets': resolve(__dirname, 'src/assets')
    }
  },
  plugins: [
    vue(),
    windi(),
    viteEslint(),
    createSvgIconsPlugin({
      iconDirs: [resolve(__dirname, 'src/assets/icons')]
    }),
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9]
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ],
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
  },
  build: {
    /*
    如果静态资源体积 >= 4KB，则提取成单独的文件
    如果静态资源体积 < 4KB，则作为 base64 格式的字符串内联
    */
    assetsInlineLimit: 8 * 1024 // 8kb，默认4kb
  }
});
