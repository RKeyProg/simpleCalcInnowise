/* eslint-disable no-undef */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join, resolve } from 'path';

export const entry = './src/index.js';
export const output = {
  filename: 'bundle.js',
  path: resolve(__dirname, 'dist'),
};
export const module = {
  rules: [
    {
      test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
      use: ['style-loader', 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
];
export const devServer = {
  static: {
    directory: join(__dirname, 'dist'), // Каталог для статики
  },
  open: true, // Автоматически открывать браузер
};
export const mode = 'development';
