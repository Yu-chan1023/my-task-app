<template>
  <div class="register">
    <v-app-bar app class="white--text" color="cyan lighten-1">
      <v-toolbar-title>MyTaskApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="mr-3" text><router-link to="/signin" class="white--text">サインイン</router-link></v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-card width="500px" class="mt-12 mx-auto">
      <v-card-title><h1 class="display-1">ログイン</h1></v-card-title>
      <v-card-text>
        <v-form @submit.prevent="registerUser">
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
          <v-card-actions><v-btn type="submit" color="cyan lighten-1" class="white--text">ログイン</v-btn></v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth"

export default {
  data() {
    return {
      showPass: false,
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser() {
      console.log(this.email, this.password)
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e);
      });
    },
    signOut() {
      firebase.auth().signOut();
      this.$router.push('/signin')
    }
  }
};
</script>

<style scoped>
</style>
