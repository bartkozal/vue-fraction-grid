<template>
  <section>
    <h2 id="installation">Installation</h2>
    <ol>
      <li>
        <p>
          Install package using <code>yarn</code> or <code>npm</code>:
        </p>
        <code-example syntax="bash" :source="exampleInstall"></code-example>
      </li>

      <li>
        <p>
          Load the plugin by calling <code>Vue.use()</code>:
        </p>
        <code-example syntax="js" :source="exampleLoad"></code-example>
      </li>

      <li>
        Now you have access to three global components in your templates: <code>&lt;container&gt;</code>, <code>&lt;grid&gt;</code>, <code>&lt;grid-item&gt;</code>
      </li>
    </ol>
  </section>
</template>

<script>
import { html } from 'common-tags'
import CodeExample from '../components/CodeExample'

export default {
  name: 'installation',
  components: {
    CodeExample
  },
  data () {
    return {
      exampleInstall: html`
        $ yarn add vue-fraction-grid

        # or

        $ npm install --save vue-fraction-grid
      `,
      exampleLoad: html`
        import Vue from 'vue'
        import VueFractionGrid from 'vue-fraction-grid'

        Vue.use(VueFractionGrid)
      `
    }
  }
}
</script>
