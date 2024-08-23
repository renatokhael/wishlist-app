/// <reference types="@pinia/testing" />

// Foi necessário criar a tipagem do @pinia/testing
// para que o typescript consiga compilar o código
// e os testes

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
