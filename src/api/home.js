import httpInstance from "@/utils/request"

export const getBannerService = (params={}) =>{
  const {distributionSite='1'}=params
  return httpInstance.get('/home/banner',{params:{distributionSite}})
}

export const getNewService=()=>httpInstance.get('/home/new')
export const getHotService=()=>httpInstance.get('/home/hot')
export const getGoodsService=()=>httpInstance.get('/home/goods')