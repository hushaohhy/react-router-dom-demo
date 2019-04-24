// state.js
// 提供默认值，既然用Redux来管理数据，那么数据就一定要有默认值，所以我们将state的默认值统一放置在state.js文件

// 声明默认值
// 这里我们列举两个示例
// 同步数据：pageTitle
// 异步数据：infoList（将来用异步接口获取）
export default {
    pageTitle: '首页',
    infoList: []
}