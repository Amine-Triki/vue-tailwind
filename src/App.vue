<template>
  
<app-header></app-header>
  <RouterView />
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
export default {
  name : 'App' ,
  components : {
    AppHeader ,AppFooter
  }
}
</script>


<style>

</style>
