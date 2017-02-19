<template>
  <div>
    <github-corner></github-corner>
    <container>
      <header class="hero-header">
        <h1>vue-fraction-grid</h1>
      </header>
    </container>
  </div>
</template>

<script>
import GitHubCorner from './components/GitHubCorner'

export default {
  name: 'docs',
  components: {
    'github-corner': GitHubCorner
  }
}
</script>

<style src="sensible.css"></style>
<style>
@import 'variables.css';

h1 {
  color: var(--color-primary);
}

body {
  font-family: 'Muli', sans-serif;
  background-color: var(--color-body);
}

.hero-header {
  margin-top: calc(var(--spacing-headings) * 2);
  text-align: center;
}
</style>
