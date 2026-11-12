import { defineNuxtPlugin, useRouter } from "nuxt/app";
import { createGtm } from "@gtm-support/vue-gtm";
export default defineNuxtPlugin((nuxt) => {
  if (process.client) {
    const options = nuxt.$config.public.gtm;
    const router = useRouter();
    const pluginOptions = {
      ...options,
      vueRouter: options.enableRouterSync && router ? router : void 0
    };
    nuxt.vueApp.use(createGtm(pluginOptions));
  }
});
