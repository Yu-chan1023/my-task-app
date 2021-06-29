<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Navigation lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar app class="white--text lighten-1--text" color="cyan lighten-1" clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer" color="white"></v-app-bar-nav-icon>
      <v-toolbar-title>MyTaskApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="signOut" class="white--text" text>サインアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    
  </v-app>
</template>
<script>
import firebase from 'firebase/app'
import "firebase/auth"

export default {
  name: 'App',
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
      this.$router.push('/signin')
    }
  }
};
</script>

