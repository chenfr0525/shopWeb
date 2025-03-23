import { defineStore } from "pinia"
import { ref } from "vue"
import { loginService } from '@/api/user'
import { useCartStore } from './cart'
import { mergeCartService } from '@/api/cart'

export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()
  const userInfo = ref({})
  const getUserInfo = async ({ account, password }) => {
    const res = await loginService({ account, password })
    userInfo.value = res.result
    //合并购物车操作
    await mergeCartService(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    cartStore.getCartList()
  }
  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCart()
  }
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, { persist: true }
)