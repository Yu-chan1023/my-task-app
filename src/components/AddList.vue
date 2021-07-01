<template>
  <div style="min-width: 320px;">
    <div style="background-color: #385F73; padding: 10px; border-radius: 6px; color: #FFF;">
      <div
        v-if="showList"
        @click="showListInput"
        style="cursor: pointer;"
      >+カテゴリー追加
      </div>
      <div v-else>
        <input 
          type="text" 
          v-model="title" 
          ref="input" 
          placeholder="カテゴリー追加" 
          style="background-color: #FFF; width: 100%; padding: 5px; margin-bottom: 10px;"
        >
        <button @click="addList" class="add-list" style="margin-right: 5px;">追加</button>
        <button @click="showList = true" class="cancel-list">キャンセル</button>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  props: {
    filter: {
      type: Number
    }
  },
  data() {
    return {
      title: '',
      showList: true
    }
  },
  methods: {
    addList() {
      if ( this.title.length > 0 ) {
        this.$store.dispatch('addList', { title: this.title, filter: this.filter })
        this.showList = true
        this.title = ""
      } else {
        alert('リストタイトルが空です')
      }
    },
    focusListInput() {
      this.$refs.input.focus();
    },
    showListInput() {
      this.showList = false;
      Vue.nextTick(() => {
        this.focusListInput();
      });
    }
  }
};
</script>

<style scoped>
.add-list {
  background-color: transparent;
  border: 2px solid #FFF;
  border-radius: 8px;
  padding: 4px 8px;
}
.add-list:hover {
  opacity: .7;
}
.cancel-list {
  background-color: transparent;
  border: 2px solid #FFF;
  border-radius: 8px;
  padding: 4px 8px;
}
.cancel-list:hover {
  opacity: .7;
}
</style>