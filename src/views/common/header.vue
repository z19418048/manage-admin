<template>
  <div class="header">
    <t-button @click="toggleCollapsed" shape="circle" variant="text"
      ><menu-fold-icon v-if="collapsed" slot="icon" />
      <menu-unfold-icon v-if="!collapsed" slot="icon"
    /></t-button>
  </div>
</template>

<script>
import { MenuUnfoldIcon, MenuFoldIcon } from "tdesign-icons-vue";

export default {
  name: "Header",
  components: {
    MenuUnfoldIcon,
    MenuFoldIcon,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleCollapsed() {
      this.$emit("on-toggle-collapsed", !this.$props.collapsed);
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
