<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body,#app,#app > div{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'PingFangSC-Regular', 'PingFang SC';
}
.el-input__inner:focus{
  border-color: rgb(24, 119, 242) !important;
}
.el-form-item.is-error .el-input__inner:focus{
  border-color: #F56C6C !important;
} 
</style>
