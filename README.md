# vue-fraction-grid

[![Build Status](https://travis-ci.org/bkzl/vue-fraction-grid.svg?branch=master)](https://travis-ci.org/bkzl/vue-fraction-grid)

**[work in progress]**

- [x] container
- [x] grid
- [x] grid-item
- [x] settings
- [ ] responsive design
- [ ] demo
- [ ] docs
- [x] tests
- [ ] linting
- [ ] dist

**[work in progress]**

Flexbox based responsive fraction grid for Vue.js

[Live Demo](#TODO)

```html
<container>
  <grid vertical="middle" compact="stack">
    <grid-item size="1/6" compact="0/1">
      ...
    </grid-item>

    <grid-item size="3/6" compact="1/1">
      ...
    </grid-item>

    <grid-item size="2/6" compact="1/1">
      ...
    </grid-item>
  </grid>
</container>
```

TODO: demo component, tests

## Installation

TODO

## Settings

```js
Vue.use(VueFractionGrid, {
  container: '1020px',      // TODO 100% for fluid
  gutter: '24px',           // TODO
  approach: 'mobile',       // TODO
  breakpoints: {            // TODO
    compact: '320px 414px'
  }
})
```

TODO image

## API

### Container

Syntax:

```html
<container width="default|width">
```

TODO

```html
<container>
  ...
</container>
```

TODO

```html
<container width="960px">
  ...
</container>
```

### Grid

Syntax:

```html
<grid gutter="default|width"
      horizontal="left|center|right"
      vertical="top|middle|bottom"
      direction="reverse|stack|stack-reverse"
      flat="flat"
      pair="pair">
```

TODO

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

TODO

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

TODO

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

TODO

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

TODO

```html
<grid flat>
  ...
</grid>
```

TODO

```html
<grid pair>
  ...
</grid>
```

TODO

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
<grid-item size="n/m">
```

TODO

```html
<grid-item size="5/8">
  ...
</grid-item>
```

TODO

```html
<grid-item size="1/1">
  ...
</grid-item>
```

TODO

```html
<grid-item size="0/1">
  ...
</grid-item>
```

TODO

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

TODO

```js
Vue.use(VueFractionGrid, {
  approach: 'desktop',
  breakpoints: {
    compact: '415px'
  }
})
```

TODO

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

TODO

```html
<grid-item size="3/4" :rwd="{compact: '0/1'}">
  ...
</grid-item>
```
