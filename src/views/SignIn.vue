<template>
  <div class="register">
    <v-app-bar app class="white--text" color="cyan lighten-1">
      <v-toolbar-title>MyTaskApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="mr-3" text><router-link to="/register" class="white--text">ログイン</router-link></v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-card width="500px" class="mt-12 mx-auto">
      <v-card-title><h1 class="display-1">サインイン</h1></v-card-title>
      <v-card-text>
        <v-form @submit.prevent="signIn">
          <v-text-field 
            prepend-icon="mdi-email" 
            type="email" 
            label="メールアドレス" 
            v-model="email"
          />
          <v-text-field 
            label="パスワード" 
            prepend-icon="mdi-lock" 
            v-bind:append-icon="showPass ? 'mdi-eye' :'mdi-eye-off'" 
            v-bind:type="showPass ? 'text' : 'password'"
            @click:append="showPass = !showPass"
            v-model="password"
          />
          <v-card-actions><v-btn color="cyan lighten-1" class="white--text" type="submit">ログイン</v-btn></v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      showPass: false,
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(response => {
        console.log(response)
        this.$router.push('/')
      })
      .catch(e => {
        console.log(e);
      });
    }
  }
};
</script>

<style scoped>
/* .register {
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>
