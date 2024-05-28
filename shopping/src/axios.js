import axios from 'axios'

export default {

  install: function (vue) {
    var auth = vue.prototype.$auth

    var obj = axios.create({

      baseURL: 'http://1.94.14.36/api/'

    })
    obj.interceptors.request.use(function (conf) {

      conf.headers.Authorization = auth.getAuthorization()

      return conf

    })
    vue.prototype.$http = obj

  }

}