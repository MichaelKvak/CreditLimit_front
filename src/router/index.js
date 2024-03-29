import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";
import Create from "../views/Create.vue";
import Calculator from "../views/Calculator.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/create/:id?",
    name: "Create",
    component: Create,
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator,
  },
  { path: "/Login", name: "Login", component: Login },
  { path: "/Signup", name: "Signup", component: Signup },
];

const router = new VueRouter({
  routes,
});

export default router;
