<template>
  <container>
    <github-corner></github-corner>
    <hero></hero>
    <article>
      <installation></installation>
      <settings></settings>
      <components></components>
      <responsive-design></responsive-design>
      <development></development>
    </article>
  </container>
</template>

<script>
import GitHubCorner from './components/GitHubCorner'
import Hero from './sections/Hero'
import Installation from './sections/Installation'
import Settings from './sections/Settings'
import Components from './sections/Components'
import ResponsiveDesign from './sections/ResponsiveDesign'
import Development from './sections/Development'

export default {
  name: 'docs',
  components: {
    'github-corner': GitHubCorner,
    Hero,
    Installation,
    Settings,
    Components,
    ResponsiveDesign,
    Development
  }
}
</script>

<style src="sensible.css"></style>
<style>
@import 'variables.css';

h1 {
  font-family: var(--font-stack-serif);
  color: var(--color-primary);
}

body {
  font-family: var(--font-stack-sans-serif);
  background-color: var(--color-body);
  color: var(--color-text);
}

a {
  color: var(--color-complementary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

pre {
  margin-bottom: 0;
}

code {
  font-family: var(--font-stack-monospace);
}
</style>
