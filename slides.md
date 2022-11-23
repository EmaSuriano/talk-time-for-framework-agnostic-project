--- home
theme: default
layout: cover
background: https://images.unsplash.com/photo-1485841890310-6a055c88698a?auto=format&fit=crop&w=1920&q=80
---

# Is it time for framework-agnostic apps?

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

## Issues when working across UI frameworks

<v-clicks>

1. Components available only in one framework
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
layout: statement

---

## Why argue for which framework to use?

<v-click>

# Put them together

</v-click>

---

Making possible that they communicate between each other!

```tsx {all|2,9|3,10|4,11|5,10,11}
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

<v-footer >

[vitejs.dev](https://vitejs.dev/)

</v-footer>

--- plugins
layout: iframe-right
url: https://github.com/vitejs/awesome-vite#vue

---

# Plugins

**Vite** can be extended using plugins, which are based on **Rollup**'s well-designed plugin interface with a few extra Vite-specific options.

```bash
$ npm add -D @vitejs/plugin-legacy
```

```ts
// vite.config.ts
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

<v-footer class="text-black">

[awesome-vite](https://github.com/vitejs/awesome-vite#vue)

</v-footer>

<!-- Vite's default browser support baseline is Native ESM, native ESM dynamic import, and import.meta. This plugin provides support for legacy browsers that do not support those features when building for production. -->

---

# Setup for multi-framework

```ts {all|3-5|7-9}
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [react(), vue(), svelte()],
});
```

--- building an app
layout: two-cols

---

## When building an app

<v-clicks >

- Routing
- Data fetching
- State management
- Asset optimization
- SEO practices

</v-clicks>

::right::

<v-click >

![Too much work](/images/too-much-work.gif)

</v-click>

--- astro
layout: two-cols

---

## What is Astro?

<v-clicks>

- Powered by Vite
- From the developers of [Snowpack](https://www.snowpack.dev/)
- Latest stable version 1.5, released [this October](https://astro.build/blog/astro-150/)
- Bring Your Own Framework (BYOF), or use plain JS/HTML
- Static Site Generator (SSG)\*
- Zero JS by default + Client Hydration

</v-clicks>

::right::

<img alt="Astro" class="w-80 m-auto my-10" src="/images/astro.svg" />

--- astro - how?
layout: two-cols

---

## How does Astro work?

<v-clicks>

- Astro is built based on Astro Islands (concept from [Island Architecture](https://jasonformat.com/islands-architecture/)).
- You can use any supported UI framework (React, Svelte, Vue, etc.) to render islands in the browser.
- Astro generates every website with zero client-side JavaScript, by default.
- When a component needs some JavaScript, Astro only loads that one component (and any dependencies).
- Even better, you can tell Astro exactly how and when to render each component, with [client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives).

</v-clicks>

::right::

<div v-click="1">

![Island Architecture](/images/2022-11-22-19-48-22.png)

</div>

--- code
layout: full
class: p-0

---

```jsx
---
import ReactComponent from '../components/ReactComponent.jsx';
import localData from '../data/local-data.json';

// type definition
type Props = {
  title: string;
}

// Access passed-in component props, like `<X title="Hello, World" />`
const {title} = Astro.props;

// Fetch external data, even from a private API or database
const data = await fetch('EXTERNAL_SOURCE/users').then(r => r.json());
---

// render HTML with usage of props
<h1>Title is: {title}</h1>

// Render a framework component and pass props
<ReactComponent title={title} />

// Mix HTML with JavaScript expressions, similar to JSX
<ul>
  {data.map((item) => <li>{data.id}</li>)}
</ul>

<style>
  /* scoped to the component, other H1s on the page remain the same */
  h1 { color: red }
</style>
```

<style>
.slidev-code-wrapper { 
  height: 100%;
  overflow: auto;
}
</style>

---

# Client directives

| **Directive**    | **Priority** | **Useful for**                                                                               |
| ---------------- | ------------ | -------------------------------------------------------------------------------------------- |
| `client:load`    | High         | Immediately-visible UI elements that need to be interactive as soon as possible              |
| `client:idle`    | Medium       | Lower-priority UI elements that don’t need to be immediately interactive                     |
| `client:visible` | Low          | Low-priority UI elements that are either far down the page or resource-intensive to load     |
| `client:media`   | Low          | Sidebar toggles, or other elements that might only be visible on certain screen sizes.       |
| `client:only`    | High         | Skips HTML server-rendering, and renders only on the client. Works the same as `client:load` |

--- test
layout: iframe-right
url: https://astro-client-directives-test.netlify.app
class: p-0 overflow-y-auto

---

```jsx
---
import Layout from '../layouts/Layout.astro';
import Counter from '../components/Counter';
---

<Layout title="Welcome to Astro.">
  <main>
    <h1>Welcome to <span class="text-gradient">Astro</span></h1>

    <br />
    <h2><pre>no directive</pre></h2>
    <p class="instructions">
      <code>No JS, no interactive</code>
      <Counter />
    </p>

    <br />
    <h2><pre>client:load</pre></h2>
    <p class="instructions">
      <code>Loads JS as soon as possible</code>

      <Counter client:load />
    </p>

    <br />
    <h2><pre>client:idle</pre></h2>
    <p class="instructions">
      <code>Loads JS when rendering is over</code>

      <Counter client:idle />
    </p>

    <br />
    <h2><pre>client:visible</pre></h2>
    <p class="instructions">
      <code>Loads JS when button is visible by the user</code>

      <Counter client:visible />
    </p>

    <br />
    <h2><pre>client:media</pre></h2>
    <p class="instructions">
      <code>Loads JS when the media query (min-width: 680px) is valid</code>
    </p>

    <Counter client:media="(min-width: 680px)" />

    <br />
    <h2><pre>client:only</pre></h2>
    <p class="instructions">
      <code>Loads JS only in client (No SSR)</code>

      <Counter client:only="react" />
    </p>
  </main>
</Layout>
```

<v-footer>

[astro-client-directives-test.netlify.app](https://astro-client-directives-test.netlify.app)

</v-footer>

--- sharing-state
layout: statement

---

# Sharing state?

--- nano stores
layout: two-cols
class: mx-1

---

# Nano Stores

- **They’re lightweight.** Nano Stores ship the bare minimum JS you’ll need (less than 1 KB) with zero dependencies.
- **They’re framework-agnostic.** This means sharing state between frameworks will be seamless!

```ts
// store/users.ts
import { atom } from 'nanostores';
import type User from 'types';

export const users = atom<User[]>([]);

export function addUser(user: User) {
  users.set([...users.get(), user]);
}
```

::right::

<v-click>

```tsx
import { useStore } from '@nanostores/react';
import { users } from '../stores/users.ts';

export const UserList = () => {
  const list = useStore(users);

  return (
    <ul>
      {list.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};
```

</v-click>

<v-click>

```tsx
<script lang="ts">
  import { createUser } from '../utils/users';

  function onClickHandler() {
    const user = createUser();
    addUser(user)
  }
</script>

<Button on:click={onClickHandler}>
  <Label>Add user</Label>
</Button>
```

</v-click>

--- Demo
layout: statement

---

# Demo time 🔮

--- test
layout: iframe
url: https://astro-multi-framework-dashboard.netlify.app/

---

<!-- asdasdkjashd -->

--- asdasd
layout: quote

---

# Summary

<v-clicks >

- **Vite** provides a dev server and bundler for our app.
- A Vite application can be enhanced with the usage of **plugins**.
- **Astro** is built on Vite and uses an Island Architecture.
- Each component has to specify a **client directive** to be interactive.
- The application state is being shared using **nanostore**.

</v-clicks>

--- npm comparison
layout: iframe
url: https://npmtrends.com/@angular/core-vs-alpinejs-vs-lit-vs-preact-vs-react-vs-solid-js-vs-svelte-vs-vue

---

--- thanks
layout: cover
background: https://images.unsplash.com/photo-1485841890310-6a055c88698a?auto=format&fit=crop&w=1920&q=80

---

# Thanks for listening!

[time-for-framework-agnostic-projects.netlify.app](https://time-for-framework-agnostic-projects.netlify.app)
