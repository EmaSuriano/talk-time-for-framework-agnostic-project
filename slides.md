--- home
theme: default
layout: cover
background: https://images.unsplash.com/photo-1485841890310-6a055c88698a?auto=format&fit=crop&w=1920&q=80
---

# Is it time for framework-agnostic apps?

Typescript Berlin Meetup - Nov 2022

---

## TODO

- Find a proper background for the talk
- Fix font issue in dev-server bundler
- Prepare questions for the event

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

# Poll time!

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

--- same issue
layout: fact

---

## All these frameworks are tackling the **same problem**

<v-click>

### And in many situations it might seems that ...

</v-click>

--- spider man meme
layout: image
image: /images/2022-11-13-17-35-41.png

---

<v-footer>

[Know your meme](https://knowyourmeme.com/memes/spider-man-pointing-at-spider-man)

</v-footer>

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

--- change approach
layout: section

---

## Why argue for which framework to use?

<v-clicks>

## When you can just simply

# Use them all

</v-clicks>

---

Making possible that they communicate between each other!

```tsx {2,9|3,10|4,11|5,10,11|all}
---
import ReactHeader from 'components/Header.tsx';
import SvelteForm from 'components/Form.svelte';
import VueResult from 'components/Result.vue';
import { form, saveForm } from './state'
---

<main>
    <ReactHeader title="My app" />
    <SvelteForm onSubmit={saveForm} />
    <VueResult result={form} />
</main>
```

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

---

```ts {1,2,7|3,4,5|8|all}
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [react(), vue(), svelte()],
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
