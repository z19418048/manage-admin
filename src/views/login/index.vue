<template>
  <div class="login">
    <div class="title">YiLi Admin</div>
    <t-form
      :data="formData"
      class="form"
      ref="form"
      :colon="true"
      :labelWidth="0"
      :rules="rules"
      @submit="handleLogin"
    >
      <t-form-item name="username">
        <t-input
          v-model="formData.username"
          clearable
          placeholder="请输入用户名"
        >
          <template #prefix-icon>
            <icon name="desktop"></icon>
          </template>
        </t-input>
      </t-form-item>
      <t-form-item name="password">
        <t-input
          v-model="formData.password"
          type="password"
          clearable
          placeholder="请输入密码"
        >
          <template #prefix-icon>
            <icon name="lock-on"></icon>
          </template>
        </t-input>
      </t-form-item>
      <t-form-item>
        <t-button theme="primary" type="submit" block :loading="loading">{{
          loading ? "登录中" : "登录"
        }}</t-button>
      </t-form-item>
    </t-form>
  </div>
</template>
<script>
import { Icon } from "tdesign-icons-vue";

export default {
  name: "Login",
  components: { Icon },
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
      loading: false,
      rules: {
        username: [
          { required: true, message: "用户名不能为空" },
          {
            min: 4,
            message: "至少需要四个字符，一个中文等于两个字符",
          },
        ],
        password: [
          { required: true, message: "密码不能为空" },
          {
            min: 6,
            message: "至少需要六个字符",
          },
        ],
      },
    };
  },
  methods: {
    handleLogin({ validateResult }) {
      this.loading = true;
      validateResult === true &&
        this.$store
          .dispatch("login", this.formData)
          .then(async () => {
            await this.$store.dispatch("user/fetchCurrentUserInfo");
            await this.$router.push({
              path: this.$route.query.redirect || "/",
            });
          })
          .finally(() => {
            this.loading = false;
          });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 35px;
    margin-bottom: 50px;
    font-weight: bold;
  }
  .form {
    min-width: 300px;
  }
}
</style>
