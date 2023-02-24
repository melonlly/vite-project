module.exports = {
  /*
  env 和 globals
  运行环境 和 全局变量
	在指定的运行环境中会预设一些全局变量
  */
  env: {
    browser: true,
    es2021: true
  },
  /*
  	extends - 继承配置
  */
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    // prettier-1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  /*
	parser - 解析器
		@typescript-eslint/parser -> 解析 TypeScript
			（ESLint 底层默认使用 Espree 来进行 AST 解析，其可以解析 ECMAScript 规范的语法，但不支持 TypeScript）
	*/
  parser: 'vue-eslint-parser',
  /*
	parserOptions - 解析器选项
		默认情况下 ESLint 支持 ES5 语法
	*/
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest', // 启用最新的 ES 语法
    sourceType: 'module', // 使用 ES Module
    // 额外语言特性
    ecmaFeatures: {
      jsx: true
    }
  },
  /*
	插件配置
		ESLint 本身没有内置 TypeScript 的代码规则
		需要添加 ESLint 插件来增加一些特定的规则，比如添加@typescript-eslint/eslint-plugin 来拓展一些关于 TS 代码的规则
	*/
  // prettier-2. 加入 prettier 的 eslint 插件
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  /*
	rules - 具体代码规则
		off 或 0: 表示关闭规则。
		warn 或 1: 表示开启规则，不过违背规则后只抛出 warning，而不会导致程序退出。
		error 或 2: 表示开启规则，不过违背规则后抛出 error，程序会退出。
	*/
  rules: {
    // prettier-3. 注意要加上这一句，开启 prettier 自动修复的功能
    'prettier/prettier': 'error',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    /*
	添加插件后只是拓展了 ESLint 本身的规则集，但 ESLint 默认并没有开启这些规则的校验！
	如果要开启或者调整这些规则，你需要在 rules 中进行配置
	*/
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-explicit-any': 'warn'
  }
};
