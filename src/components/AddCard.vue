<template>
  <div>
    <span style="color: gray; display: block; margin-bottom: 10px; cursor:pointer;" @click="cardModal=true">+カードを追加</span>
    <div class="modal-form" v-show="cardModal">
      <div class="overlay" v-show="cardModal" @click="cardModal=false"></div>
      <div class="content">
        <h3 class="modal-title">カードの追加</h3>
        <div>
          <label for="title">タイトル</label>
          <input 
            type="text" 
            id="title"
            v-model="title"
          >
        </div>
        <div>
          <label for="priority">優先度</label>
          <select name="" id="priority" v-model="priority">
            <option value="" checked disabled>選択してください</option>
            <option value="高">高</option>
            <option value="中">中</option>
            <option value="低">低</option>
          </select>
        </div>
        <div>
          <label for="inCharge">担当者</label>
          <input 
            type="text" 
            id="inCharge"
            v-model="inCharge"
          >
        </div>
        <div>
          <label for="date">終了期限日</label>
          <input 
            type="date" 
            id="date"
            v-model="date"
          >
        </div>
        <div class="modal-btns">
          <button @click="addCard" style="margin-right: 5px">追加</button>
          <button @click="cardModal=false">キャンセル</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    listIndex: {
      type: Number
    },
    filter: {
      type: Number
    },
  },
  data() {
    return {
      title: '',
      inCharge: '',
      priority: '',
      date: '',
      cardModal: false
    }
  },
  methods: {
    addCard() {
      this.$store.dispatch('addCard', { 
        title: this.title, 
        inCharge: this.inCharge, 
        priority: this.priority, 
        date: this.date,
        listIndex: this.listIndex,
        filter: this.filter,
      })
      this.title = ""
      this.inCharge = ""
      this.priority = ""
      this.date = ""
      this.cardModal = false
    }
  }
};
</script>

<style scoped>
.modal-form {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 9997;
}
.modal-form .modal-title {
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #EEE;
}
.modal-form .overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: gray;
  opacity: 0.5;
  z-index: 9998;
}
.modal-form .content {
  margin-top: 100px;
  width: 400px;
  background-color: white;
  position: relative;
  border-radius: 10px;
  padding: 40px; 
  z-index: 9999;
}
.modal-form .content div {
  margin-bottom: 15px;
}
.modal-form .content label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}
.modal-form .content input{
  border: 1px solid #EEE;
  width: 100%;
  border-radius: 6px;
  padding: 5px 10px;
}
.modal-form .content select{
  border: 1px solid #EEE;
  width: 100%;
  border-radius: 6px;
  padding: 5px 10px;
}
.modal-form .content .modal-btns {
  margin-top: 20px;
}
.modal-form .content .modal-btns button{
  padding: 5px 10px;
  font-size: 14px;
  color: #FFF;
  background: #385F73;
  border-radius: 6px;
}
.modal-form .content .modal-btns button:hover {
  opacity: .7;
}
</style>
