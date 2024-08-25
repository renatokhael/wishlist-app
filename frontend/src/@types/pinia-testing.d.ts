/// <reference types="@pinia/testing" />

declare module "@pinia/testing" {
  import { Pinia } from "pinia";
  import { ComponentPublicInstance } from "vue";
  import { MountingOptions } from "@vue/test-utils";

  export function createTestingPinia(options?: any): Pinia;
  export function mockComponent(
    component: ComponentPublicInstance,
    options?: MountingOptions<any>
  ): void;
}
