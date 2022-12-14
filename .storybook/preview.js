import '../src/common-ui/app.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  // layout: 'centered',
};

const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');
addDecorator(jsxDecorator);