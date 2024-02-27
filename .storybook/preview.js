/** @type { import('@storybook/html').Preview } */
export const customViewport = {
  smallUgly:{
    name: 'smallUgly',
    style:{
      width: '360px',
      height: '540px'
    }
  },
  mediumUgly:{
    name: 'mediumUgly',
    style:{
      width: '1024px',
      height: '1200px'
    }
  }
}
export const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport:{
      viewports: customViewport,
      defaultViewport: 'someDefault'
    }
  },
};

