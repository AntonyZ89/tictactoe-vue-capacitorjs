import layout from "@/layouts";

type Layout = keyof typeof layout;

declare module "vue-router" {
  interface RouteMeta {
    layout?: Layout;
  }
}

export {};
