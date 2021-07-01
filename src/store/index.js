import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// localStorage.clear()
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
            title: "テスト1",
            cards: [
              { title: "テスト1", date: "2021-7-10", priority: "高", inCharge:  "南"},
              { title: "テスト2", date: "2021-7-10", priority: "中", inCharge:  "山本"},
              { title: "テスト3", date: "2021-7-10", priority: "高", inCharge:  "松浦"},
              { title: "テスト4", date: "2021-7-10", priority: "低", inCharge:  "酒井"},
            ]
          },
          { 
            id: 2,
            title: "テスト2",
            cards: [
              { title: "テスト5", date: "2021-7-10", priority: "高", inCharge:  "南"},
              { title: "テスト6", date: "2021-7-10", priority: "中", inCharge:  "山本"},
              { title: "テスト7", date: "2021-7-10", priority: "高", inCharge:  "松浦"},
              { title: "テスト8", date: "2021-7-10", priority: "低", inCharge:  "酒井"},
            ]
          },
          { 
            id: 3,
            title: "テスト3",
            cards: [
              { title: "テスト9", date: "2021-7-10", priority: "高", inCharge:  "南"},
              { title: "テスト10", date: "2021-7-20", priority: "中", inCharge:  "山本"},
              { title: "テスト11", date: "2021-7-20", priority: "高", inCharge:  "松浦"},
              { title: "テスト12", date: "2021-7-20", priority: "低", inCharge:  "酒井"},
            ]
          },
          { 
            id: 4,
            title: "テスト4",
            cards: [
              { title: "テスト13", date: "2021-7-20", priority: "高", inCharge:  "南"},
              { title: "テスト14", date: "2021-7-20", priority: "中", inCharge:  "山本"},
              { title: "テスト15", date: "2021-7-20", priority: "高", inCharge:  "松浦"},
              { title: "テスト16", date: "2021-7-20", priority: "低", inCharge:  "酒井"},
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
    addCard(state, payload) {
      state.projects[payload.filter - 1].lists[payload.listIndex].cards.push({
        title: payload.title,
        priority: payload.priority,
        inCharge: payload.inCharge,
        date: payload.date
      })
    },
    removeCard(state, payload) {
      state.projects[payload.filter - 1].lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
    changeFilter (state, {filter}) {
      state.filter = filter
    },
    updateList(state, payload) {
      state.projects = payload.projects
    }
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
    },
    addCard({commit}, payload) {
      commit('addCard', payload)
    },
    removeCard({commit}, payload) {
      commit('removeCard', payload)
    },
    updateList({commit}, payload) {
      commit('updateList', payload)
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
