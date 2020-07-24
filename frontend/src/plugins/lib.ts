// @ts-nocheck
// Глобальная регистрация библиотек в корневом компоненте Vue
import {Component, Vue} from 'vue-property-decorator';
import axios from 'axios';
import lodash from 'lodash';

@Component
export default class LibPlugin extends Vue {
  public install() {
    Object.defineProperty(Vue.prototype, '$Axios', { value: axios });
    Object.defineProperty(Vue.prototype, '$_', { value: lodash });
  }
}
