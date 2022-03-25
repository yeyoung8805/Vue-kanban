import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

//상태 'Auth'와 상태 'Board' 의 Vuex state를 한곳에서 관리할 수 있도록 정의
const state = {
    auth: { //상태 Auth
        token: null, //token을 null로 초기화
        userId: null //userId를 null 로 초기화
    },
    board: { //상태 board
        lists: [] //상태 TaskList는 빈 배열로 초기화
    },
    dragging: { //drag n drop 된 태스크를 처리하기 위한 상태를 저장
        target: null, //drag n drop 대상 태스크 ID
        from: null, //원래 속했던 태스크 목록 ID
        to: null //drop 된 태스크 목록 ID
    }
}

export default new Vuex.Store({
    state, //앞서 정의한  state를  'state' 옵션으로  지정
    getters,
    actions,
    mutations,
    strict: process.env.NODE_ENV !=='production'
})