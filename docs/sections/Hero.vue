<template>
  <header class="hero">
    <h1 class="hero-title">
      vue-fraction-grid
    </h1>
    <p class="hero-author">
      <small>Created and maintained by <a href="https://twitter.com/_bkzl">@_bkzl</a></small>
    </p>
    <p class="hero-tagline">
      Flexbox based responsive fraction grid system for Vue.js
    </p>
    <code-example syntax="html" :source="example">
      <container>
        <grid vertical="middle" :rwd="{compact: 'stack'}">
          <grid-item size="1/6" :rwd="{compact: '0/1'}">
            1/6
          </grid-item>

          <grid-item size="3/6" :rwd="{compact: '1/1'}">
            3/6
          </grid-item>

          <grid-item size="2/6" :rwd="{compact: '1/1'}">
            2/6
          </grid-item>
        </grid>
      </container>
    </code-example>
  </header>
</template>

<script>
import { html } from 'common-tags'
import CodeExample from '../components/CodeExample'

export default {
  name: 'hero',
  components: {
    CodeExample
  },
  data () {
    return {
      example: html`
        <container>
          <grid vertical="middle" :rwd="{compact: 'stack'}">
            <grid-item size="1/6" :rwd="{compact: '0/1'}">
              ...
            </grid-item>

            <grid-item size="3/6" :rwd="{compact: '1/1'}">
              ...
            </grid-item>

            <grid-item size="2/6" :rwd="{compact: '1/1'}">
              ...
            </grid-item>
          </grid>
        </container>
      `
    }
  }
}
</script>

<style>
@import '../variables.css';

.hero {
  margin-top: calc(var(--spacing-headings) * 2);
}

.hero-title {
  margin-bottom: 0;
}

.hero-author {
  color: var(--color-muted);
}

.hero-tagline {
  font-size: calc(1em * var(--font-ratio));
}
</style>
