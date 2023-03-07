import { createStore } from 'vuex'
import main from '@/global/store/main'
import catalog from '@/modules/Catalog/store/catalog-store.js'
import cart from '@/modules/Cart/store/cart-store.js'

export default createStore({
  modules: {
    main,
    catalog,
    cart,
  },
})
