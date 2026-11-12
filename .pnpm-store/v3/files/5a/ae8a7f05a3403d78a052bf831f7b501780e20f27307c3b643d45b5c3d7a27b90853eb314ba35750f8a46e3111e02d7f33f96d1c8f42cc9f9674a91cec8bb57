import * as _nuxt_schema from '@nuxt/schema';
import { VueGtmUseOptions } from '@gtm-support/vue-gtm';

interface ModuleOptions extends Omit<VueGtmUseOptions, 'vueRouter'> {
    enableRouterSync?: boolean;
    /**
     * Enable Nuxt Devtools integration
     *
     * @default true
     */
    devtools?: boolean;
}
declare module '@nuxt/schema' {
    interface PublicRuntimeConfig {
        gtm: ModuleOptions;
    }
    interface NuxtConfig {
        gtm?: ModuleOptions;
    }
    interface NuxtOptions {
        gtm?: ModuleOptions;
    }
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { ModuleOptions, _default as default };
