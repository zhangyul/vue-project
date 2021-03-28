<style src="./header.less" lang="less"></style>
<template>
  <!-- :class="{ login: isLogin, 'no-login': !isLogin }" -->
  <header class="text-center">
    <!-- <template v-if="isLogin">
      <h1><router-link to="/">share blog</router-link></h1>
      <router-link to="/create"><i class="edit el-icon-edit"></i></router-link>
      <div class="user">
        <img
          class="avatar"
          :src="user.avatar"
          :alt="user.username"
          :title="user.username"
        />
        <ul>
          <li><router-link to="/my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template> -->
    <!-- <template v-if="!isLogin"> -->
    <h1>桃木有禾的VUE初体验</h1>
    <p>精品博客汇聚</p>
    <div class="btn">
      <router-link to="/login"><el-button>立即登录</el-button></router-link>
      <router-link to="/register"><el-button>注册账号</el-button></router-link>
    </div>
    <!-- </template> -->
  </header>
</template>