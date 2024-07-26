<template>
  <div id="app">
    <header>
      <h1>E-commerce Product Management</h1>
    </header>
    <main>
      <section>
        <h2>Categories</h2>
        <CategoryList />
      </section>
      <section>
        <h2>Add Category</h2>
        <AddCategory />
      </section>
      <section>
        <h2>Add Product</h2>
        <AddProduct />
      </section>
    </main>
  </div>
</template>

<script>
import CategoryList from './components/CategoryList.vue'
import AddCategory from './components/AddCategory.vue'
import AddProduct from './components/AddProduct.vue'

export default {
  components: {
    CategoryList,
    AddCategory,
    AddProduct,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background: #42b983;
  color: white;
  padding: 20px;
}

main {
  padding: 20px;
}

section {
  margin-bottom: 40px;
}

h1, h2 {
  margin: 0;
}

button {
  margin-top: 10px;
}
</style>
