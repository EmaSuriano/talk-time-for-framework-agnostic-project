--- home
theme: default
---

## TODO

- Find a proper background for the talk
- Fix font issue in dev-server bundler

--- cover
layout: cover
background: /cover.jpg

---

# Is it time for the framework-agnostic app?

Typescript Berlin Meetup - Nov 2022

--- about
layout: about
image: https://emasuriano.com/avatar.jpg

---

# Hello, I'm Ema Suriano 👋

Frontend Engineer at [Revolut](https://www.revolut.com/)

- Open Source Enthusiast 🧑‍💻
- Writer ✍️
- Cook 🧑‍🍳
- AI Enthusiast 🤖

<v-click>

[emasuriano.com](https://emasuriano.com/)

</v-click>

--- quiz
layout: fact

---

# Poll time

<div class='flex gap-4 w-140 flex-wrap justify-center items-center mx-auto'>

<v-clicks>

<img alt="react" class="w-30" src="/images/react.svg" />
<img alt="preact" class="w-30" src="/images/preact.svg" />
<img alt="vue" class="w-30" src="/images/vue.svg" />
<img alt="svelte" class="w-30" src="/images/svelte.svg" />
<img alt="solid" class="w-30" src="/images/solid.svg" />
<img alt="lit" class="w-30" src="/images/lit.svg" />
<img alt="alpine" class="w-30" src="/images/alpine-js.svg" />

</v-clicks>

</div>

---

All these frameworks are tackling the **same problem**

And in many situations it might seems that ...

![Are you the same?](/images/2022-11-13-17-35-41.png)

---

## Issues when working with different frameworks

<v-clicks>

1. Components available only in one framework.
2. Different ways of coding a component
3. Same _goal_ re-written several times:
   - [Vuetify](https://vuetifyjs.com/en/):
   - [MUI core](https://mui.com/core/)
   - [SMUI](https://sveltematerialui.com/)

</v-clicks>

<v-click>

<v-btn color="indigo" class="m-6" >
Button
</v-btn>

</v-click>

---

## Framework-agnostic structure for components

```jsx
// MyComponent.ts
```

---

## But what if you can use all these frameworks together?

![](/images/2022-11-13-18-10-15.png)

--- vite
layout: iframe-right
url: https://vitejs.dev/

---

# Vite

> Build tool that aims to provide a faster and leaner development experience for modern web projects.

Consists of:

- A **dev server** that provides rich feature enhancements over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
- A **build command** that bundles your code with [Rollup](https://rollupjs.org/guide/en/), pre-configured to output highly optimized static assets for production.

--- plugins
layout: iframe-right
url: https://github.com/vitejs/awesome-vite#vue

---

# Plugins

**Vite** can be extended using plugins, which are based on **Rollup**'s well-designed plugin interface with a few extra Vite-specific options.

```bash
$ npm add -D @vitejs/plugin-legacy
```

```js
// vite.config.js
import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
});
```

--- test
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080

---

# Slide Title

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- | ------------- | ----- |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      | $12   |
| zebra stripes | are neat      | $1    |

--- test
layout: section

---

# Section Title

--- test
layout: statement

---

# Statement

--- test
layout: fact

---

# 100%

Fact information

--- test
layout: quote

---

# "Notable quote"

Attribution

--- test
layout: image-left
image: https://source.unsplash.com/collection/94734566/1920x1080

---

# Code

```ts {all|2|1-6|all}
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id);
  const newUser = { ...user, ...update };
  saveUser(id, newUser);
}
```

--- test
layout: center
class: "text-center"

---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)

---

# H1

## H2

### H3

#### H4

##### H5

###### H6
