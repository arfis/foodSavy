module.exports = {
    presets: [
        '@vue/app'
    ],
    chainWebpack: config => {
        // GraphQL Loader
        config.module
            .rule('graphql')
            .test(/\.graphql$/)
            .use('graphql-tag/loader')
            .loader('graphql-tag/loader')
            .end()
    }
}
