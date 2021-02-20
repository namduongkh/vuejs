<template>
  <div class="phase">
    <div class="phase-step">
      <h2 class="text-primary">Who?</h2>
      <div class="text-center">
        <ImageCircle
          src="https://avatars.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4"
        />
        <h3>Evan You</h3>
        <i class="fa fa-github"></i>
        <a href="https://github.com/yyx990803">https://github.com/yyx990803</a>
      </div>
    </div>

    <div class="phase-step mt-5">
      <h2 class="text-primary">When?</h2>
      <div class="text-center">
        <h3>2013 - present</h3>
      </div>
    </div>

    <div class="phase-step mt-5">
      <h2 class="text-primary">Why?</h2>
      <div class="row">
        <div class="col-4 text-center">
          <h3 class="text-success">Approachable</h3>
          <div>
            Already know HTML, CSS and JavaScript? Read the guide and start
            building things in no time!
          </div>
        </div>
        <div class="col-4 text-center">
          <h3 class="text-success">Versatile</h3>
          <div>
            An incrementally adoptable ecosystem that scales between a library
            and a full-featured framework.
          </div>
        </div>
        <div class="col-4 text-center">
          <h3 class="text-success">Performant</h3>
          <div>
            20KB min+gzip <br />Runtime Blazing Fast Virtual DOM Minimal
            Optimization Efforts
          </div>
        </div>
      </div>
    </div>

    <div class="phase-step mt-5">
      <h2 class="text-primary">How?</h2>
      <h4>Basic</h4>
      <CodeHtml :code="howHtml" />
      <a
        href="https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-hello-world?file=/index.html"
        target="_blank"
        >Result</a
      >
    </div>

    <div class="phase-step mt-5">
      <h4>Single File Components</h4>
      <div style="padding: 0 10rem">
        <img
          src="https://vi.vuejs.org/images/vue-component.png"
          class="img-thumbnail"
        />
      </div>
    </div>

    <div class="phase-step text-center">
      <div class="height-10rem"></div>
      <h2 class="text-primary">Comparison with Other Frameworks</h2>
      <h4>
        <a href="https://vuejs.org/v2/guide/comparison.html" target="_blank"
          >https://vuejs.org/v2/guide/comparison.html</a
        >
      </h4>
    </div>
  </div>
</template>

<script>
import ExampleCode from "../config/example_code";

export default {
  name: "Introduction",
  data() {
    return {
      howHtml: ExampleCode.howHtml,
    };
  },
};
</script>

<style>
</style>
