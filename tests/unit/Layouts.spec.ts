import App from "@/App.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import BaseHeader from "@/components/UI/BaseHeader.vue";
import BaseFooter from "@/components/UI/BaseFooter.vue";
import { mount } from "@vue/test-utils";
import { useRoute, useRouter } from "vue-router";
import { createStore } from "vuex";
import { key } from "@/store";

jest.mock('vue-router', () => ({
  useRoute: jest.fn(),
  useRouter: jest.fn(() => ({
    push: () => { }
  }))
}));

test('has components inside', () => {

  // @ts-ignore
  useRoute.mockImplementationOnce(() => ({
    meta: {
      layout: "AppLayoutDefault"
    },
  }));

  const push = jest.fn();
  // @ts-ignore
  useRouter.mockImplementationOnce(() => ({ push }));

  const store = createStore({
    getters: {
      isLoggedIn() {
        return true;
      }
    }
  });

  const wrapper = mount(App, {
    global: {
      stubs: ['router-link', 'router-view', 'base-button'],
      provide: {
        [key as symbol]: store,
      }
    },
  });

  expect(wrapper.findComponent(AppLayout).exists()).toBe(true);
  expect(wrapper.findComponent(BaseHeader).exists()).toBe(true);
  expect(wrapper.findComponent(BaseFooter).exists()).toBe(true);
});