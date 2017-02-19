<template>
  <section>
    <h2 id="components">Components</h2>

    <h3 id="container">Container</h3>
    <p>Syntax:</p>
    <code-example syntax="html" :source="exampleContainerSyntax"></code-example>

    <p>Center content of the site in the container:</p>
    <code-example syntax="html" :source="exampleContainerDefault">
      <container>
        1020px
      </container>
    </code-example>

    <p>
      Override container's maximum width with <code>width</code> prop.
      This is useful when you need more than one container's type e.g.
      regular and full-width.
    </p>
    <code-example syntax="html" :source="exampleContainerPercentage">
      <container width="100%">
        100%
      </container>
    </code-example>

    <code-example syntax="html" :source="exampleContainerLength">
      <container width="25vw">
        25vw
      </container>
    </code-example>

    <h3 id="grid">Grid</h3>

    <h3 id="grid-item">Grid Item</h3>
  </section>
</template>

<script>
import { html } from 'common-tags'
import CodeExample from '../components/CodeExample'

export default {
  name: 'components',
  components: {
    CodeExample
  },
  data () {
    return {
      exampleContainerSyntax: html`
        <container [width="<length>|<percentage>"]>
      `,
      exampleContainerDefault: html`
        <container>
          ...
        </container>
      `,
      exampleContainerPercentage: html`
        <container width="100%">
          ...
        </container>
      `,
      exampleContainerLength: html`
        <container width="25vw">
          ...
        </container>
      `
    }
  }
}
</script>
