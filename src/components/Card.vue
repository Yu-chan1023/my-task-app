<template>
  <div>
    <v-card  class="mb-3" style="cursor: grab;">
      <v-card-title>
        <div class="text-h6" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 220px">{{ title }}</div>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{on}">
          <v-btn icon v-on="on"><v-icon color="">mdi-dialpad</v-icon></v-btn>
          </template>
          <v-list>
            <v-list-item class="card-pulldown">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon icon>mdi-pencil</v-icon>
                  編集
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="card-pulldown" @click="removeCard">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon>mdi-delete</v-icon>
                  削除
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>
      <v-card-text>
        <p class="priority" :style="{ backgroundColor: priorityColor }">{{ priority }}</p>
        <div style="display: flex;">
          <p class="" style="margin: 0; margin-right: 20px">{{ inCharge }}</p>
          <p class="" style="margin: 0;">{{ dateFormat }}</p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String
    },
    inCharge: {
      type: String
    },
    priority: {
      type: String
    },
    date: {
      type: String
    },
    cardIndex: {
      type: Number
    },
    listIndex: {
      type: Number
    },
    filter: {
      type: Number
    }
  },
  methods: {
    removeCard() {
      if(confirm("本当にこのカードを削除しますか？")) {
        this.$store.dispatch('removeCard', { listIndex: this.listIndex, cardIndex: this.cardIndex, filter: this.filter })
      }
    }
  },
  computed: {
    priorityColor() {
      if (this.priority === '高') {
        return 'red'
      } else if (this.priority === '中') {
        return 'orange'
      } else {
        return 'limegreen'
      }
    },
    dateFormat() {
      const target = /-/g; 
      return this.date.replace(target, '/')
    }
  }
};
</script>

<style scoped>
.priority {
  margin: 0;
  margin-bottom: 5px; 
  display: inline-block; 
  color: #FFF; 
  font-weight: bold; 
  padding: 0px 10px;
  border-radius: 12px;
}
.card-pulldown:hover {
  background: #EEE;
}
</style>
