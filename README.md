1.删除不需要的文件，比如components中的示例文件。创建所需文件：api，composables，directives，styles，utils
2.安装element组建（按需导入）
3.定制主题色
 -安装scss npm i sass -D
 -准备定制样式文件 styles/element/index.scss
 -对ElementPlus样式进行覆盖 通知Element采用scss语言->导入定制scss文件覆盖（修改vits.config.js）
4.axios基础配置
 -安装axios npm i axios
 -配置基础实例（统一接口配置）utils/request.js
5.路由设置
路由设计原则：找内容切换区域，如果是页面整体切换，则为一级路由;找内容切换的区域，如果是在一级路由的内部切换，则为二级路由
6.Eslint配置（单个单词文件报错）
7.自动导入组件共享色值var.scss
 -新增var.scss文件，用于存放共享色值
 -通过vite.config.js配置自动导入共享色值
