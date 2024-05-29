<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="primary" @click="handleClick">点击我</van-button>
  </div>
</template>

<script setup lang="ts">
import { Button as VanButton } from 'vant';

const handleClick = () => {
  console.log('按钮被点击了');
  alert('按钮被点击了');
};
</script>
