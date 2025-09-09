import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import TriggerTest from "@/components/TriggerTest.vue";

describe("TriggerTest.vueのテスト", () => {
  test("初期状態(隠し表示領域)のテスト", () => {
    const wrapper = mount(TriggerTest);
    const actual = wrapper.find(`[data-testid="invisible"]`).exists();
    const expected = false;
    expect(actual).toBe(expected);
  });
  test("表示ボタンをクリックした場合のテスト", async () => {
    const wrapper = mount(TriggerTest);
    await wrapper.get(`[data-testid="showButton"]`).trigger("click");
    const actual = wrapper.find(`[data-testid="invisible"]`).exists();
    const expected = true;
    expect(actual).toBe(expected);
  });
});
