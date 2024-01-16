<script setup lang="ts">
import { ref } from 'vue'
import zhTW from 'ant-design-vue/es/locale/zh_TW'
import Layout from './components/Layout.vue'
const locale = ref(zhTW)

</script>

<template>
    <a-layout>
      <Layout />
    </a-layout>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  min-height: 100vh;
  min-width: 100vh;
  margin: 0;
  padding: 0;
}
</style>
