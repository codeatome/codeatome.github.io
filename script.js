// Theme Toggle (optional future enhancement)
// const themeToggle = document.getElementById('theme-toggle');
// themeToggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

// Stock Chart
const ctx = document.getElementById('stockChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Stock Price ($)',
      data: [120, 125, 123, 130, 128],
      borderColor: '#007acc',
      backgroundColor: 'rgba(0, 122, 204, 0.1)',
      tension: 0.2,
      fill: true
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});
