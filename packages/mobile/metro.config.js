/* eslint-disable @typescript-eslint/no-var-requires */
const { createMetroConfiguration } = require('expo-yarn-workspaces');

// eslint-disable-next-line import/no-extraneous-dependencies
const { getDefaultConfig } = require('metro-config');

const { transformer, resolver, ...config } = createMetroConfiguration(
  __dirname,
);

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    ...config,
    transformer: {
      ...transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      ...resolver,
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
