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
  color: var(--color-primary);
  font-family: var(--font-stack-serif);
}

h2 {
  font-family: var(--font-stack-serif);
  font-weight: normal;
}

h3 {
  font-family: var(--font-stack-serif);
  font-weight: normal;
}

body {
  margin-top: calc(var(--spacing-headings) * 2);
  margin-bottom: calc(var(--spacing-headings) * 2);
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

code:not(.hljs) {
  padding-left: .5em;
  padding-right: .5em;
  border-radius: 4px;
  background-color: white;
}

ol > li + li {
  margin-top: var(--spacing-unit);
}
</style>
