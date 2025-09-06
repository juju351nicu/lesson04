import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import DirectiveStyle from "@/views/DirectiveStyle.vue";
import CLlickEvent from "@/views/CLlickEvent.vue";
import NotFound from "@/views/NotFound.vue";
import DirectiveClass from "@/views/DirectiveClass.vue";
import ShowMemberTest from "@/views/ShowMemberTest.vue";
const routeSetting: RouteRecordRaw[] = [
  {
    path: "/",
    name: "DirectiveStyle",
    component: DirectiveStyle,
  },
  {
    path: "/DirectiveClass",
    name: "DirectiveClass",
    component: DirectiveClass,
  },
  {
    path: "/cLlickEvent",
    name: "CLlickEvent",
    component: CLlickEvent,
  },
  {
    path: "/showMemberTest",
    name: "ShowMemberTest",
    component: ShowMemberTest,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSetting,
});
export default router;
