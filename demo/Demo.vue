<template>
  <div>
    <section data-name="vue-fraction-grid">
      <h1>vue-fraction-grid</h1>

      <container>
        <grid vertical="middle" compact="stack">
          <grid-item size="1/6" compact="0/1">
            1/6, compact: 0/1
          </grid-item>

          <grid-item size="3/6" compact="1/1">
            3/6, compact: 1/1
          </grid-item>

          <grid-item size="2/6" compact="1/1">
            2/6, compact: 1/1
          </grid-item>
        </grid>
      </container>
    </section>

    <section data-name="container">
      <h2>Container</h2>

      <container>
        Default
      </container>

      <hr>

      <container width="720px">
        720px
      </container>
    </section>

    <section data-name="grid">
      <h2>Grid</h2>

      <grid>
        <grid-item size="1/3">
          1/3
        </grid-item>

        <grid-item size="2/3">
          2/3
        </grid-item>
      </grid>
    </section>
  </div>
</template>

<style>
.vfg-container {
  background-color: #a2d5f2;
  text-align: center;
}

.vfg-grid {
  background-color: #07689f;
  color: #fafafa;
  text-align: center;
}

.vfg-grid-item {
  background-color: #ff7e67;
  color: #fafafa;
  text-align: center;
}
</style>
