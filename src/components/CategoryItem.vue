<template>
    <div>
      <div>
        <strong>{{ category.name }}</strong>
        <span>Total: ${{ calculateTotalPrice(category) }}</span>
        <button @click="editCategory">Edit</button>
        <button @click="deleteCategory">Delete</button>
      </div>
      <ul v-if="category.subcategories && category.subcategories.length">
        <li v-for="subcat in category.subcategories" :key="subcat.id">
          <CategoryItem :category="subcat" />
        </li>
      </ul>
      <ul v-if="category.products && category.products.length">
        <li v-for="product in category.products" :key="product.id">
          {{ product.name }} - ${{ product.price }}
          <button @click="() => editProduct(product)">Edit</button>
          <button @click="() => deleteProduct(product.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { useProductStore } from '@/store/products'
  import CategoryItem from './CategoryItem.vue'
  
  export default defineComponent({
    name: 'CategoryItem',
    props: {
      category: {
        type: Object,
        required: true
      }
    },
    components: {
      CategoryItem
    },
    setup(props) {
      const store = useProductStore()
  
      const editCategory = () => {
        // Implement edit logic here
      }
  
      const deleteCategory = () => {
        store.deleteCategory(props.category.id)
      }
  
      const editProduct = () => {
        // Implement edit logic here
      }
  
      const deleteProduct = (productId) => {
        store.deleteProduct(productId)
      }
  
      return {
        editCategory,
        deleteCategory,
        editProduct,
        deleteProduct,
        calculateTotalPrice: store.calculateTotalPrice
      }
    }
  })
  </script>
  