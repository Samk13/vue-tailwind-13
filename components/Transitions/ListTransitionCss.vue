
<template>
  <transition-group name="slide-in" tag="ul">
    <slot/>
  </transition-group>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api"

export default defineComponent({
  setup() {
    const useToggle = () => {
      const open = ref(true)

      const toggle = () => {
        open.value = !open.value
      }

      return {
        toggle,
        open
      }
    }

    const { open, toggle } = useToggle()

    return {
      toggle,
      open
    }
  }
})
</script>

<style scoped>
.list-transition >>> .slide-in-enter {
  opacity: 0;
  transform: translate3d(0, 200%, 0);
}
.list-transition >>> .slide-in-enter-active {
  transition: all 250ms cubic-bezier(0.23, 1, 0.320, 1);
  transition-delay: calc(50ms * var(--i));
}
.list-transition >>> .slide-in-enter-to {
  opacity: 100;
  transform: translate3d(0, 0, 0);
}
.list-transition >>> .slide-in-leave {
  opacity: 100;
}
.list-transition >>> .slide-in-leave-active {
  transition: all 750ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  transition-delay: calc(45ms * var(--i));
}
.list-transition >>> .slide-in-leave-to {
  opacity: 0;
  transform: translate3d(0, -450%, 0);
}
</style>

