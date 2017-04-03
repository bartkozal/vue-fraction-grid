<template>
  <section>
    <h2 id="installation">Installation</h2>

    <p>
      Install the package using <code>yarn</code> or <code>npm</code>:
    </p>
    <code-example syntax="bash" :source="exampleInstall"></code-example>

    <h3 id="global">Global</h3>

    <p>
      Load the plugin by calling <code>Vue.use()</code>:
    </p>
    <code-example syntax="js" :source="exampleGlobal"></code-example>

    <p>
      Now you have access in your templates to <code>&lt;container&gt;</code>, <code>&lt;grid&gt;</code> and <code>&lt;grid-item&gt;</code> components.
    </p>

    <h3 id="local">Local</h3>

    <p>
      You may prefer to explicitly import the components in your templates:
    </p>
    <code-example syntax="html" :source="exampleLocalTemplate"></code-example>
    <code-example syntax="js" :source="exampleLocalScript"></code-example>

    <h3 id="cdn">CDN</h3>

    <p>Load the script file from CDN:</p>
    <code-example syntax="html" :source="exampleCdn"></code-example>
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
      exampleGlobal: html`
        import Vue from 'vue'
        import VueFractionGrid from 'vue-fraction-grid'

        Vue.use(VueFractionGrid)
      `,
      exampleLocalTemplate: html`
        <template>
          <container>
            <grid>
              <grid-item size="1/2">
                ...
              </grid-item>
              <grid-item size="1/2">
                ...
              </grid-item>
            </grid>
          </container>
        </template>
      `,
      exampleLocalScript: html`
        import Container from 'vue-fraction-grid/components/Container'
        import Grid from 'vue-fraction-grid/components/Grid'
        import GridItem from 'vue-fraction-grid/components/GridItem'

        export default {
          components: {
            Container,
            Grid,
            GridItem
          }
        }
      `,
      exampleCdn: html`
        <div id="root"></div>
        < script src="//cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.min.js"></ script>
        < script src="//rawgit.com/bkzl/vue-fraction-grid/v1.0.2/dist/vue-fraction-grid.js"></ script>
        < script>
          new Vue({
            el: '#root',
            template: '<container>...</container>'
          })
        </ script>
      `
    }
  }
}
</script>
