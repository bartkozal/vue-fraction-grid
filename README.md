# vue-fraction-grid

[![Build Status](https://travis-ci.org/bkzl/vue-fraction-grid.svg?branch=master)](https://travis-ci.org/bkzl/vue-fraction-grid)

Flexbox based responsive fraction grid system for Vue.js

### [Live Demo and Full Documentation](https://bkzl.github.io/vue-fraction-grid)

```html
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
```

## Installation

1. Install package using `yarn` or `npm`:

    ```sh
    $ yarn add vue-fraction-grid

    # or

    $ npm install --save vue-fraction-grid
    ```

2. Load the plugin by calling `Vue.use()`:

    ```js
    import Vue from 'vue'
    import VueFractionGrid from 'vue-fraction-grid'

    Vue.use(VueFractionGrid)
    ```

3. Now you have access to three global components in your templates: `<container>`, `<grid>`, `<grid-item>`

## Settings

```js
Vue.use(VueFractionGrid, {
  container: '1020px',
  gutter: '24px',
  approach: 'mobile-first',
  breakpoints: {
    compact: '320px 414px'
  }
})
```

Configure grid by passing options as a second argument of `Vue.use()`. Your configuration is merged to defaults that are listed above. Available settings:

```
container   - Maximum width of container. Works with any valid CSS values like: '1440px',
              '52em', '100vw' etc. Set it to '100%' if you need full-width fluid grid. Because
              this is the maximum value, the grid will scale nicely for smaller viewports.
gutter      - Gutter width, works with any valid CSS values like '30px', '1rem' etc.
approach    - 'mobil-first' or 'desktop-first'. Choose which approach of responsive web design
              do you prefer. Breakpoint rules are based on this option.
breakpoints - List the grid breakpoints. Key is the name of the breakpoint
              used in the `:rwd` prop. Value is the size and can include
              one or two CSS length values separated with space.
```

Detailed explanation and more configuration examples are in [the full documentation](https://bkzl.github.io/vue-fraction-grid).

## API

### Container

Syntax:

```html
<container [width="<length>|<percentage>"]>
```

Center content of site in the container:

```html
<container>
  ...
</container>
```

Override container's maximum width with `width` prop. It's especially useful when you need to use more than one type of container e.g. regular and full-width.

```html
<container width="100%">
  ...
</container>
```

### Grid

Syntax:

```html
<grid [horizontal="left|center|right"
      vertical="top|middle|bottom"
      direction="reverse|stack|stack-reverse"
      :rwd="{ breakpointName: direction }"
      flat
      pair]>
```

The most common used and simple example of a grid:

```html
<grid>
  <grid-item size="1/3">
    ...
  </grid-item>

  <grid-item size="2/3">
    ...
  </grid-item>
</grid>
```

Nest grids however you want to, the gutter is always the same. You don't need to wrap nested grids with containers.

```html
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
```

Horizontal alignment of grid items. This is mapped to flexbox `justify-content` attribute.

```html
<grid horizontal="left">
  ...
</grid>
```

```html
<grid horizontal="center">
  ...
</grid>
```

```html
<grid horizontal="right">
  ...
</grid>
```

```html
<grid horizontal="around">
  ...
</grid>
```

```html
<grid horizontal="between">
  ...
</grid>
```

Vertical alignment of grid items. This is mapped to flexbox `align-items` attribute.

```html
<grid vertical="top">
  ...
</grid>
```

```html
<grid vertical="middle">
  ...
</grid>
```

```html
<grid vertical="bottom">
  ...
</grid>
```

Remove gutter from grid items.

```html
<grid flat>
  ...
</grid>
```

Align content of the first item to the left and content of the second item to the right.

```html
<grid pair>
  ...
</grid>
```

The direction of grid items. This is mapped to flexbox `flex-direction` attribute.

```html
<grid direction="reverse">
  ...
</grid>
```

```html
<grid direction="stack">
  ...
</grid>
```

```html
<grid direction="stack-reverse">
  ...
</grid>
```

### Grid Item

Syntax:

```html
<grid-item size="<number>/<number>"|grow="<number>"|shrink="<number>"
           [:rwd="{ breakpointName: size }"]>
```

Provide any size you want to in the fraction format. Grid item should be nested directly in the grid. **Denominator can't be equal 0!**

```html
<grid-item size="5/8">
  ...
</grid-item>
```

To fill the grid with the grid item just set its size to `1/1`. It's useful in responsive design when you nedd to stack items.

```html
<grid-item size="1/1">
  ...
</grid-item>
```

Hide the grid item by setting its size to `0/1`. Another useful option for responsive design.

```html
<grid-item size="0/1">
  ...
</grid-item>
```

Use `grow` and `shrink` props instead of `size`. They are mapped to `flex-grow` and `flex-shrink` attributes. **Never mix size, grow and shrink into a single item!**

```html
<grid-item grow="2">
  ...
</grid-item>
```

```html
<grid-item shrink="0.5">
  ...
</grid-item>
```

### Responsive Design

Responsive design is based on two options from settings: `approach` and `breakpoints`. If you set approach to `mobile-first` breakpoints with a single value will respond to media queries using `min-width` attribute. If you use `desktop-first` instead, breakpoints will have `max-width` attribute. Breakpoints with two values respond to `(min-width: <length>) and (max-width: <length>)` query. So the following configuration:

```js
Vue.use(VueFractionGrid, {
  approach: 'desktop-first',
  breakpoints: {
    compact: '414px',
    tablet: '415px 1100px'
  }
})
```

Is translated to this CSS declarations:

```css
@media (max-width: 414px) { ... } /* compact */
@media (min-width: 415px) and (max-width: 1100px) { ... } /* tablet */
```

See more examples [in docs](https://bkzl.github.io/vue-fraction-grid).

### Responsive Design API

Change the grid direction for specific breakpoints.

```html
<grid :rwd="{compact: 'reverse'}">
  ...
</grid>
```

```html
<grid direction="stack" :rwd="{compact: 'stack-reverse'}">
  ...
</grid>
```

Change the grid item size for specific breakpoints.

```html
<grid-item size="3/4" :rwd="{compact: '0/1'}">
  ...
</grid-item>
```

## Development

1. Clone the repository:

    ```sh
    git clone git@github.com:bkzl/vue-fraction-grid.git
    ```

2. Run scripts from package.json using `yarn run` in the main directory:

    ```
    demo - Start demo page at localhost:4000 with all API examples from README
    test - Run tests using Jest
    lint - Lint JS and CSS code of components, utils and installation
    ```

* * *

Code is open sourced [on GitHub](https://github.com/bkzl/vue-fraction-grid). Up to date changelog is available under [the releases section](https://github.com/bkzl/vue-fraction-grid/releases).

I appreciate any comments, feedback, and information about potential issues. Have you experienced a bug or noticed a mistake in documentation? Please [add a new issue](https://github.com/bkzl/vue-fraction-grid/issues). Thanks!
