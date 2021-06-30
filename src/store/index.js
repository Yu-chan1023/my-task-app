import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const taskProjectsData = localStorage.getItem("task-projects")
const labelLists = localStorage.getItem("label-lists")

const store = new Vuex.Store({
  state: {
    projects: taskProjectsData ? JSON.parse(taskProjectsData) : [
      {
        id: 1,
        lists: [
          {
            id: 1,
            title: "テスト4",
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
          },
          { 
            id: 4,
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
    labels: labelLists ? JSON.parse(labelLists) : [
      {
        id: 1,
        name: 'オウンドメディア'
      }
    ],
    filter: 1
  },
  mutations: {
    addList(state, payload) {
      state.projects[payload.filter - 1].lists.push({
        id: state.projects[payload.filter - 1].length + 1,
        title: payload.title,
        cards: []
      })
    },
    removeList(state, payload) {
      state.projects[payload.filter - 1].lists.splice(payload.listIndex, 1)
    },
    addProject(state, payload) {
      state.projects.push({
        id: state.projects.length + 1,
        lists: payload.lists
      })
      state.labels.push({
        id: state.labels.length + 1,
        name: payload.name
      })
    },
    changeFilter (state, {filter}) {
      state.filter = filter
    },
  },
  actions: {
    addList({commit}, payload) {
      commit('addList', payload)
    },
    removeList({commit}, payload) {
      commit('removeList', payload)
    },
    addProject({commit}, payload) {
      commit('addProject', payload)
    }
  },
  getters: {
    filteredLabel(state) {
      return state.projects.filter(function(project) {
        return project.id === state.filter
      })
    }
  }
})

export default store

store.subscribe((mutation, state) => {
  localStorage.setItem('task-projects', JSON.stringify(state.projects))
  localStorage.setItem('label-lists', JSON.stringify(state.labels))
})
