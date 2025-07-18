// Vue 本体を読み込む
import Vue from 'vue'

// Vue Router（画面切り替え用ライブラリ）を読み込む
import VueRouter from 'vue-router'

// 各ページ（ビュー）を読み込む
import HomeView from '../views/HomeView.vue'             // ホームページ
import PurchaseView from '../views/PurchaseView.vue'     // 購入ページ

// Vue に VueRouter を使うように登録（これでルーティング機能が使えるようになる）
Vue.use(VueRouter)

// ページごとのルート設定（どのURLでどのページを表示するか）
const routes = [
  {
    path: '/',                 // URL が '/' のとき
    name: 'home',             // このルートの名前（オプション）
    component: HomeView       // 表示するコンポーネント（ホームページ）
  },
  {
    path: '/about',           // URL が '/about' のとき
    name: 'about',            // このルートの名前

    // 「必要なときにだけ AboutView を読み込む（遅延読み込み）」設定
    // ファイルサイズを小さくし、ページの表示を速くする効果がある
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
  {
    path: '/purchase',        // URL が '/purchase' のとき
    name: 'purchase',         // このルートの名前
    component: PurchaseView   // 表示するコンポーネント（購入ページ）
  }
]

// Vue Router のインスタンスを作成
const router = new VueRouter({
  mode: 'history',           // URLに「#」を使わず、普通のURL形式にする
  base: process.env.BASE_URL, // プロジェクトの基本パス（通常は自動設定される）
  routes                     // 上で作成したルート一覧を設定
})

// このルーターを他のファイルから使えるようにエクスポート
export default router
