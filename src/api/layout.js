import httpInstance from '@/utils/request'
export const getCategoryService=()=>httpInstance.get('/home/category/head')