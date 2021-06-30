<template>
  <div>
    <v-card width="320">
      <v-app-bar dark color="#385F73">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="removeList">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-app-bar>
      <v-container style="background-color: #EEE;">
        <v-card color="#385F73" dark>
          <v-card-title class="text-h5">Unlimited music now</v-card-title>
          <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
          <v-card-actions><v-btn text>Listen Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-card>
  </div>
</template>
<script>

export default {
  props: {
    title: {
      type: String
    },
    listIndex: {
      type: Number
    },
    filter: {
      type: Number
    }
  },
  data() {
    return {
    }
  },
  methods: {
    removeList() {
      if (confirm("本当に削除しますか？")) {
        this.$store.dispatch('removeList', { filter: this.filter, listIndex: this.listIndex })
      }
    }
  }
};
</script>

<style scoped>
</style>