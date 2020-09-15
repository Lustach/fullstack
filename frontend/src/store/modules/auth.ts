// import { Profile, User, UserSubmit } from '../models'
// import { getModule, Module, MutationAction, VuexModule } from 'vuex-module-decorators'
// import store from '../store'
// import axios from 'axios'
//
// @Module({
//   namespaced: true,
//   name: 'users',
//   store,
//   dynamic: true,
// })
// class UserModule extends VuexModule {
//   user!: User
//   profile!: Profile
//   test: any = 'HIIIIII'
//   $API: any
//
//   get username() {
//     return this.test
//   }
//
//   @MutationAction
//   async login({ email, password }: UserSubmit) {
//     // const result = await this.$API.user.login(email, password)
//     const result = await axios.post(`http://localhost:3000/user/login`,
//       { email: email, password: password })
//     console.log(result.data, 'result')
//     return result.data
//   }
//
// }
//
// export default getModule(UserModule)
