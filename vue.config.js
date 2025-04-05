process.env.VUE_APP_VERSION = process.env.npm_package_version;

module.exports = {
    productionSourceMap: false,
    outputDir: './dist/',
    assetsDir: 'public',
    publicPath: '',
    // eslint-disable-next-line no-undef
    pages: {"index":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./index.html","lang":"pt","cacheVersion":3,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/en/"},{"rel":"alternate","hreflang":"es","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/es/"}],"chunks":["chunk-vendors","chunk-common","index"]},"en/":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./en/index.html","lang":"en","title":"","cacheVersion":3,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/en/"},{"rel":"alternate","hreflang":"es","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/es/"}],"chunks":["chunk-vendors","chunk-common","en/"]},"es/":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./es/index.html","lang":"es","cacheVersion":3,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/en/"},{"rel":"alternate","hreflang":"es","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/es/"}],"chunks":["chunk-vendors","chunk-common","es/"]},"auth":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./auth/index.html","lang":"pt","cacheVersion":3,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/auth/"},{"rel":"alternate","hreflang":"pt","href":"https://581a8e80-4b00-4e09-9e6e-f284c4ca07a7.weweb-preview.io/auth/"}],"chunks":["chunk-vendors","chunk-common","auth"]}},
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        });
        config.performance = {
            hints: false,
        };
    },
};
