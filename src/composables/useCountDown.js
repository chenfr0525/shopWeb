//封装倒计时逻辑函数
import { computed, ref} from 'vue'
import dayjs from 'dayjs'
export const useCountDown = () => {
  //1.定义变量
  let timer=null
  const time=ref(0)
  //格式化时间为xx分xx秒
  const formatTime=computed(()=>{
    return dayjs.unix(time.value).format('mm分ss秒')
  })
  //2.开启倒计时函数
  const start = (currentTime) => {
    time.value = currentTime
    timer=setInterval(() => {
      if (time.value > 0) {
        time.value--
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }

  return {
    start,
    formatTime
  }
}