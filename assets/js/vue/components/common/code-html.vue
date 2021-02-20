
<template>
  <codemirror :value="dedentCode" :options="cmOption" />
</template>

<script>
import dedent from "dedent";
import { codemirror } from "vue-codemirror";

// language
import "codemirror/mode/xml/xml.js";

// theme css
import "codemirror/theme/monokai.css";

// require active-line.js
import "codemirror/addon/selection/active-line.js";

// autoCloseTags
import "codemirror/addon/edit/closetag.js";

export default {
  name: "codemirror-example-html",
  title: "Mode: text/html & Theme: ambiance",
  components: {
    codemirror,
  },
  props: {
    code: {
      type: String,
    },
  },
  data() {
    return {
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        autoCloseTags: true,
        line: true,
        mode: "text/html",
        theme: "monokai",
        readOnly: true,
      },
    };
  },
  computed: {
    dedentCode() {
      return dedent(this.code);
    },
  },
};
</script>
