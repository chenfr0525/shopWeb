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
8.引入字体图标库
9.获取滚动距离vueuse
-下载npm i @vueuse/core
-使用动态类名<div :class={show:y>78}></div
10.指令封装
 -通过插件的方法把指令封装为插件
 -在main.js中注册指令
11.业务逻辑封装
-函数use打头，内部封装逻辑，return组件需要用到的数据和方法给组件消费（在category组件使用）
export function useCategory() {
  //业务逻辑
  return {
    //数据+方法
  }
}
12.列表无限加载功能实现
 -使用elementPlus提供的v-infinite-scroll指令监听是否满足触底条件，满足加载条件时让页数参数加一获取下一页数据，做新老数据的拼接
13.定制路由行为：在不同路由切换的时候，可以自动滚动到页面的顶部，而不是停留在原先的位置
 -vue-router的scrollBehavior配置项,可以指定路由切换时的滚动位置
 -scrollBehavior(){
  return{top:0}
 }
 14.报错误：good一开始{}  {}.categories=>undefined=>undefined[]
  - 1.可选链的语法 ?.
  - 2.v-if手动控制渲染实际 保证只有数据存在才渲染
15.放大镜效果实现-滑块跟随鼠标移动
 -思路：获取到当前的鼠标在盒子内的相对位置(useMouseInElement),控制滑块跟随鼠标移动(left/top) 
16.SKU组件使用
 - 熟悉第三方组件，重点关注props(决定组件接收什么数据),emit(决定会产出什么数据)
17.form表单自定义校验规则
 {
  validator:(rule,value,callback)=>{
    //自定义校验逻辑
    //value:当前输入的数据
    //callback:校验成功调用callback(),失败调用callback(new Error('错误信息'))
  }
 }
 18.时间格式化插件dayjs
 npm i dayjs
 import dayjs from 'dayjs'
