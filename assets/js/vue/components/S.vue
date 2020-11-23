<template>
  <div class="phase">
    <h2>Single-responsibility principle</h2>
    <blockquote class="blockquote phase-step">
      A class should only have a single responsibility, that is, only changes to
      one part of the software's specification should be able to affect the
      specification of the class.
    </blockquote>

    <div class="row">
      <div class="col-md-6 phase-step">
        <ClassExposer
          :config="{
            name: 'Computing',
            actions: [
              {
                name: 'fetch_number',
                code: '// lấy kết quả xổ số các lần gần nhất',
              },
              { name: 'analyze', code: '// tính toán kết quả bằng công thức' },
            ],
          }"
        />
      </div>
      <div class="col-md-6 phase-step">
        <ClassExposer
          :config="{
            name: 'NumberFetcher',
            actions: [
              {
                name: 'get_result',
                code: '// lấy kết quả xổ số các lần gần nhất',
              },
            ],
          }"
        />
        <ClassExposer
          :config="{
            name: 'NumberAnalyst',
            actions: [
              { name: 'analyze', code: '// tính toán kết quả bằng công thức' },
            ],
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "S",
};
</script>

<style>
</style>
