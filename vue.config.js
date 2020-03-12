

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {
                // '@': 'src',  默认有 @
                'assetssrc': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views'
            }
        }
    }
}