const createConfig = require('@titicaca/eslint-config-triple/create-config')

// module.exports = createConfig({ type: 'frontend' })

const { extends: extendConfigs, overrides } = createConfig({ type: 'frontend' })

module.exports = {
  extends: [
    ...extendConfigs,
    // 확장할 규칙 이름...
  ],
  overrides: [
    ...overrides,
    // 특정 파일 대상 규칙...
  ],
  rules: {
    // 개별 규칙
    "promise/catch-or-return": 0,
    "promise/prefer-await-to-then": 0,
    "promise/always-return": 0,
    "prettier/prettier": 0,
    "import/order": 0,
    "import/no-duplicates": 0,
    "no-unused-vars": 0,
    "no-console": 0,
    "promise/prefer-await-to-callbacks": 0
  },
}