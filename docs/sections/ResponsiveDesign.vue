<template>
  <section>
    <h2 id="responsive-design">Responsive Design</h2>

    <p>
      Responsive design is based on two options from settings: <code>approach</code>
      and <code>breakpoints</code>.
    </p>

    <p>
      If you set approach to <code>mobile-first</code> breakpoints with a single value will respond to media queries using <code>min-width</code> attribute. If you use <code>desktop-first</code>  instead, breakpoints will respond to <code>max-width</code> .
    </p>

    <p>
      Breakpoints with two values respond to <code>(min-width: &lt;length&gt;) and (max-width: &lt;length&gt;)</code> query.
    </p>

    <p>Following configuration:</p>
    <code-example syntax="js" :source="exampleConfiguration"></code-example>

    <p>Is translated to this declaration from CSS:</p>
    <code-example syntax="css" :source="exampleTranslation"></code-example>

    <h3 id="responsive-design-api">API</h3>

    <p>Change the direction of a grid for specific breakpoints.</p>
    <code-example syntax="html" :source="exampleGridDirection">
      <container>
        Reverse for compact
        <grid :rwd="{compact: 'reverse'}">
          <grid-item size="1/3">
            1/3
          </grid-item>
          <grid-item size="2/3">
            2/3
          </grid-item>
        </grid>
      </container>
    </code-example>
    <code-example syntax="html" :source="exampleGridStackDirection">
      <container>
        Reverse stack for compact
        <grid direction="stack" :rwd="{compact: 'stack-reverse'}">
          <grid-item size="1/4">
            1/4
          </grid-item>
          <grid-item size="3/4">
            3/4
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>Change size of a grid item for specific breakpoints.</p>
    <code-example syntax="html" :source="exampleGridItemSize">
      <container>
        Hide grid item for compact
        <grid>
          <grid-item size="3/4" :rwd="{compact: '0/1'}">
            3/4 &gt; 0/1
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>Mix responsive design props for grid and items.</p>
    <code-example syntax="html" :source="exampleMix">
      <container>
        <grid :rwd="{compact: 'stack'}">
          <grid-item size="1/6" :rwd="{tablet: '0/1', compact: '1/1'}">
            1/6 &gt; 0/1 &gt; 1/1
          </grid-item>
          <grid-item size="1/2" :rwd="{tablet: '1/2', compact: '0/1'}">
            1/2 &gt; 1/2 &gt; 0/1
          </grid-item>
          <grid-item size="1/3" :rwd="{tablet: '1/2', compact: '1/1'}">
            1/3 &gt; 1/2 &gt; 1/1
          </grid-item>
        </grid>
      </container>
    </code-example>
  </section>
</template>

<script>
import { html } from 'common-tags'
import CodeExample from '../components/CodeExample'

export default {
  name: 'responsive-design',
  components: {
    CodeExample
  },
  data () {
    return {
      exampleConfiguration: html`
        Vue.use(VueFractionGrid, {
          approach: 'desktop-first',
          breakpoints: {
            compact: '415px',
            tablet: '416px 1100px'
          }
        })
      `,
      exampleTranslation: html`
        @media (max-width: 415px) { ... } /* compact */
        @media (min-width: 416px) and (max-width: 1100px) { ... } /* tablet */
      `,
      exampleGridDirection: html`
        <grid :rwd="{compact: 'reverse'}">
          ...
        </grid>
      `,
      exampleGridStackDirection: html`
        <grid direction="stack" :rwd="{compact: 'stack-reverse'}">
          ...
        </grid>
      `,
      exampleGridItemSize: html`
        <grid-item size="3/4" :rwd="{compact: '0/1'}">
          ...
        </grid-item>
      `,
      exampleMix: html`
        <grid :rwd="{compact: 'stack'}">
          <grid-item size="1/6" :rwd="{tablet: '0/1', compact: '1/1'}">
            ...
          </grid-item>
          <grid-item size="1/2" :rwd="{tablet: '1/2', compact: '0/1'}">
            ...
          </grid-item>
          <grid-item size="1/3" :rwd="{tablet: '1/2', compact: '1/1'}">
            ...
          </grid-item>
        </grid>
      `
    }
  }
}
</script>
