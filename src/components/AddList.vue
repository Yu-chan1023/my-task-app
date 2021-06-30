<template>
  <div style="min-width: 320px;">
    <div style="background-color: #385F73; padding: 10px; border-radius: 6px; color: #FFF;">
      <div
        v-if="!showListInput"
        @click="showListInput = true"
      >+カテゴリー追加
      </div>
      <div v-else>
        <input type="text" v-model="title" placeholder="カテゴリー追加" style="background-color: #FFF; width: 100%; padding: 5px; margin-bottom: 10px;">
        <button @click="addList" class="add-list" style="margin-right: 5px;">追加</button>
        <button @click="showListInput = false" class="cancel-list">キャンセル</button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    filter: {
      type: Number
    }
  },
  data() {
    return {
      title: '',
      showListInput: false
    }
  },
  methods: {
    addList() {
      this.$store.dispatch('addList', { title: this.title, filter: this.filter })
      this.title = ""
      this.showListInput = false
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