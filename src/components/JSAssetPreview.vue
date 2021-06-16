<template>
  <div class="animation_container" ref="animation_container">
    <canvas ref="canvas">
      <code>Your browser doesn't support canvas</code>
    </canvas>
  </div>
</template>

<script>
/* eslint-disable */
require("@cainc/easeljs");
require("@cainc/tweenjs");

export default {
  name: "js-asset-viewer",
  data() {
    return {
      canvas: false,
      container: false,
      context: false,
      stage: false
    };
  },

  mounted() {
    // Initialize local state
    let q = this.$router.currentRoute.query;
    console.log("q\n", q);
    this.js = q.js;
    console.log("js\n", this.js);
    this.container = this.$refs.animation_container;
    this.canvas = this.$refs.canvas;
    // eslint-disable-next-line no-undef
    this.stage = new createjs.Stage(this.canvas);

    this.context = this.stage.canvas.getContext("2d");

    // eslint-disable-next-line no-undef
    createjs.Ticker.setFPS(24);
    // eslint-disable-next-line no-undef
    createjs.Ticker.addEventListener("tick", this.stage);

    this.loadAsset();
  },
  computed: {
    height() {
      if (!this.stage) return false;

      const { height } = this.stage.getBounds();
      return height;
    },

    width() {
      if (!this.stage) return false;

      const { width } = this.stage.getBounds();
      return width;
    },

    publishedUrl() {
      return this.node.revPath ? this.node.revPath : this.node.path;
    }
  },
  methods: {
    async loadAsset() {
      // try {
      //   const data = this.js;
      //   // eslint-disable-next-line no-eval
      //   const fn = eval(data);
      //   // eslint-disable-next-line no-undef
      //   const symbol = fn.call(this, createjs);
      //   const instance = new symbol();
      //   this.stage.addChild(instance);

      //   // eslint-disable-next-line no-undef
      //   var circle = new createjs.Shape();
      //   circle.graphics.beginFill("red").drawCircle(0, 0, 50);
      //   circle.x = 100;
      //   circle.y = 100;
      //   this.stage.addChild(circle);
      //   this.stage.setBounds(0, 0, 750, 750);
      //   this.resize();
      // } catch (e) {
      //   var circle = new createjs.Shape();
      //   circle.graphics.beginFill("red").drawCircle(0, 0, 50);
      //   circle.x = 100;
      //   circle.y = 100;
      //   this.stage.addChild(circle);
      //   this.stage.setBounds(0, 0, 750, 750);
      //   this.resize();
      // }

      // eslint-disable-next-line no-undef
      var circle = new createjs.Shape();
      circle.graphics.beginFill("red").drawCircle(0, 0, 50);
      circle.x = 125;
      circle.y = 125;
      this.stage.addChild(circle);
      this.stage.setBounds(0, 0, 250, 250);
      this.resize();
    },

    resize() {
      const pRatio = devicePixelRatio || 1;
      const sRatio = 1;

      this.canvas.width = this.width * pRatio * sRatio;
      this.canvas.height = this.height * pRatio * sRatio;

      this.container.style.width = `${this.width * sRatio}px`;
      this.canvas.style.width = this.container.style.width;
      this.container.style.height = `${this.height * sRatio}px`;
      this.canvas.style.height = this.container.style.height;

      this.stage.scaleX = pRatio * sRatio;
      this.stage.scaleY = pRatio * sRatio;

      this.stage.tickOnUpdate = false;
      this.stage.update();
      this.stage.tickOnUpdate = true;
    }
  }
};
</script>

<style scoped>
.animation_container {
  display: block;
  background-color: #666;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
