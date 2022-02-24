import BaseSpinner from "@/components/UI/BaseSpinner.vue";
import { shallowMount } from "@vue/test-utils";

describe('BaseSpinner behavior', () => {
  it('has sizes of 1rem when "small" prop is passed', () => {
    const wrapper = shallowMount(BaseSpinner, {
      props: {
        small: true,
      },
    });
    /* Currently for some reason I can't check spinner width and height, so I use classes */
    const spinner = wrapper.get('[data-test="spinner"]');
    expect(spinner.classes()).toContain("h-4");
    expect(spinner.classes()).toContain("w-4");
  });
})