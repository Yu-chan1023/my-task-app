<template>
  <div>
    <div class="add-label">
      <span v-if="showProject" @click="showProject=false">+プロジェクトを追加</span>
      <div class="add-label-box" v-else>
        <input 
          type="text"
          v-model="name"
          placeholder="プロジェクトを追加"
        >
        <button @click="addProject">追加</button>
        <button @click="showProject=true">キャンセル</button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      name: '',
      lists: [
        {
          id: 1,
          title: "To-Do",
          cards: []
        },
        { 
          id: 2,
          title: "進行中",
          cards: []
        },
        { 
          id: 3,
          title: "レビュー",
          cards: []
        },
        { 
          id: 4,
          title: "完了",
          cards: []
        }
      ],
      showProject: true
    }
  },
  methods: {
    addProject() {
      this.$store.dispatch('addProject', { name: this.name, lists: this.lists })
      this.showProject = true
    },

  }
};
</script>

<style scoped>
.add-label {
  padding: 10px;
}
.add-label span{
  color: gray;
  cursor: pointer;
}
.add-label-box input {
  display: block;
  width: 100%;
  border: 1px solid #EEE;
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 14px;
  margin-bottom: 5px;
}
.add-label-box button {
  background-color: #EEE;
  font-size: 14px;
  border-radius: 6px;
  padding: 5px 10px;
  margin-right: 5px;
}
.add-label-box button:hover {
  opacity: .5;
}
</style>