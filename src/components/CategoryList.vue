<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <CategoryItem :category="category" />
      </li>
    </ul>
  </div>
</template>

<script>
import { useProductStore } from "@/store/products";
import CategoryItem from "./CategoryItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { CategoryItem },
  setup() {
    const store = useProductStore();
    store.fetchCategories();

    return { categories: store.categories };
  },
});
</script>
