<template>
  <GoodsCatalog />
  <CartTable />
</template>

<script>
import CartTable from '@/modules/Cart/components/CartTable.vue'
import GoodsCatalog from '@/modules/Catalog/components/GoodsCatalog.vue'

export default {
  components: {
    CartTable,
    GoodsCatalog,
  },
}
</script>
