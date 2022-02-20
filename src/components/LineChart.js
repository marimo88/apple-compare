import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  mounted () {
    this.renderChart({
      labels: [
        'M1（iPad Pro 5）',
        'A15（iPhone 13, iPad mini 6）',
        'A14 (iPhone 12, iPad Air 4)', 
        'A13 (iPhone 11, iPhone SE 2)', 
        'A12Z (iPad Pro 4)', 
        'A12X (iPad Pro 3)', 
        'A12 (iPhone XS, iPad Mini 5, iPad 8, iPad Air 3)', 
        'A11 (iPhone X, iPhone 8)',
        'A10 (iPhone 7, iPad 6, iPad 7)',
        'A9X (iPad Pro 1)',
        'A9 (iPhone SE 1 , iPhone 6s, iPad 5'], 
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [7219, 4587, 4198, 3300, 4634, 4605, 2511, 1913, 1285, 1181, 969]
        }
      ]
    },
    { responsive: true, maintainAspectRatio: false }
    )
  }
}
