<template>
  <v-container>
    <ProductList />
  </v-container>
</template>

<script>
  import ProductList from '@/components/ProductList.vue' // 商品一覧コンポーネントを読み込み

  export default {
    name: 'HomeView', // このファイルの名前（Vue DevToolsなどで表示される）
    components: {
      ProductList,     // 上で読み込んだ ProductList をこのテンプレート内で使えるようにする
    },
  }
</script>
