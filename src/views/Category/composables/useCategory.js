//封装category分类模块数据业务的相关代码

import { getCategoryDataService } from '@/api/category'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
export function useCategory() {
// 引入路由
const route = useRoute()
  //获取数据
const categoryData = ref({})
const getCategoryData = async () => {
  const res = await getCategoryDataService()
  categoryData.value = res.result.find(item => item.id === route.params.id)
}

//监听路由变化
watch(() => route.params.id, () => {
  getCategoryData()
})



onMounted(() => {
  getCategoryData()
})

return {
  categoryData
}
}