import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import OneMemberTest from "@/components/OneMemberTest.vue";

describe("OneMemberTest.vueのテスト", () => {
  test("備考データがある場合のPropsのテスト", () => {
    const propsData = {
      id: 22458,
      name: "中野次郎",
      email: "mue@wow.com",
      points: 200,
      note: "素晴らしい",
    };
    const wrapper = mount(OneMemberTest, { props: propsData });
    const actualText = wrapper.text();
    expect(actualText).toContain(String(propsData.id));
    expect(actualText).toContain(propsData.name);
    expect(actualText).toContain(propsData.email);
    expect(actualText).toContain(String(propsData.points));
    expect(actualText).toContain(propsData.note);
  });
  test("備考データがない場合のPropsのテスト", () => {
    const propsData = {
      id: 55148,
      name: "江口四郎",
      email: "egu@chi.com",
      points: 300,
    };
    const wrapper = mount(OneMemberTest, { props: propsData });
    const actualText = wrapper.text();
    expect(actualText).toContain(String(propsData.id));
    expect(actualText).toContain(propsData.name);
    expect(actualText).toContain(propsData.email);
    expect(actualText).toContain(String(propsData.points));
    expect(actualText).toContain("--");
  });
  test("[ポイント加算]ボタンクリックのテスト(Emitのテスト)", async () => {
    const propsData = {
      id: 22458,
      name: "中野次郎",
      email: "mue@wow.com",
      points: 200,
      note: "素晴らしい",
    };
    const wrapper = mount(OneMemberTest, { props: propsData });
    await wrapper.get("button").trigger("click");
    const incrementPointEvent = wrapper.emitted("incrementPoint");
    expect(incrementPointEvent).toHaveLength(1);
    const expetedIncrementPointEvent = [[propsData.id]];
    expect(incrementPointEvent).toEqual(expetedIncrementPointEvent);
  });
});
