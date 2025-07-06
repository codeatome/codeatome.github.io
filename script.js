// Toggle dark mode
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Simple Stock Chart with dummy data
const ctx = document.getElementById('stockChart').getContext('2d');
const chart = new Chart(ctx, {
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
