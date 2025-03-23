import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user'
import { addCartService, getCartListService, delCartService } from '@/api/cart'

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => {
    return userStore.userInfo.token
  })
  const cartList = ref([])

  //获取购物车列表
  const getCartList = async () => {
    const data = await getCartListService()
    cartList.value = data.result
  }
  const addCart = async (good) => {
    if (isLogin.value) {
      const { skuId, count } = good
      await addCartService({ skuId, count })
      getCartList()
    } else {
      //已添加过count+1
      //没有添加过 -直接push
      const item = cartList.value.find(item => item.skuId === good.skuId)
      if (item) {
        item.count += good.count
      } else {
        cartList.value.push(good)
      }
    }
  }
  //删除购物车
  const delCart = async (skuId) => {
    if (isLogin.value) {
      await delCartService([skuId])
      getCartList()
    } else {
      const index = cartList.value.findIndex(item => item.skuId === skuId)
      cartList.value.splice(index, 1)
    }
  }
  //清除购物车
  const clearCart = () => {
    cartList.value = []
  }
  //购物车总数
  const totalCount = computed(() => {
    return cartList.value.reduce((sum, item) => { return sum += item.count }, 0) || 0
  })
  //购物车总价格
  const totalPrice = computed(() => {
    return cartList.value.reduce((sum, item) => { return sum += item.count * item.price }, 0) || 0
  })
  //单选与全选
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find(item => item.skuId === skuId)
    item.selected = selected
  }
  const isAllCheck = computed(() => {
    if (cartList.value.length === 0) return false
    return cartList.value.every(item => item.selected)
  })
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }
  //已选择数量
  const checkedCount = computed(() => {
    return cartList.value.filter(item => item.selected).length
  })
  //已选的价格
  const checkedPrice = computed(() => {
    return cartList.value.filter(item => item.selected).reduce((sum, item) => {
      return sum + item.price * item.count
    }, 0)
  })
  return {
    cartList,
    addCart,
    delCart,
    totalCount,
    totalPrice,
    singleCheck,
    allCheck,
    isAllCheck,
    checkedCount,
    checkedPrice,
    getCartList,
    clearCart
  }
}, { persist: true })