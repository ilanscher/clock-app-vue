import { createRouter, createWebHistory } from "vue-router";
import Create from "../components/AddIdentity.vue";
import Edit from "../components/EditIdentity.vue";
import Index from "../components/IdentityList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Create",
      path: "/",
      component: Create,
    },
    {
      name: "Edit",
      path: "/edit/:id",
      component: Edit,
    },
    {
      name: "Index",
      path: "/index",
      component: Index,
    },
  ],
});

export default router;
