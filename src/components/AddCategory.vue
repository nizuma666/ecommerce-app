<template>
    <div>
      <input v-model="name" placeholder="Category Name" />
      <button @click="addCategory">Add Category</button>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '@/store/products'
  import { ref } from 'vue'
  
  export default {
    setup() {
      const store = useProductStore()
      const name = ref('')
  
      const addCategory = () => {
        store.addCategory(name.value)
        name.value = ''
      }
  
      return { name, addCategory }
    },
  }
  </script>
  