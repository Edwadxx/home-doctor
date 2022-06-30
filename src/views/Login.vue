<template>
  <div class="login">
    <div class="box">
      <div class="left">
        <div class="title">家庭医生后台管理系统</div>
      </div>
      <div class="right">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="mobile">
            <el-input
              type="mobile"
              v-model="ruleForm.mobile"
              autocomplete="off"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              @keyup.native.enter="submitForm('ruleForm')"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/utils/http'
export default {
  data() {
    var validateMobile = (rule, value, callback) => {
      if (value === "" && !/^1[3-9]\d{9}$/.test(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        mobile: "",
        password: "",
      },
      rules: {
        mobile: [{ validator: validateMobile, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      return new Promise((resolve, reject) => {
        http({
          method:'post',
          url:'/dev/user/login',
          data:{
            user: this.ruleForm.mobile,
            password: this.ruleForm.password,
          }
        }).then(res=>{
          resolve(res)
        }).catch(error=>{
          reject(error)
        })
        return
        this.axios
          .post("/dev/user/login", {
            user: this.ruleForm.mobile,
            password: this.ruleForm.password,
          })
          .then((res) => {
            let { code } = res.data
            if(code == 1){
              resolve(res)
            } else {
              reject(res.data.message)
            }
          })
          .catch((error) => {
            reject(error)
          });
      });
    },
    submitForm(formName) {
      
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
            .then((res) => {
              console.log('res',12312313);
            })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  background: #f2f7fb;
  overflow: hidden;
  .box {
    margin: 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left,
  .right {
    width: 500px;
    height: 600px;
  }
  .left {
    background-color: rgba(41, 132, 248, 1);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: relative;
  }
  .right {
    background-color: #fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: center;
    padding: 150px 20px 20px 20px;
    box-sizing: border-box;
  }
  .title {
    color: #fff;
    font-size: 16px;
    position: absolute;
    top: 15px;
    left: 25px;
  }
}
</style>