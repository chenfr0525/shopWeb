//封装banner轮播图数据业务的相关代码
import { getBannerService } from '@/api/home'
import { onMounted,ref } from "vue"

export function useBanner() {
  const bannerList = ref([])
const getBannerList = async () => {
  const res = await getBannerService({ distributionSite: '2' })
  bannerList.value = res.result
}
onMounted(() => {
  getBannerList()
})
return { bannerList }
}