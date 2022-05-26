module.exports = {
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest', // vue 文件用 vue-jest 转换
      '^.+\\.ts$': 'ts-jest', // ts 文件用 ts-jest 转换
      '^.+\\js$': 'babel-jest',
    },
    // 为了修复 Consider using the "jsdom" test environment. 问题
    testEnvironment: "jsdom",
    /** 全局alias */
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1"
    }
  };
  