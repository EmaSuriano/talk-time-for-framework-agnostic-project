--- home
theme: default
layout: cover
background: https://cdn.discordapp.com/attachments/1045281897430921226/1045302373037379604/Ema_tv_tower_of_berlin_written_in_code_white_background_d6e4901f-d988-478e-b2d9-dc79850c39c4.png

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

[emasuriano.com](https://emasuriano.com/)

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
layout: full
class: p-0 -mt-4

---

![spiderman](/images/2022-11-13-17-35-41.png)

<v-footer>

[Know your meme](https://knowyourmeme.com/memes/spider-man-pointing-at-spider-man)

</v-footer>

---

## Issues when working across UI frameworks

<v-clicks>

1. Components available only in one framework
2. Different ways of coding a component
3. Same _goal_ re-written several times:
   - Vue: [Vuetify](https://vuetifyjs.com/en/)
   - React: [MUI core](https://mui.com/core/)
   - Svelte: [SMUI](https://sveltematerialui.com/)
   - Angular: [Angular Material](https://material.angular.io/)

</v-clicks>

<v-click>
  <material-button> Button </material-button>
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

<v-footer>

[vitejs.dev](https://vitejs.dev/)

</v-footer>

--- plugins
layout: iframe-right
url: https://vitejs.dev/plugins/#official-plugins

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

<v-footer>

[vitejs.dev/plugins/](https://vitejs.dev/plugins/)

</v-footer>

---

# Setup for multi-framework

```bash
$ npm add -D  @vitejs/plugin-react @vitejs/plugin-vue @sveltejs/vite-plugin-svelte
```

```ts
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
class: flex flex-col justify-center

---

## Time to build something!

<v-click>

But wait ... What about?

</v-click>

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
layout: iframe-right
url: https://astro.build/

---

## Astro

- Powered by Vite
- From the developers of [Snowpack](https://www.snowpack.dev/)
- Stable version released [on August, 2022](https://astro.build/blog/astro-1/)
- Bring Your Own Framework (BYOF), or use plain JS/HTML
- Zero JS by default + Client Hydration
- SSG/SSR

<v-footer>

[astro.build/](https://astro.build/)

</v-footer>

--- astro - how?
layout: two-cols

---

## How does Astro work?

<v-clicks>

- Astro is built based on **Astro Islands** (concept from [Island Architecture](https://jasonformat.com/islands-architecture/)).
- You can use **any UI framework** (React, Svelte, Vue, etc.) to render islands in the browser.
- Astro generates every website with **zero client-side JavaScript**, by default.
- If a component requires JS, you can tell Astro exactly how and when to render each component, with [client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives).

</v-clicks>

::right::

<div v-click="1">

![Island Architecture](/images/astro-island.png)

</div>

--- code
layout: full
class: p-0 overflow-y-auto

---

```jsx {2,3|5-11|12-17|20-26|28-32|34-38,20-22}
---
import AstroComponent from '../components/AstroComponent.astro';
import ReactComponent from '../components/ReactComponent.tsx';

// type definition
type Props = {
  title: string;
}

// Access passed-in component props, like `<X title="Hello, World" />`
const {title} = Astro.props;

// Fetch external data, even from a private API or database (SSG)
const data = await fetch('EXTERNAL_SOURCE/users').then(r => r.json());

// Read params from the url (SSR)
const product = await getProduct(Astro.params.id);
---

// render HTML with usage of props
<h1>Title is: {title}</h1>

// Mix HTML with JavaScript expressions, similar to JSX
<ul>
  {data.map((item) => <li>{data.id}</li>)}
</ul>

// Render another Astro component and pass props (No JS loaded)
<AstroComponent title={title} />

// Render a framework component and pass props (JS loaded)
<ReactComponent client:load onChange={callback}/>

<style>
  /* scoped to the component, other H1s on the page remain the same */
  h1 { color: red }
</style>
```

--- Demo client directives
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

# State management

<v-click>

## Solved!

</v-click>

--- nano stores
layout: two-cols
class: mx-1

---

# Nano Stores

> A tiny state manager for React, React Native, Preact, Vue, Svelte, and vanilla JS. It uses many atomic stores and direct manipulation.

- **They’re lightweight.** Nano Stores ship the bare minimum JS you’ll need (less than 1 KB) with zero dependencies.
- **They’re framework-agnostic.** This means sharing state between frameworks will be seamless!

<v-click>

```ts
// store/users.ts
import { atom } from 'nanostores';
import type User from 'types';

export const users = atom<User[]>([]);

export function addUser(user: User) {
  users.set([...users.get(), user]);
}
```

</v-click>

::right::

<v-clicks>

```tsx
import { useStore } from '@nanostores/react';
import { users } from '../stores/users.ts';
import { UserItem } from './UserItem.tsx';

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

```tsx
<script lang="ts">
  import { UserForm } from './UserForm.svelte';
  import { addUser } from '../stores/users.ts';
</script>

<UserForm on:submit={user => addUser(user)} />
```

</v-clicks>

--- Demo
layout: statement

---

# Demo time ✨

--- test
layout: iframe
url: https://astro-multi-framework-dashboard.netlify.app/

---

--- nano stores
layout: two-cols
class: p-0 mx-1 overflow-y-auto

---

```tsx
// pages/index.astro
---
// Astro
import Layout from 'layouts/Layout.astro';
import type { Product } from 'types';

// React
import { HighlighterWrapper, HighlighterToggle } from 'components/Highlighter';
import CategoryChart from 'components/CategoryChart';

// Svelte
import Tags from 'components/Tags.svelte';
import ProductTable from 'components/ProductTable.svelte';

// Vue
import Banner from 'components/Banner.vue';
import Overview from 'components/Overview.vue';

// fetch data
const products = await fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((res) => res.products as Product[]);
---

<Layout page="Home">
  <HighlighterToggle client:only="react" />

  <div class="tw-grid tw-gap-4 tw-grid-cols-3 lg:tw-grid-cols-5 md:tw-gap-10">
    <HighlighterWrapper
      client:idle
      framework="vue"
      className="tw-col-span-full"
    >
      <Banner client:load />
    </HighlighterWrapper>

    <HighlighterWrapper client:idle framework="svelte">
      <Tags client:load products={products} />
    </HighlighterWrapper>

    <HighlighterWrapper client:idle framework="vue">
      <Overview client:load products={products} />
    </HighlighterWrapper>

    <HighlighterWrapper client:idle framework="react" className="tw-col-span-3">
      <CategoryChart client:only="react" products={products} />
    </HighlighterWrapper>

    <HighlighterWrapper
      client:idle
      framework="svelte"
      className="tw-col-span-full"
    >
      <ProductTable client:visible products={products} />
    </HighlighterWrapper>
  </div>
</Layout>
```

```ts
// utils/state.ts
import { atom } from 'nanostores';

export const isFrameworkVisible = atom(false);

export const hiddenCategories = atom<string[]>([]);
```

<v-footer>

[github.com/EmaSuriano/astro-multi-framework-dashboard](https://github.com/EmaSuriano/astro-multi-framework-dashboard)

</v-footer>

::right::

<v-click>

```tsx
// components/Tags.svelte
<script lang="ts">
  import Chip, { Set, Text } from '@smui/chips';
  import { getCategories } from 'utils/product';
  import type { Product } from 'types';
  import { humanize } from 'utils/string';
  import { hiddenCategories } from 'utils/state';

  export let products: Product[];

  let categories = getCategories(products);
  let selected: string[] = Array.from(categories);

  function updateSelection() {
    hiddenCategories.set(
      categories.filter((category) => !selected.includes(category)),
    );
  }
</script>

<h1>Categories</h1>

<Set
  chips={categories}
  let:chip
  filter
  bind:selected
  on:click={updateSelection}
>
  <Chip {chip} touch>
    <Text>{humanize(chip)}</Text>
  </Chip>
</Set>
```

</v-click>

--- Summary
layout: quote

---

# Takeaways 🧳

<v-clicks >

- **Vite** provides a dev server and bundler for our app.
- A Vite application can be enhanced with the usage of **plugins**.
- **Astro** is built on Vite and uses an [Island Architecture](https://jasonformat.com/islands-architecture/).
- An Island can use **any UI framework** to render content.
- Each component has to specify a **client directive** to be interactive.
- The application state is being shared using **nanostore**.

</v-clicks>

--- npm comparison
layout: iframe
url: https://npmtrends.com/@angular/core-vs-alpinejs-vs-lit-vs-preact-vs-react-vs-solid-js-vs-svelte-vs-vue

---

--- thanks
layout: cover
background: https://cdn.discordapp.com/attachments/1045281897430921226/1045302373037379604/Ema_tv_tower_of_berlin_written_in_code_white_background_d6e4901f-d988-478e-b2d9-dc79850c39c4.png

---

# Thanks for listening!

## [time-for-framework-agnostic-projects.netlify.app](https://time-for-framework-agnostic-projects.netlify.app)
