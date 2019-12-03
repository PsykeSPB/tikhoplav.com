<template>
  <div
    class="v-row"
    :class="[
      { wrap: wrap },
      { reverse: reverse },
      `align-${align}`,
      `justify-${justify}`,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VRow",
  props: {
    wrap: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: "center",
    },
    justify: {
      type: String,
      default: "center",
    },
  },
};
</script>

<style lang="scss">
.v-row {
  @extend %flex;
  width: 100%;
  flex-direction: row;

  &.reverse {
    flex-direction: row-reverse;
  }
}
</style>
