import page from './page'
import chat from './chat'

export default {
    install: function (Vue) {
        Vue.component('my-page', page)
        Vue.component('chat', chat)
    }
}
