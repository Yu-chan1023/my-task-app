# アプリ概要
Vue.jsとFirebaseを利用したタスク管理アプリです。 <br>
VueRouterを使用してSPAを構築。 <br>
Vuexの学習のため、データベースは使用せずlocalStorageを使用してデータ管理をしています。 <br>
フロントはVuetifyで構築しています。 <br>

<br>

# URL

https://vue-task-app-6265b.firebaseapp.com/

## テストユーザー
> メールアドレス: aaa@aaa.com <br>
> パスワード: aaaaaa <br>

<br>

# 言語
- Node.js v16.1.0 <br>
- Vue.js vue@2.6.11 <br>
- Firebase 9.14.0 <br>
- Vuetify <br>

<br>

# 搭載機能
- ユーザー登録ページ
  - 新規ユーザー登録
  - メール/パスワードのバリデーション
  - アクセス制限（ユーザー登録していない場合のページアクセスの制限）
- サインインページ
  - 登録済みユーザーでのサインイン
  - メール/パスワードのバリデーション
  - アクセス制限（サインインしていない場合のページアクセスの制限）
- メインページ
  - サインアウト
  - プロジェクト
    - 新規プロジェクトの追加
  - リスト
    - 新規リストの追加
    - リスト削除
    - リスト内のカード枚数表示
  - カード
    - 新規カードの追加
    - カード削除
    - 優先度色分け 
    - カードのドラッグ＆ドロップ
