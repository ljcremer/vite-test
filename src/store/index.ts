/*--------------------------------------------------------------
################################################################
>>> GUIDE: Add your module's 'MODULE' types
################################################################
---------------------------------------------------------------*/
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export interface State {
  mapCenter: { lat: number; lng: number };
  mapZoom: number;
  isLoading: boolean;
}

export const store = createStore<State>({
  state: {
    mapCenter: { lat: 60, lng: 0 },
    mapZoom: 3,
    isLoading: false,
  },
  mutations: {},
  getters: {},
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}

// @ts-ignore
window.state = store.state;
