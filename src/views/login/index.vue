<template>
  <div class="login">
    <div class="title">Manage Admin</div>
    <t-form
      v-model="formData"
      class="form"
      ref="form"
      :colon="true"
      :labelWidth="0"
    >
      <t-form-item name="account">
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
        <t-button theme="primary" type="submit" block>登录</t-button>
      </t-form-item>
    </t-form>
  </div>
</template>

<script>
import { Icon } from "tdesign-icons-vue";
import tokenApi from "@/api/token.js";
export default {
  name: "Login",
  components: { Icon },
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    };
  },
  mounted() {
    tokenApi.create({ username: "admin", password: "admin123" });
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: #f3f3f3;
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
