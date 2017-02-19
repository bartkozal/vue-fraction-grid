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

<style src="normalize.css"></style>
<style src="sensible.css"></style>
<style>
@import 'variables.css';

h1 {
  font-family: var(--font-stack-serif);
  color: var(--color-primary);
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
  color: var(--color-text);
  background-color: var(--color-body);
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
  padding-right: 0.5em;
  padding-left: 0.5em;
  white-space: normal;
  background-color: white;
  border-radius: 4px;
}

ol {
  margin-bottom: var(--spacing-unit);
}

ol > li + li {
  margin-top: var(--spacing-unit);
}

dl {
  clear: both;
}

dt {
  float: left;
}

dd {
  padding-bottom: var(--spacing-unit);
  padding-left: 130px;
  margin-bottom: var(--spacing-unit);
  border-bottom: 2px solid var(--color-secondary);
}

dl dd:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: 0;
}

hr {
  height: 2px;
  margin-top: calc(var(--spacing-unit) * 3);
  color: var(--color-secondary);
  background-color: var(--color-secondary);
  border: 0;
}
</style>
