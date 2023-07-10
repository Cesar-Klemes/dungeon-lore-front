import { NuxtAppOptions, Plugin } from "@nuxt/types";
import { AxiosInstance, AxiosRequestConfig } from "axios";

interface NuxtAxiosInstance extends AxiosInstance {
  $get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

declare module "vue/types/vue" {
  interface Vue {
    $rpgDndApi(endpoint: string): Promise<any>;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppVue {
    $rpgDndApi(endpoint: string): Promise<any>;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $rpgDndApi(endpoint: string): Promise<any>;
  }
}

const rpgDndApi: Plugin = (context: NuxtAppOptions, inject: (name: string, value: any) => void) => {
  inject("rpgDndApi", async (endpoint: string) => {
    const baseUrl = "https://www.dnd5eapi.co/api/";
    const response = await (context.$axios as NuxtAxiosInstance).$get(`${baseUrl}${endpoint}`);
    return response.results;
  });
};

export default rpgDndApi;
