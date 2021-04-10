// 项目入口
import Vue from 'vue';
import Main from './main.vue';
var vue = new Vue({
    el: "#app",
    data: {

    },
    render: function (create) {
        create(Main)
    }

})