import { getCategoryService } from '@/api/layout'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
  //分类列表
  const categoryList = ref([])
  const getCategory = async () => {
    const res = await getCategoryService()
    categoryList.value = res.result
  }
  return { 
    categoryList,
     getCategory 
    }
})
