const path = require('path');
module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        quiet: true, // 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台，这也意味着来自 webpack 的错误或警告在控制台不可见
        inline: true, // 内联模式开启，false为iframe模式
        overlay: true, // 当存在编译错误或警告时，在浏览器中显示全屏覆盖。默认情况下禁用。
        clientLogLevel: 'info', // 日志等级，默认info，可能的值有 none, error, warning 或者 info（默认值），当使用内联模式(inline mode)时，在开发工具(DevTools)的控制台(console)将显示消息
        compress: true, // 一切服务都启用gzip 压缩
        hot: true // 开启热更新
        // ...serverMock
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
