1.删除不需要的文件，比如components中的示例文件。创建所需文件：api，composables，directives，styles，utils
2.安装element组建（按需导入）
3.定制主题色
 -安装scss npm i sass -D
 -准备定制样式文件 styles/element/index.scss
 -对ElementPlus样式进行覆盖 通知Element采用scss语言->导入定制scss文件覆盖（修改vits.config.js）
4.axios基础配置
 -安装axios npm i axios
 -配置基础实例（统一接口配置）utils/request.js