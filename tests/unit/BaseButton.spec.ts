import BaseButton from "@/components/UI/BaseButton.vue";
import { shallowMount } from "@vue/test-utils";

describe('BaseButton behavior', () => {
  it('has "outlined" classes when outlined', () => {
    const wrapper = shallowMount(BaseButton, {
      props: {
        variant: "outlined",
      },
    });

    expect(wrapper.classes()).toContain("outlined");
  });

  it('has "outlined" & "disabled" classes when outlined & disabled', () => {
    const wrapper = shallowMount(BaseButton, {
      props: {
        variant: "outlined",
        disabled: true,
      },
    });

    expect(wrapper.classes()).toContain("outlined");
    expect(wrapper.classes()).toContain("disabled");
    expect(wrapper.attributes()).toHaveProperty("disabled");
  });

  it("does not have background if 'text' variant is passed", () => {
    const wrapper = shallowMount(BaseButton, {
      props: {
        variant: "text",
        disabled: true,
      },
    });

    expect(wrapper.classes().toString()).not.toContain("base")
  });
})