<template>
  <div>
    <v-card width="320" >
      <v-app-bar dark color="#385F73">
        <v-toolbar-title style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 200px" >{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <div style="position: relative;">
          <span style="z-index: 100; position: absolute; top: -15px; left: -15px; width: 25px; height: 25px; line-height: 25px; text-align: center; background: tomato; border-radius: 100%; font-size: 10px; font-weight: bold;">{{ totalCard }}</span>
          <v-icon>mdi-card-bulleted-outline</v-icon>
        </div>
        <v-btn icon @click="removeList">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-app-bar>
      <v-container style="background-color: #EEE;">
        <AddCard :listIndex="listIndex" :filter="filter" />
          <div style="overflow-y: scroll; height: 550px">
          <draggable group="cards" :list="cards" @end="$emit('change')">
            <Card 
              v-for="(card, index) in cards" 
              :key="index" 
              :title="card.title" 
              :inCharge="card.inCharge" 
              :date="card.date"
              :priority="card.priority"
              :cardIndex="index"
              :listIndex="listIndex"
              :filter="filter"
            />
          </draggable>
          </div>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import Card from './Card.vue'
import AddCard from './AddCard.vue'
import draggable from 'vuedraggable'

export default {
  components: {
    Card,
    AddCard,
    draggable,
  },
  props: {
    title: {
      type: String
    },
    cards: {
      type: Array
    },
    listIndex: {
      type: Number
    },
    filter: {
      type: Number
    }
  },
  methods: {
    removeList() {
      if (confirm("本当に削除しますか？")) {
        this.$store.dispatch('removeList', { filter: this.filter, listIndex: this.listIndex })
      }
    },
  },
  computed: {
    totalCard() {
      return this.cards.length
    }
  }
};
</script>

<style scoped>
</style>