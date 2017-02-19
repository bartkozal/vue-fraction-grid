<template>
  <section>
    <h2 id="development">Development</h2>
    <ol>
      <li>
        <p>Clone the repository:</p>
        <code-example syntax="bash" :source="exampleClone"></code-example>
      </li>

      <li>
        <p>
          Run scripts from package.json using <code>npm run</code> /
          <code>yarn run</code> in the main directory:
        </p>
        <dl>
          <dt>
            <code>demo</code>
          </dt>
          <dd>
            Start demo page with implementation of all examples
          </dd>
          <dt>
            <code>test</code>
          </dt>
          <dd>
            Run tests using Jest
          </dd>
          <dt>
            <code>lint</code>
          </dt>
          <dd>
            Lint JS and CSS code of components, utils and installation
          </dd>
          <dt>
            <code>docs</code>
          </dt>
          <dd>
            Start docs locally
          </dd>
          <dt>
            <code>deploy</code>
          </dt>
          <dd>
            Deploy docs to GitHub Pages
          </dd>
        </dl>
      </li>
    </ol>

    <hr>

    <p>
      Code is open sourced <a href="https://github.com/bkzl/vue-fraction-grid">on GitHub</a>.
      Up to date changelog is available under
      <a href="https://github.com/bkzl/vue-fraction-grid/releases">the releases section</a>.
    </p>

    <p>
      I appreciate any comments, feedback, and information about potential issues.
      Have you experienced a bug or noticed a mistake in documentation? Please
      <a href="https://github.com/bkzl/vue-fraction-grid/issues">add a new issue</a>.
      Thanks!
    </p>
  </section>
</template>

<script>
import { html } from 'common-tags'
import CodeExample from '../components/CodeExample'

export default {
  name: 'development',
  components: {
    CodeExample
  },
  data () {
    return {
      exampleClone: html`
        $ git clone git@github.com:bkzl/vue-fraction-grid.git
      `
    }
  }
}
</script>
