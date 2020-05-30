<template>
  <div class="item-wrap" v-bind:class="{'no-style': noStyle}">
    <div class="item-inner">
      <div class="clickme" :style="{color}" v-ripple="{center,class: rippleClass}">
        <div class="clickme-text">
          <span class="hash" v-if="showHash">#</span>
          {{btnLabel}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    center: { type: Boolean },
    noStyle: { type: Boolean },
    color: { type: String },
    label: { type: String },
    rippleClass: { type: String }
  },
  computed: {
    btnLabel: function() {
      if (this.label) {
        return this.label
      }
      return this.color.toLowerCase().replace("#", "")
    },
    showHash: function() {
      return !this.label
    }
  }
}
</script>
<style>
.hash {
  color: currentColor;
  opacity: 0.3;
}
.red--text {
  color: green;
}
.item-wrap {
  width: 50%;
  padding: 0 30px;
  box-sizing: border-box;
}
.item-inner {
  max-width: 100%;
  width: 200px;
  position: relative;
}
.clickme {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: #f5f5f5;
  font-weight: bold;
  max-width: 100%;
  height: 0;
  padding-bottom: 61.5%;

  font-size: 1.2em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  cursor: pointer;
  user-select: none;
  position: relative !important;
}
.no-style .clickme {
  box-shadow: none;
  background-color: transparent;
  transition: background-color 0.2s ease-in;
}
.no-style .clickme:hover {
  background-color: #f7f7f7;
}

.no-style .clickme::before {
  display: none !important;
}
.clickme-text {
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  /* color: white; */
}
.clickme::before {
  border-radius: inherit;
  bottom: 0;
  color: inherit;
  content: "";
  left: 0;
  opacity: 0.05;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #777;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
.clickme:hover:before {
  opacity: 0.09;
}
.clickme:active:before {
  opacity: 0;
}
</style>