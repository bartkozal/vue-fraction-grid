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

    <p>Syntax:</p>
    <code-example syntax="html" :source="exampleGridSyntax"></code-example>

    <p>The most common usage and simple example of the grid:</p>
    <code-example syntax="html" :source="exampleGridDefault">
      <container>
        <grid>
          <grid-item size="1/3">
            1/3
          </grid-item>

          <grid-item size="2/3">
            2/3
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>
      Nest grids however you like, the gutter is always the same.
      There is no need to wrap nested grids with containers.
    </p>
    <code-example syntax="html" :source="exampleGridNested">
      <container>
        <grid>
          <grid-item size="2/3">
            2/3
            <grid>
              <grid-item size="1/2">
                1/2
              </grid-item>

              <grid-item size="1/2">
                1/2
              </grid-item>
            </grid>
          </grid-item>

          <grid-item size="1/3">
            1/3
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>
      Horizontal alignment of grid items. This works simillar to
      <code>justify-content</code> attribute.
    </p>
    <code-example syntax="html" :source="exampleGridHorizontalLeft">
      <container>
        <grid horizontal="left">
          <grid-item size="1/5">
            1/5
          </grid-item>
        </grid>
      </container>
    </code-example>
    <code-example syntax="html" :source="exampleGridHorizontalCenter">
      <container>
        <grid horizontal="center">
          <grid-item size="1/5">
            1/5
          </grid-item>
        </grid>
      </container>
    </code-example>
    <code-example syntax="html" :source="exampleGridHorizontalRight">
      <container>
        <grid horizontal="right">
          <grid-item size="1/5">
            1/5
          </grid-item>
        </grid>
      </container>
    </code-example>
    <code-example syntax="html" :source="exampleGridHorizontalAround">
      <container>
        <grid horizontal="around">
          <grid-item size="1/5">
            1/5
          </grid-item>
          <grid-item size="2/5">
            2/5
          </grid-item>
        </grid>
      </container>
    </code-example>
    <code-example syntax="html" :source="exampleGridHorizontalBetween">
      <container>
        <grid horizontal="between">
          <grid-item size="1/5">
            1/5
          </grid-item>
          <grid-item size="2/5">
            2/5
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>
      Vertical alignment of grid items. This works simillar to
      <code>align-items</code> attribute.
    </p>
    <code-example syntax="html" :source="exampleGridVerticalTop">
      <container>
        <grid vertical="top">
          <grid-item size="1/4">
            1/4
          </grid-item>
          <grid-item class="large" size="3/4">
            3/4
          </grid-item>
        </grid>
      </container>
    </code-example>
    <code-example syntax="html" :source="exampleGridVerticalMiddle">
      <container>
        <grid vertical="middle">
          <grid-item size="1/4">
            1/4
          </grid-item>
          <grid-item class="large" size="3/4">
            3/4
          </grid-item>
        </grid>
      </container>
    </code-example>
    <code-example syntax="html" :source="exampleGridVerticalBottom">
      <container>
        <grid vertical="bottom">
          <grid-item size="1/4">
            1/4
          </grid-item>
          <grid-item class="large" size="3/4">
            3/4
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>
      Remove gutter from grid items.
    </p>
    <code-example syntax="html" :source="exampleGridFlat">
      <container>
        <grid flat>
          <grid-item size="1/2">
            1/2
          </grid-item>
          <grid-item size="1/2">
            1/2
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>
      Align content of the first item to the left and content of the second item
      to the right.
    </p>
    <code-example syntax="html" :source="exampleGridPair">
      <container>
        <grid pair>
          <grid-item size="1/2">
            1/2
          </grid-item>
          <grid-item size="1/2">
            1/2
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>
      Set the grid items direction. This works simillar to
      <code>flex-direction</code> attribute.
    </p>
    <code-example syntax="html" :source="exampleGridReverse">
      <container>
        <grid direction="reverse">
          <grid-item size="1/6">
            1/6
          </grid-item>
          <grid-item size="5/6">
            5/6
          </grid-item>
        </grid>
      </container>
    </code-example>
    <code-example syntax="html" :source="exampleGridStack">
      <container>
        <grid direction="stack">
          <grid-item size="1/6">
            1/6
          </grid-item>
          <grid-item size="5/6">
            5/6
          </grid-item>
        </grid>
      </container>
    </code-example>
    <code-example syntax="html" :source="exampleGridStackReverse">
      <container>
        <grid direction="stack-reverse">
          <grid-item size="1/6">
            1/6
          </grid-item>
          <grid-item size="5/6">
            5/6
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>
      Set the grid items wrap. This works simillar to
      <code>flex-wrap</code> attribute.
    </p>
    <code-example syntax="html" :source="exampleGridWrap">
      <container>
        <grid wrap="wrap">
          <grid-item size="2/6">
            2/6
          </grid-item>
          <grid-item size="5/6">
            5/6
          </grid-item>
        </grid>
      </container>
    </code-example>
    <code-example syntax="html" :source="exampleGridWrapReverse">
      <container>
        <grid wrap="wrap-reverse">
          <grid-item size="2/6">
            2/6
          </grid-item>
          <grid-item size="5/6">
            5/6
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>Mix props however you want to.</p>
    <code-example syntax="html" :source="exampleGridMix">
      <container>
        <grid horizontal="right" vertical="bottom" direction="reverse" pair>
          <grid-item size="1/6" class="large">
            1/6
          </grid-item>
          <grid-item size="1/2">
            1/2
          </grid-item>
        </grid>
      </container>
    </code-example>

    <h3 id="grid-item">Grid Item</h3>

    <p>Syntax:</p>
    <code-example syntax="html" :source="exampleGridItemSyntax"></code-example>

    <p>
      Use any size written in the fraction format. Grid item should be nested directly in the grid. Items fractions don't have to sum to 1. <strong>Denominator can't be equal 0!</strong>
    </p>
    <code-example syntax="html" :source="exampleGridItemDefault">
      <container>
        <grid>
          <grid-item size="123/456">
            123/456
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>
      Fill the grid with a grid item by setting its size to <code>1/1</code>:
    </p>
    <code-example syntax="html" :source="exampleGridItemFill">
      <container>
        <grid>
          <grid-item size="1/1">
            1/1
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>
      Hide the grid item by setting its size to <code>0/1</code>:
    </p>
    <code-example syntax="html" :source="exampleGridItemHide">
      <container>
        <grid>
          <grid-item size="0/1">
            0/1
          </grid-item>
        </grid>
      </container>
    </code-example>

    <p>
      Use <code>grow</code> and <code>shrink</code> props instead of <code>size</code>. They work simillar to <code>flex-grow</code> and <code>flex-shrink</code> attributes. <strong>Never mix size, grow and shrink into a single item!</strong>
    </p>
    <code-example syntax="html" :source="exampleGridItemGrow">
      <container>
        <grid>
          <grid-item grow="2">
            grow 2x
          </grid-item>
          <grid-item grow="1">
            grow 1x
          </grid-item>
        </grid>
      </container>
    </code-example>
    <code-example syntax="html" :source="exampleGridItemShrink">
      <container>
        <grid>
          <grid-item grow="1">
            grow
          </grid-item>
          <grid-item shrink="1">
            shrink
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
      `,
      exampleGridSyntax: html`
        <grid [horizontal="left|center|right"
              vertical="top|middle|bottom"
              direction="reverse|stack|stack-reverse"
              :rwd="{ breakpointName: direction }"
              flat
              pair]>
      `,
      exampleGridDefault: html`
        <grid>
          <grid-item size="1/3">
            ...
          </grid-item>

          <grid-item size="2/3">
            ...
          </grid-item>
        </grid>
      `,
      exampleGridNested: html`
        <grid>
          <grid-item size="2/3">
            <grid>
              <grid-item size="1/2">
                ...
              </grid-item>

              <grid-item size="1/2">
                ...
              </grid-item>
            </grid>
          </grid-item>

          <grid-item size="1/3">
            ...
          </grid-item>
        </grid>
      `,
      exampleGridHorizontalLeft: html`
        <grid horizontal="left">
          ...
        </grid>
      `,
      exampleGridHorizontalCenter: html`
        <grid horizontal="center">
          ...
        </grid>
      `,
      exampleGridHorizontalRight: html`
        <grid horizontal="right">
          ...
        </grid>
      `,
      exampleGridHorizontalAround: html`
        <grid horizontal="around">
          ...
        </grid>
      `,
      exampleGridHorizontalBetween: html`
        <grid horizontal="between">
          ...
        </grid>
      `,
      exampleGridVerticalTop: html`
        <grid vertical="top">
          ...
        </grid>
      `,
      exampleGridVerticalMiddle: html`
        <grid vertical="middle">
          ...
        </grid>
      `,
      exampleGridVerticalBottom: html`
        <grid vertical="bottom">
          ...
        </grid>
      `,
      exampleGridFlat: html`
        <grid flat>
          ...
        </grid>
      `,
      exampleGridPair: html`
        <grid pair>
          ...
        </grid>
      `,
      exampleGridReverse: html`
        <grid direction="reverse">
          <grid-item size="1/6">
            ...
          </grid-item>
          <grid-item size="5/6">
            ...
          </grid-item>
        </grid>
      `,
      exampleGridStack: html`
        <grid direction="stack">
          <grid-item size="1/6">
            ...
          </grid-item>
          <grid-item size="5/6">
            ...
          </grid-item>
        </grid>
      `,
      exampleGridStackReverse: html`
        <grid direction="stack-reverse">
          <grid-item size="1/6">
            ...
          </grid-item>
          <grid-item size="5/6">
            ...
          </grid-item>
        </grid>
      `,
      exampleGridWrap: html`
        <grid wrap="wrap">
          <grid-item size="2/6">
            ...
          </grid-item>
          <grid-item size="5/6">
            ...
          </grid-item>
        </grid>
      `,
      exampleGridWrapReverse: html`
        <grid wrap="wrap-reverse">
          <grid-item size="2/6">
            ...
          </grid-item>
          <grid-item size="5/6">
            ...
          </grid-item>
        </grid>
      `,
      exampleGridMix: html`
        <grid horizontal="right" vertical="bottom" direction="reverse" pair>
          ...
        </grid>
      `,
      exampleGridItemSyntax: html`
        <grid-item size="<number>/<number>"|grow="<number>"|shrink="<number>"
                   [:rwd="{ breakpointName: size }"]>
      `,
      exampleGridItemDefault: html`
        <grid-item size="123/546">
          ...
        </grid-item>
      `,
      exampleGridItemFill: html`
        <grid-item size="1/1">
          ...
        </grid-item>
      `,
      exampleGridItemHide: html`
        <grid-item size="0/1">
          ...
        </grid-item>
      `,
      exampleGridItemGrow: html`
        <grid>
          <grid-item grow="2">
            ...
          </grid-item>
          <grid-item grow="1">
            ...
          </grid-item>
        </grid>
      `,
      exampleGridItemShrink: html`
        <grid>
          <grid-item grow="1">
            ...
          </grid-item>
          <grid-item shrink="1">
            ...
          </grid-item>
        </grid>
      `
    }
  }
}
</script>
