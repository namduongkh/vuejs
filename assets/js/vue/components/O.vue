<template>
  <div class="phase">
    <h2>Open–closed principle</h2>
    <blockquote class="blockquote phase-step">
      Software entities ... should be open for extension, but closed for
      modification.
    </blockquote>

    <div class="row">
      <div class="col-md-6 phase-step">
        <ClassExposer
          :config="{
            name: 'NumberAnalyst',
            actions: [
              {
                name: 'analyze',
                code: `
// lấy cặp số xuất hiện nhiều nhất
              `,
              },
            ],
          }"
        />
      </div>
      <div class="col-md-6 phase-step">
        <ClassExposer
          :config="{
            name: 'NumberAnalyst',
            actions: [
              {
                name: 'analyze(formula)',
                code: `
formula.perform
              `,
              },
            ],
          }"
        />
        <ClassExposer
          :config="{
            name: 'Formula1',
            actions: [
              {
                name: 'perform',
                code: `
// tính toán theo phương pháp ngẫu nhiên
              `,
              },
            ],
          }"
        />
        <ClassExposer
          :config="{
            name: 'Formula2',
            actions: [
              {
                name: 'perform',
                code: `
// tính toán theo phương pháp thợ ghép ảnh
              `,
              },
            ],
          }"
        />
        <ClassExposer
          :config="{
            name: 'Formula3',
            actions: [
              {
                name: 'perform',
                code: `
// tính toán theo phương pháp thiên văn vũ trụ học
              `,
              },
            ],
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "O",
};
</script>

<style>
</style>
