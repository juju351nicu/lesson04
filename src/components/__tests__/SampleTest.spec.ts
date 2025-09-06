import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import SampleTest from "@/components/SampleTest.vue";

describe("SampleTest.vueのテスト", () => {
  test("初期値での表示内容のテスト", () => {
    const wrapper = mount(SampleTest);
    const actual = wrapper.get("p").text();
    const expected = "6÷3=2";
    expect(actual).toBe(expected);
    // expect("SampleTest").toBe(SampleTest.__name)
  });
});
