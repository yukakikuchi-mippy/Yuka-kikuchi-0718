// Vue本体を読み込む（Vueを使うにはこれが必須）
import Vue from 'vue'

// アプリの「一番外側のコンポーネント」を読み込む
// 実際の画面の中身はApp.vueから始まる
import App from './App.vue'

// ページの切り替え（ルーティング）機能を読み込む
import router from './router'

// Vuexで状態管理をするための設定を読み込む
import store from './store'

// UIライブラリ「Vuetify」を読み込む（見た目を整える）
import vuetify from './plugins/vuetify'

// 本番モードではVueが出す「ヒントメッセージ」を非表示にする設定
Vue.config.productionTip = false

// Vueインスタンスを作成して、アプリを起動する
new Vue({
  // ページ切り替え機能（router）を使う
  router,

  // グローバルなデータ管理（Vuex）を使う
  store,

  // デザイン部品のセット（Vuetify）を使う
  vuetify,

  // App.vue を画面に描画する
  render: h => h(App)

// 最終的に、public/index.html の <div id="app"></div> に表示される
}).$mount('#app')



// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import vuetify from './plugins/vuetify'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
