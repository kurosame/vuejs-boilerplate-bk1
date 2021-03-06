import Parent from '@/pages/Parent.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  actions: {
    addCount: jest.fn(),
    addAxiosCount: jest.fn(),
    addAsyncAwaitCount: jest.fn()
  },
  getters: {
    count: () => 1,
    axiosCount: () => 2,
    asyncAwaitCount: () => 3
  }
})

const wrapper = shallowMount(Parent, {
  localVue,
  store
})

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
