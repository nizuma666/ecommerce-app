// src/store/products.js
import { defineStore } from 'pinia'
import { useQuery, useMutation } from '@vue/apollo-composable'
import {
  GET_CATEGORIES,
  INSERT_CATEGORIES,
  ADD_PRODUCT,
  UPDATE_CATEGORY,
  UPDATE_PRODUCT,
  DELETE_CATEGORY,
  DELETE_PRODUCT,
} from '@/graphql/operations'

export const useProductStore = defineStore('products', {
  state: () => ({
    categories: [],
    loading: false,
  }),
  actions: {
    async fetchCategories() {
      this.loading = true
      const { result } = useQuery(GET_CATEGORIES)
      result.value.then(({ data }) => {
        this.categories = data.categories
        this.loading = false
      }).catch(error => {
        console.error(error)
        this.loading = false
      })
    },
    async addCategory(name = null) {
      const { mutate } = useMutation(INSERT_CATEGORIES, {
        variables: { name },
      })
      mutate().then(() => this.fetchCategories())
    },
    async addProduct(name, price, categoryId) {
      const { mutate } = useMutation(ADD_PRODUCT, {
        variables: { name, price, categoryId },
      })
      mutate().then(() => this.fetchCategories())
    },
    async updateCategory(id, name) {
      const { mutate } = useMutation(UPDATE_CATEGORY, {
        variables: { id, name },
      })
      mutate().then(() => this.fetchCategories())
    },
    async updateProduct(id, name, price) {
      const { mutate } = useMutation(UPDATE_PRODUCT, {
        variables: { id, name, price },
      })
      mutate().then(() => this.fetchCategories())
    },
    async deleteCategory(id) {
      const { mutate } = useMutation(DELETE_CATEGORY, {
        variables: { id },
      })
      mutate().then(() => this.fetchCategories())
    },
    async deleteProduct(id) {
      const { mutate } = useMutation(DELETE_PRODUCT, {
        variables: { id },
      })
      mutate().then(() => this.fetchCategories())
    },
    calculateTotalPrice(category) {
      let total = 0
      if (category.products) {
        total += category.products.reduce((sum, product) => sum + product.price, 0)
      }
      if (category.subcategories) {
        for (const subcategory of category.subcategories) {
          total += this.calculateTotalPrice(subcategory)
        }
      }
      return total
    },
  },
})
