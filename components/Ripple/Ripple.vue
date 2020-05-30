<template>
  <div class="hello">
    <p style="font-family:monospace;font-size:1.3em">
      <!--prettyhtml-ignore-->
      <span style="white-space: nowrap;">
        Pantone<sup>®</sup>
      </span>
      
      <span class="c-p0">&nbsp;Sh</span>
      <span class="c-p1">im</span>
      <span class="c-p2">me</span>
      <span class="c-p3">ri</span>
      <span class="c-p4">ng</span>
      <span class="c-p5">&nbsp;Su</span>
      <span class="c-p6">ns</span>
      <span class="c-p7">et</span>
      Edition
    </p>
    <div class="wrap">
      <Item color="#FC8F9B"/>
      <Item color="#E55982"/>
      <Item color="#E881A6"/>
      <Item color="#9D446E"/>
    </div>

    <p style="font-family:monospace;font-size:1.3em;margin-top: 50px">Flat Design</p>
    <div class="wrap">
      <Item color="#FF6F61" no-style/>
      <Item color="#FC9E21" no-style/>
      <Item color="#DC793E" no-style/>
      <Item color="#FEA166" no-style/>
    </div>
    <p style="font-family:monospace;font-size:1.3em;margin-top: 50px">Centered Ripple</p>
    <div class="wrap">
      <Item color="#FC8F9B" center no-style/>
      <Item color="#E55982" center no-style/>
      <Item color="#E881A6" center no-style/>
      <Item color="#9D446E" center no-style/>
    </div>
    <p
      style="font-family:monospace;font-size:1.3em;margin-top: 50px"
    >Controlling color through class</p>
    <div class="wrap">
      <Item label="clickmenow" color="#FC8F9B" rippleClass="c-p2" center no-style/>
      <Item label="clickmenow" color="#FC8F9B" rippleClass="c-p3" center no-style/>
      <Item label="clickmenow" color="#FC8F9B" rippleClass="c-p4" center no-style/>
      <Item label="clickmenow" color="#FC8F9B" rippleClass="c-p5" center no-style/>
    </div>
  </div>
</template>

<script>
import Item from "./Ripple.vue"
export default {
  components: { Item }
}
</script>

<style>
.c-p0 {
  color: #FC8F9B;
}
.c-p1 {
  color: #E55982;
}
.c-p2 {
  color: #E881A6;
}
.c-p3 {
  color: #9D446E;
}
.c-p4 {
  color: #FF6F61;
}
.c-p5 {
  color: #FC9E21;
}
.c-p6 {
  color: #DC793E;
}
.c-p7 {
  color: #FEA166;
}
.wrap {
  margin: 0 auto;
  max-width: 100%;
  width: 600px;
  display: flex;

  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>