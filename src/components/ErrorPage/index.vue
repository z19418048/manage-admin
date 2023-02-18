<template>
  <div class="main">
    <div class="content">
      <slot name="image"> <img src="@/assets/images/not-found.png" /></slot>

      <div class="info">
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
        <t-button @click="$router.replace({ path: '/' })">返回首页</t-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    height: 320px;
    align-items: center;
    img {
      height: 90%;
    }
    .info {
      flex: 1;
      margin-left: 30px;
    }
    .title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .description {
      font-size: 18px;
      color: #525151;
      margin-bottom: 50px;
    }
  }
}
</style>
