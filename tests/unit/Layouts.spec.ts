import App from "@/App.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import BaseHeader from "@/components/UI/BaseHeader.vue";
import BaseFooter from "@/components/UI/BaseFooter.vue";
import { mount } from "@vue/test-utils";
import { useRoute } from "vue-router";

jest.mock('vue-router', () => ({
  useRoute: jest.fn(),
}));
  
test('has components inside', ()  => {

  // @ts-ignore
  useRoute.mockImplementationOnce(() => ({
    meta: {
      layout: "AppLayoutDefault"
    },
  }));

  const wrapper = mount(App, {
    global: {
      stubs: ['router-link', 'router-view'],
    },
  });

  expect(wrapper.findComponent(AppLayout).exists()).toBe(true);
  expect(wrapper.findComponent(BaseHeader).exists()).toBe(true);
  expect(wrapper.findComponent(BaseFooter).exists()).toBe(true);
});