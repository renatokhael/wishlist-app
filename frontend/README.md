# Wishlist Funcionalidade

No e-commerce o cliente pode realizar a busca de produtos, ou pode acessar a tela de detalhes do produto.
Em ambas as telas ele pode selecionar os produtos de sua preferência e armazená-los na sua Wishlist. A qualquer momento o cliente pode visualizar sua Wishlist completa, com todos os produtos que ele selecionou em uma única tela.

# O Projeto

O projeto consiste em duas telas:

- Uma página de listagem de produtos, onde o cliente poderá adicionar/remover os produtos na wishlist;
- Outra página onde o cliente poderá listar os produtos que estão na wishlist e remover se desejar.

## Requisitos

- [Node](https://nodejs.org/dist/v20.17.0/node-v20.17.0-x64.msi) (20+)
- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Tecnologias

Para esse projeto foi utilizado Vue 3, um framework que já possui um rico ecossistema, sem a necessidade de bibliotecas externas (criadas pela comunidade). Foi utilizado o que há de mais moderno nesse framework:

### Front-End

- [Vite](https://vite.dev/) - Vite Next Generation Frontend Tooling.
- [Vue](https://vuejs.org/) - An approachable, performant and versatile framework.
- [Pinia](https://pinia.vuejs.org/) - Type Safe, Extensible, and Modular by design. Forget you are even using a store.
- [Vue-Router](https://router.vuejs.org/) - Expressive, configurable and convenient routing for Vue.js.
- [Vitest](https://vitest.dev/) - A Vite-native testing framework. It's fast!
- [Sass](https://sass-lang.com/) - Sass is the most mature, stable, and powerful professional grade CSS extension

### BackEnd

- [Node](https://nodejs.org/pt)
- [Express](https://expressjs.com/)

Para o backend, foi utilizado Node com Express para criação de uma rota listando os produtos.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

## Testes

Foram realizados testes nos componentes e funcionalidades mais importantes para o funcionamento da aplicação. Para executar os testes localmente, basta rodar o seguinte comando:

```sh
npm run test
```

## Teste Coverage

A cobertura de testes `test coverage` é uma métrica que indica a porcentagem do código do projeto que é coberto por testes automatizados. Ela ajuda a avaliar o quanto do código está sendo verificado para garantir seu correto funcionamento.

```sh
npm run test:coverage
```

| File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| ------------------- | ------- | -------- | ------- | ------- | ----------------- |
| **All files**       | 74.76   | 68.75    | 71.42   | 74.76   |                   |
| **src**             | 0       | 0        | 0       | 0       |                   |
| App.vue             | 0       | 0        | 0       | 0       | 1-10              |
| main.ts             | 0       | 0        | 0       | 0       | 1-14              |
| **src/api**         | 52.94   | 100      | 50      | 52.94   |                   |
| httpInstance.ts     | 52.94   | 100      | 0       | 52.94   | 12-19             |
| interface.ts        | 0       | 0        | 0       | 0       |                   |
| **src/components**  | 96.29   | 54.54    | 100     | 96.29   |                   |
| BreadCrumb.vue      | 86.95   | 33.33    | 100     | 86.95   | 7,24,26           |
| Header.vue          | 100     | 50       | 100     | 100     | 9                 |
| ProductCard.vue     | 100     | 100      | 100     | 100     |                   |
| **src/router**      | 0       | 0        | 0       | 0       |                   |
| index.ts            | 0       | 0        | 0       | 0       | 1-21              |
| **src/stores**      | 100     | 100      | 100     | 100     |                   |
| useWishlistStore.ts | 100     | 100      | 100     | 100     |                   |
| **src/utils**       | 100     | 100      | 100     | 100     |                   |
| formatPrice.ts      | 100     | 100      | 100     | 100     |                   |
| **src/views**       | 82.97   | 60       | 100     | 82.97   |                   |
| ProductListView.vue | 92.59   | 66.66    | 100     | 92.59   | 29-30             |
| WishListView.vue    | 70      | 50       | 100     | 70      | 6-11              |
