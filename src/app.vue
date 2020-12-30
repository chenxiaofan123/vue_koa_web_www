<style lang="less" scoped>
 
</style>

<template>
  <div class="page">
  	<transition mode="out-in">
    <router-view></router-view>
    </transition>
   <!-- <v-loading></v-loading>-->
   <v-siderbar></v-siderbar>
  </div>

</template>
<script>
  export default {
    data() {
      return {}
    },
    mounted() {
    
    },
    methods: {
    }
  }
</script>