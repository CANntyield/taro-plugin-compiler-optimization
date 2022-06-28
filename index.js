module.exports = (ctx, options) => {
  ctx.modifyWebpackChain(args => {
    const chain = args.chain
    chain.module.rules.delete('script')
    chain.merge({
      module: {
        rule: {
          script: {
            test: /\.[tj]sx?$/i,
            use: {
              threadLoader: {
                loader: 'thread-loader',
              },
              babelLoader: {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                },
              },
            },
          },
        },
      },
    })
    if (!options.closeScssCache) {
      chain.module.rule('scss').oneOf('0').use('cacheLoader').loader('cache-loader').before('1')
      chain.module.rule('scss').oneOf('1').use('cacheLoader').loader('cache-loader').before('1')
    }
  })
}
