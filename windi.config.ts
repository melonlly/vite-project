import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  // 开启 属性化attributify - 可以用 props 的方式去定义样式属性
  attributify: true,
  // shortcuts 可以封装一系列的原子化能力
  shortcuts: {
    'flex-c': 'flex justify-center items-center'
  }
});
