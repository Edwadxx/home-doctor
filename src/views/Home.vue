<template>
  <div class="home">
    <el-container>
      <el-aside width="200px" class="center">侧边栏</el-aside>
      <el-container>
        <el-header class="center">头部</el-header>
        <el-main class="center">中心内容</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss">
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  text-align: center;
  background-color: #b3c0d1;
}

.el-aside {
  text-align: center;
  background-color: #d3dce6;
}

.el-main {
  text-align: center;
  background-color: #e9eef3;
}
</style>
