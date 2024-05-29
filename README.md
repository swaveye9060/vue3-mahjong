# my-vue3-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 在 Vue 3 项目中全局引入 Vant UI
1. 安装 Vant
```
npm install vant
```
2. 配置全局引入
在 Vue 3 中，你可以在 main.ts 文件中配置全局引入 Vant 组件。首先需要引入 Vant 和其样式，然后使用 app.use() 方法来全局注册 Vant。

修改 main.ts 文件
打开 src/main.ts 文件，添加以下代码：
```
// 引入 Vant 组件库
import Vant from 'vant';
// 引入 Vant 样式
import 'vant/lib/index.css';
const app = createApp(App);
// 全局使用 Vant
app.use(Vant);

app.use(store);
app.use(router);

app.mount('#app');
```

3. 使用 Vant 组件
> Button as VanButton(重命名)
```
<template>
  <div class="hello">
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
```