/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import JSAssetPreview from "@/components/JSAssetPreview";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "JSAssetPreview",
      component: JSAssetPreview
    }
  ]
});
