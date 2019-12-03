<template>
  <div
    class="v-col"
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
  name: "VCol",
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
.v-col {
  @extend %flex;
  width: 100%;
  flex-direction: column;

  &.reverse {
    flex-direction: column-reverse;
  }
}
</style>
