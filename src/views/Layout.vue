<template>
  <div class="main">
    <t-layout>
      <sidebar :collapsed="collapsed"></sidebar>
      <t-layout>
        <t-header><t-button @click="toggleSidebar">点我</t-button></t-header>
        <t-content><router-view /></t-content>
        <t-footer>底部区域</t-footer>
      </t-layout>
    </t-layout>
  </div>
</template>

<script>
import Sidebar from "@/views/Sidebar.vue";
export default {
  name: "Layout",
  components: { Sidebar },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
<style scoped>
.main {
  width: 100vw;
  height: 100vh;
}
</style>
