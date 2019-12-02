<template>
  <div class="layout">
    <zj-header></zj-header>
    <router-view/>
    <zj-footer></zj-footer>
  </div>
</template>

<script>
import ZjHeader from '../layout/header'
import ZjFooter from '../layout/footer'
export default {
  name: 'LayoutIndex',
  components: {ZjHeader, ZjFooter}
}
</script>

<style lang="less">
  .layout {

  }
</style>
