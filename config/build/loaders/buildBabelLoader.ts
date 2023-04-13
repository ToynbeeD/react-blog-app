import { BuildOptions } from '../types/config';

export function buildBabelLoader(options: BuildOptions) {
  const { isDev } = options;

  return {
    test: /(js|jsx|tsx)/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              keyAsDefaultValue: true,
              outputPath: 'extractedTranslations/{{locale}}/{{ns}}.json',
              locales: [
                'en',
                'ru',
              ],
            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
