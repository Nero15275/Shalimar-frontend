const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            const oneOfRule = webpackConfig.module.rules.find(
                (rule) => typeof rule.oneOf === 'object'
            );

            if (oneOfRule) {
                const sassRule = {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: require.resolve('sass-loader'),
                            options: {
                                implementation: require('sass'),
                                sassOptions: {
                                    includePaths: [path.resolve(__dirname, 'src/styles')],
                                },
                            },
                        },
                    ],
                };

                oneOfRule.oneOf.unshift(sassRule);
            } else {
                // Fallback to previous behavior if no 'oneOf' rule exists
                webpackConfig.module.rules.push({
                    test: /\.scss$/,
                    use: [
                        {
                            loader: require.resolve('sass-loader'),
                            options: {
                                implementation: require('sass'),
                                sassOptions: {
                                    includePaths: [path.resolve(__dirname, 'src/styles')],
                                },
                            },
                        },
                    ],
                });
            }

            return webpackConfig;
        },
    },
};
