import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const taskProjectsData = localStorage.getItem("task-projects")
const store =  new Vuex.Store({
  state: {
    projects: taskProjectsData ? JSON.parse(taskProjectsData) : [
      {
        id: 1,
        lists: [
          {
            id: 1,
            title: "テスト1",
            cards: [
              { id: 1, title: "テスト1", description: "テスト1", priority: "高", inCharge:  "南"},
              { id: 2, title: "テスト2", description: "テスト2", priority: "中", inCharge:  "山本"},
              { id: 3, title: "テスト3", description: "テスト3", priority: "高", inCharge:  "松浦"},
              { id: 4, title: "テスト4", description: "テスト4", priority: "小", inCharge:  "酒井"},
            ]
          },
          { 
            id: 2,
            title: "テスト2",
            cards: [
              { id: 5, title: "テスト5", description: "テスト5", priority: "高", inCharge:  "南"},
              { id: 6, title: "テスト6", description: "テスト6", priority: "中", inCharge:  "山本"},
              { id: 7, title: "テスト7", description: "テスト7", priority: "高", inCharge:  "松浦"},
              { id: 8, title: "テスト8", description: "テスト8", priority: "小", inCharge:  "酒井"},
            ]
          },
          { 
            id: 3,
            title: "テスト3",
            cards: [
              { id: 9, title: "テスト9", description: "テスト9", priority: "高", inCharge:  "南"},
              { id: 10, title: "テスト10", description: "テスト10", priority: "中", inCharge:  "山本"},
              { id: 11, title: "テスト11", description: "テスト11", priority: "高", inCharge:  "松浦"},
              { id: 12, title: "テスト12", description: "テスト12", priority: "小", inCharge:  "酒井"},
            ]
          }
        ]
      },
      {
        id: 2,
        lists: [
          { 
            id: 1,
            title: "テスト1",
            cards: [
              { id: 1, title: "テスト1", description: "テスト1", priority: "高", inCharge:  "南"},
              { id: 2, title: "テスト2", description: "テスト2", priority: "中", inCharge:  "山本"},
              { id: 3, title: "テスト3", description: "テスト3", priority: "高", inCharge:  "松浦"},
              { id: 4, title: "テスト4", description: "テスト4", priority: "小", inCharge:  "酒井"},
            ]
          },
          { 
            id: 2,
            title: "テスト2",
            cards: [
              { id: 5, title: "テスト5", description: "テスト5", priority: "高", inCharge:  "南"},
              { id: 6, title: "テスト6", description: "テスト6", priority: "中", inCharge:  "山本"},
              { id: 7, title: "テスト7", description: "テスト7", priority: "高", inCharge:  "松浦"},
              { id: 8, title: "テスト8", description: "テスト8", priority: "小", inCharge:  "酒井"},
            ]
          },
          { 
            id: 3,
            title: "テスト3",
            cards: [
              { id: 9, title: "テスト9", description: "テスト9", priority: "高", inCharge:  "南"},
              { id: 10, title: "テスト10", description: "テスト10", priority: "中", inCharge:  "山本"},
              { id: 11, title: "テスト11", description: "テスト11", priority: "高", inCharge:  "松浦"},
              { id: 12, title: "テスト12", description: "テスト12", priority: "小", inCharge:  "酒井"},
            ]
          }
        ]
      }
    ],
    labels: [
      {
        id: 1,
        name: "オウンドメディア" 
      },
      {
        id: 2,
        name: "コーポレートサイト" 
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})

export default store

store.subscribe((mutation, state) => {
  localStorage.setItem('task-projects', JSON.stringify(state.projects))
})
