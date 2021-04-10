<template>
  <div id="index">
    <section class="blog-posts">
      <router-link
        v-for="(blog, index) in blogs"
        :key="index"
        :to="`/detail/${blog.id}`"
        class="item"
      >
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username" />
          <figcaption>{{ blog.user.username }}</figcaption>
        </figure>
        <h3>
          {{ blog.title }}
          <span>{{ formatTime(blog.createdAt) }}</span>
        </h3>
        <p>{{ blog.description }}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="onPageChange"
      ></el-pagination>
    </section>
  </div>
</template>
<script src="../utils/time.js"></script>
<script src="./index.js"></script>
<style scoped src="./index.less" lang="less"></style>