<template>
  <section>
    <h2 id="settings">Settings</h2>
    <code-example syntax="js" :source="exampleSettings"></code-example>
    <p>
      Configure grid by passing options as a second argument of <code>Vue.use()</code>.
      Configuration is merged to defaults that are listed above.
    </p>
    <p>
      Available settings:
    </p>
    <dl>
      <dt>
        <code>container</code>
      </dt>
      <dd>
        Default containers width. Works with any valid CSS values
        like: <code>'1440px'</code>, <code>'52em'</code>, <code>'100vw'</code>
        etc. Set it to <code>'100%'</code> to use full-width fluid grid. Because
        this is the maximum value, the grid will scale nicely for smaller
        viewports.
      </dd>
      <dt>
        <code>gutter</code>
      </dt>
      <dd>
        Gutter width. Works with any valid CSS values like <code>'30px'</code>,
        <code>'1rem'</code> etc.
      </dd>
      <dt>
        <code>approach</code>
      </dt>
      <dd>
        <code>'mobile-first'</code> or <code>'desktop-first'</code>. Choose
        which approach of responsive web design do you prefer. Breakpoint
        rules are based on this option.
      </dd>
      <dt>
        <code>breakpoints</code>
      </dt>
      <dd>
        List the grid breakpoints. Key is the breakpoint name for
        <code>:rwd</code> prop. Value is the size and can include one or
        two CSS values separated with a space.
      </dd>
    </dl>
  </section>
</template>

<script>
import { html } from 'common-tags'
import CodeExample from '../components/CodeExample'

export default {
  name: 'settings',
  components: {
    CodeExample
  },
  data () {
    return {
      exampleSettings: html`
        Vue.use(VueFractionGrid, {
          container: '1020px',
          gutter: '24px',
          approach: 'mobile-first',
          breakpoints: {
            compact: '320px 414px'
          }
        })
      `
    }
  }
}
</script>
