// import { Action, Module, VuexModule } from 'vuex-module-decorators'
// import Vue from 'vue'
// const localVue = new Vue()
//
// interface JwtAuthInterface {
//   login: string;
//   password: string;
// }
//
// @Module({ namespaced: true })
// export default class Auth extends VuexModule {
//   user: any = {
//     token: '',
//     tokenAdmin: ''
//   }
// 	$API: any
//   get USER(): object {
//     return this.user
//   }
//
//   @Action
//   public async login(user: JwtAuthInterface): Promise<any> {
// 		const result = await this.$API.user.login(this.user.email, this.user.password)
// 		console.log(result)
//     // e.preventDefault()
//     // if (this.user.password.length > 5) {
//     //   try {
//     //     const result = await localVue.$Axios.user.login(this.user.email, this.user.password)
//     //     // const isAdmin = result.data.user.isAdmin
//     //     console.log(result)
//     //     localStorage.setItem('user', JSON.stringify(result.data.user))
//     //     localStorage.setItem('jwt', result.data.token)
//     //     if (localStorage.getItem('jwt') != null) {
//     //       this.$emit('loggedIn')
//     //       if (this.$route.params.nextUrl != null) {
//     //         this.$router.push(this.$route.params.nextUrl)
//     //       }
//     //       else {
//     //         this.$router.push('test')
//     //       }
//     //       // }
//     //     }
//     //   } catch (err) {
//     //     console.error(err)
//     //   }
//     // }
//   }
// }
// // const state = {
// // 	/*
// // 	*user {Object} */
// // 	user: {
// // 		email: '',
// // 		userName: '',
// // 	}
// //
// // }
// // const getters = {
// // 	getUserInfo() {
// // 		return state.user
// // 	}
// // }
// // const mutations = {
// // 	SET_TODO : (state,payload) => {
// // 		state.todos = payload
// // 	},
// // 	setUser(state,arg){
// // 		state.user = arg
// // 	},
// // }
// // const actions = {
// // 	// SAVE_TODO : async (context,payload) => {
// // 	// 	let { data } = await axios.post('http://yourwebsite.com/api/tododo')
// // 	// 	context.commit('ADD_TODO',payload)
// // 	// }
// // }
// // export default {
// // 	state, getters, mutations, actions
// // }
