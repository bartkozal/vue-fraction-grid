# vue-fraction-grid

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

## Installation

TODO

## Settings

```js
Vue.use(VueFractionGrid, {
  container: '1020px',      // TODO
  gutter: '24px',           // TODO
  approach: 'mobile',       // TODO
  breakpoints: {            // TODO
    compact: '320px 414px',
    regular: '415px'
  }
})
```

## API

### Container

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
  </div>

  <grid-item size="2/3">
    ...
  </div>
</div>
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
<grid gutter="1rem">
  ...
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

```html
<grid-item size="n/1|n/2|n/3|n/4|n/5|n/6|n/8|n/9|n/10|n/12|1/1|0/1">
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

## Responsive Design

TODO

```js
Vue.use(VueFractionGrid, {
  approach: 'desktop',
  breakpoints: {
    compact: '415'
  }
})
```

TODO

```html
<grid compact="reverse">
  ...
</grid>
```

```html
<grid compact="stack">
  ...
</grid>
```

```html
<grid compact="stack-reverse">
  ...
</grid>
```

TODO

```html
<grid-item size="3/4" tablet="1/1" compact="0/1">
  ...
</grid-item>
```
