<template>
  <div v-for="name in catalogNames" 
      :catalogNames="catalogNames"
      :key="name.enName"
>
    <input type="button" v-model="name.name">
  </div>
  <AddCompany :company="company"/>
</template>

<script>
import AddCompany from '@/components/AddCompany.vue'

export default {
  name: 'CatalogButtons',
  components: {
    //ComunalOrders,
    AddCompany
  },
  props: {
    catalogNames: Array
  },
  data() {
    return {
      company: {}
    }
  }
}
</script>

<style scoped>
</style>
