module.exports = {
  extends: ['@it-incubator/eslint-config', 'plugin:@next/next/recommended'],
  rules: { 'no-console': ['warn', { allow: ['warn', 'error'] }] },
}