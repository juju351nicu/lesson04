module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/prettier',
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',
    },
    rules: {
      // ここにカスタムルールを追加
    },
    overrides: [
      {
        files: ['src/stores/**'],
        rules: {
          // Piniaストアに対するルール
          'no-shadow': 'off', // Piniaストア内で`state`をシャドウしないようにする
          // 他のPiniaストア関連のルール
        },
      },
    ],
  };