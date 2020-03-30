import Vue from 'vue'
// 首字符大写
function changeStr(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


const requireComponent = require.context('./', true, /\.vue$/);

console.log(requireComponent.keys());

// ["./child1.vue", "./child2.vue"]
const install = (Vue) => {
    requireComponent.keys().forEach(fileName => {
        // 拿到所有的组件进行遍历
        let config = requireComponent(fileName);
        console.log(config);
        // 获得第i个组件 Module {default: {…}, __esModule: true, Symbol(Symbol.toStringTag): "Module"}

        // 格式化组件名
        let componentName = changeStr(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
        Vue.component(componentName, config.default || config);
    })
}
export default {
    install
}