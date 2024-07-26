<template>
    <div>
      <input v-model="name" placeholder="Product Name" />
      <input v-model="price" type="number" placeholder="Product Price" />
      <select v-model="categoryId">
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
      <button @click="addProduct">Add Product</button>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '@/store/products'
  import { ref } from 'vue'
  
  export default {
    setup() {
      const store = useProductStore()
      const name = ref('')
      const price = ref(0)
      const categoryId = ref('')
  
      const addProduct = () => {
        store.addProduct(name.value, price.value, categoryId.value)
        name.value = ''
        price.value = 0
        categoryId.value = ''
      }
  
      return { name, price, categoryId, categories: store.categories, addProduct }
    },
  }
  </script>
  