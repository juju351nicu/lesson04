import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ShowMemberTest from "@/views/ShowMemberTest.vue";
import OneMember from "@/components/OneMemberTest.vue";

describe("ShowMemberTest.vueのテスト", () => {
  test("合計点数表示のテスト", () => {
    const options = {
        global: {
            stubs :{
                OneMember: true
            }
        }
    }
    const wrapper = mount(ShowMemberTest, options);
    const actualText = wrapper.text();
    const expected = "全会員の保有ポイントの合計: 88";
    expect(actualText).toContain(expected);
  });
  test("Emitメソッドのテスト", async () => {
    const options = {
        global: {
            stubs :{
                OneMember: true
            }
        }
    }
    const wrapper = mount(ShowMemberTest, options);
    const oneMemberComponent = wrapper.findComponent(OneMember);
    await oneMemberComponent.vm.$emit("incrementPoint", 33456);
    const actualText = wrapper.text();
    const expected = "全会員の保有ポイントの合計: 89";
    expect(actualText).toContain(expected);
  });

});
