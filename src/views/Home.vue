<template>
  <div>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              Projects
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav class="mt-5">
          <v-list-item v-for="(label, index) in labels" :key="index" class="project-lists">
            <v-list-item-content>
              <label :for="'project-' + index" class="project-label">{{ label.name }}</label>
              <input type="radio" :id="'project-' + index" class="project-radio" :checked="label.id === filter" v-on:change="changeFilter(label.id)">
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
      <add-label/>
    </v-navigation-drawer>
    <v-app-bar app class="white--text lighten-1--text" color="cyan lighten-1" clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer" color="white"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ projectName.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="signOut" class="white--text" text>サインアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <div class="px-5 py-5">
      <div class="lists-container" v-for="p in project" :key="p.id">
        <list 
          class="mr-5" 
          v-for="(list, index) in p.lists" 
          :key="list.id" 
          :title="list.title" 
          :listIndex="index"
          :filter="filter"
        />
        <add-list :filter="filter"/>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import "firebase/auth"
import AddList from '../components/AddList.vue'
import List from '../components/List.vue'
import AddLabel from '../components/AddLabel.vue'

export default {
  name: 'App',
  data() {
    return {
      drawer: false
    }
  },
  components: {
    AddList,
    List,
    AddLabel
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
      this.$router.push('/signin')
    },
    changeFilter(labelId) {
      this.$store.commit('changeFilter', {
        filter: labelId
      })[0]
    },
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
    project() {
      return this.$store.getters.filteredLabel
    },
    labels() {
      return this.$store.state.labels
    },
    filter() {
      return this.$store.state.filter
    },
    projectName() {
      return this.labels.filter(label => {
        return label.id === this.filter
      })[0]
    }
  },
};
</script>

<style scoped>
.lists-container {
  display: flex;
}
.project-label {
  font-size: 14px;
  color: #616161;
  font-weight: bold;
}
.project-radio {
  display: none;
}
.project-lists:hover {
  background-color: #EEE;
}
</style>