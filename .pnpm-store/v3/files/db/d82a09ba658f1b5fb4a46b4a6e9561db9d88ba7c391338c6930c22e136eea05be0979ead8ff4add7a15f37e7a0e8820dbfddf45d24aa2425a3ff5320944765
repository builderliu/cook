import { defineNuxtModule, createResolver, addPlugin, addImports } from '@nuxt/kit';
import { defu } from 'defu';
import { existsSync } from 'node:fs';

const DEVTOOLS_UI_ROUTE = "/__nuxt-gtm";
const DEVTOOLS_UI_LOCAL_PORT = 3300;
function setupDevToolsUI(nuxt, resolver) {
  const clientPath = resolver.resolve("./client");
  const isProductionBuild = existsSync(clientPath);
  if (isProductionBuild) {
    nuxt.hook("vite:serverCreated", async (server) => {
      const sirv = await import('sirv').then((r) => r.default || r);
      server.middlewares.use(
        DEVTOOLS_UI_ROUTE,
        sirv(clientPath, { dev: true, single: true })
      );
    });
  } else {
    nuxt.hook("vite:extendConfig", (config) => {
      config.server = config.server || {};
      config.server.proxy = config.server.proxy || {};
      config.server.proxy[DEVTOOLS_UI_ROUTE] = {
        target: "http://localhost:" + DEVTOOLS_UI_LOCAL_PORT + DEVTOOLS_UI_ROUTE,
        changeOrigin: true,
        followRedirects: true,
        rewrite: (path) => path.replace(DEVTOOLS_UI_ROUTE, "")
      };
    });
  }
  nuxt.hook("devtools:customTabs", (tabs) => {
    tabs.push({
      // unique identifier
      name: "nuxt-gtm",
      // title to display in the tab
      title: "Nuxt GTM",
      // any icon from Iconify, or a URL to an image
      icon: "carbon:text-link-analysis",
      // iframe view
      view: {
        type: "iframe",
        src: DEVTOOLS_UI_ROUTE
      }
    });
  });
}

const module = defineNuxtModule({
  meta: {
    name: "@zadigetvoltaire/nuxt-gtm",
    configKey: "gtm",
    compatibility: {
      nuxt: "^3.0.0"
    }
  },
  // @ts-ignore
  defaults: {
    devtools: true
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    const moduleOptions = defu(nuxt.options.runtimeConfig.public.gtm, options);
    nuxt.options.runtimeConfig.public.gtm = moduleOptions;
    addPlugin(resolver.resolve("./runtime/plugin"));
    addImports({
      name: "useGtm",
      as: "useGtm",
      from: "@gtm-support/vue-gtm"
    });
    if (options.devtools) {
      setupDevToolsUI(nuxt, resolver);
    }
  }
});

export { module as default };
