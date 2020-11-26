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
  dealPerform: {
    name: 'perform',
    code: 'DealerDK.perform(number, \'1 sổ đỏ\')'
  },
  dealPerformWithDealer: {
    name: 'perform(dealer = DealerDK.new)',
    code: 'dealer.perform(number, \'1 sổ đỏ\')'
  },
  dealerAtDK: {
    name: 'perform(number, amount)',
    code: '// 1 sổ đỏ thành 2 sổ đỏ'
  },
  dealerAtNT: {
    name: 'perform(number, amount)',
    code: '// 1 sổ đỏ thành 3 sổ đỏ'
  },
  betWithHourse: {
    name: 'bet_by_house',
    code: '// 1 cái nhà thành 2 cái nhà'
  },
  betWithCar: {
    name: 'bet_by_car',
    code: '// 1 ô tô thành 2 ô tô'
  },
  betWithMoney: {
    name: 'bet_by_money',
    code: '// 1 ăn 700'
  },
}
