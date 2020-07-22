import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
// const token = process.env.VUE_APP_KEY
//смотреть в экспорт!!
const API = {
  record: {
    getData: () => axios.get(`${BASE_URL}/api/records`)
    // chart: {
    //   getTopArtists: (page?: number, limit?: number) => axios.get(`${BASE_URL}?method=chart.gettopartists&api_key=${token}&format=json`,
    //     { params: { page: page, limit: limit } }),
    //   getTopTracks: (page?: number, limit?: number) =>
    //     axios.get(`${BASE_URL}?method=chart.gettoptracks&api_key=${token}&format=json`),
    // },
  },
  user: {
    login: (email: string, password: string) => axios.post(`${BASE_URL}/user/login`,
      {email: email, password: password })
  }
}

export default {
  install(Vue: any) {
    // console.log(process.env.VUE_APP_KEY)
    Object.defineProperty(Vue.prototype, '$API', { value: API })
  }
}
