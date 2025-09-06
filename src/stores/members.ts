import { Member } from "@/interfaces";
import { defineStore } from "pinia";

interface State {
  memberList: Map<number, Member>;
}

export const useMemberStore = defineStore({
  id: "member",
  state: (): State => {
    return {
      memberList: new Map<number, Member>(),
    };
  },
  getters: {
    getById: (state) => {
      return (id: number): Member => {
        const member = state.memberList.get(id) as Member;
        return member;
      };
    },
  },
  actions: {
    initList(): void {
      this.memberList.set(33456, {
        id: 33456,
        name: "田中太郎",
        email: "bow@example.com",
        points: 35,
        note: "初回入会特典有り。",
      });
      this.memberList.set(47783, {
        id: 47783,
        name: "鈴木次郎",
        email: "mue@example.com",
        points: 53,
      });
    },
    addMember(member: Member): void {
      this.memberList.set(member.id, member);
    },
  },
});
