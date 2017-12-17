import Vue from 'vue';

const requireContext = require.context('../components', true, /\.vue$/);

requireContext.keys().forEach((fileName) => {
  let baseComponentConfig = requireContext(fileName);

  baseComponentConfig = baseComponentConfig.default || baseComponentConfig;

  const baseComponentName = baseComponentConfig.name || fileName.replace(/^.+\//, '').replace(/\.\w+$/, '');

  Vue.component(baseComponentName, baseComponentConfig);
});
