export default {
  fetch_number: {
    name: "fetch_number",
    code: "// lấy kết quả xổ số các lần gần nhất"
  },
  analyze: {
    name: 'analyze',
    code: '// tính toán kết quả bằng công thức'
  },
  analyzeWithFormular: {
    name: 'analyze',
    code: 'formula.perform'
  },
  analyzeWithFormularAndParams: {
    name: 'analyze(formula)',
    code: 'formula.perform'
  },
  formula1: {
    name: 'perform',
    code: '// tính toán theo phương pháp ngẫu nhiên'
  },
  formula2: {
    name: 'perform',
    code: '// tính toán theo phương pháp thợ ghép ảnh'
  },
  formula3: {
    name: 'perform',
    code: '// tính toán theo phương pháp thiên văn vũ trụ học'
  },
  generate2: {
    name: 'generate_two_number',
    code: '// Sinh ra cặp 2 số có xác suất cao'
  },
  generate3: {
    name: 'generate_three_number',
    code: '// Ghép thêm 1 số với cặp 2 số có xác suất cao<br/>generate_two_number + new_number'
  },
  generate3WithError: {
    name: 'generate_three_number',
    code: 'raise Error'
  },
  rubyRemote: {
    name: 'remote',
    code: '// Posible'
  },
  dotNetRemote: {
    name: 'remote',
    code: '// Impossible<br/>raise Error'
  },
}
