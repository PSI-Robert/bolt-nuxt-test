// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default withNuxt([
   eslintPluginPrettierRecommended,
   {
      rules: {
         'prettier/prettier': 'warn',
         'vue/component-name-in-template-casing': ['error', 'PascalCase'],
         'vue/no-unused-components': 'error',
         'vue/no-unused-vars': 'error',
         '@typescript-eslint/no-unused-expressions': [
            'error',
            {
               allowShortCircuit: true,
               allowTernary: true,
               allowTaggedTemplates: true,
            },
         ],
      },
   },
]);
