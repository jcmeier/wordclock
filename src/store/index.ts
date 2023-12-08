import { createStore, MutationTree } from 'vuex'

export class State {
  public currentHours : number =  new Date().getHours();
  public currentMinutes : number = new Date().getMinutes();
  public intervalId = -1;
}


const mutations = <MutationTree<State>> {
  setHours(state: State, hours: number) {
    state.currentHours = hours;
  },
  setMinutes(state: State, minutes: number) {
    state.currentMinutes = minutes;
  },
  setIntervalId(state: State, id : number) {
    state.intervalId = id;
  }
};


export default createStore({
  state: new State(),
  
  getters: {
  },
  
  mutations: mutations,
  
  actions: {
  },
  
  modules: {
  }
})
