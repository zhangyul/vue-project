// 项目入口
import Vue from 'vue';
import Main from './main.vue';
// console.log("123");
var vue = new Vue({
    el: "#app",
    data: {

    },
    render: function (create) {
        create(Main)
    }

})