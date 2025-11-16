<template>
  <div class="analytics-page">
    <div class="page-header">
      <h1>Analytics</h1>
      <p>Comprehensive insights and data visualization</p>
    </div>

    <div class="analytics-controls">
      <div class="date-range">
        <label>From:</label>
        <input type="date" v-model="dateFrom">
        <label>To:</label>
        <input type="date" v-model="dateTo">
      </div>
      <button class="btn btn-primary" @click="refreshData">Refresh Data</button>
    </div>

    <div class="analytics-grid">
      <div class="metric-card" v-for="metric in metrics" :key="metric.id">
        <div class="metric-header">
          <h4>{{ metric.title }}</h4>
          <span class="metric-icon">{{ metric.icon }}</span>
        </div>
        <div class="metric-value">{{ metric.value }}</div>
        <div class="metric-change" :class="metric.positive ? 'positive' : 'negative'">
          {{ metric.change }}
        </div>
      </div>
    </div>

    <div class="charts-container">
      <div class="chart-card">
        <h3>Traffic Overview</h3>
        <div class="chart">
          <div class="chart-bar" v-for="(value, index) in trafficData" :key="index"
               :style="{ height: (value / 100) * 100 + '%' }">
            <span class="bar-value">{{ value }}</span>
          </div>
        </div>
        <div class="chart-labels">
          <span v-for="i in 7" :key="i">Day {{ i }}</span>
        </div>
      </div>

      <div class="chart-card">
        <h3>Device Distribution</h3>
        <div class="device-stats">
          <div class="device-item" v-for="device in deviceStats" :key="device.name">
            <div class="device-info">
              <span class="device-icon">{{ device.icon }}</span>
              <span class="device-name">{{ device.name }}</span>
            </div>
            <div class="device-bar">
              <div class="device-fill" :style="{ width: device.percentage + '%' }"></div>
            </div>
            <span class="device-percentage">{{ device.percentage }}%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="table-card">
      <h3>Top Pages</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>Page URL</th>
            <th>Views</th>
            <th>Unique Visitors</th>
            <th>Bounce Rate</th>
            <th>Avg. Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="page in topPages" :key="page.id">
            <td class="url-cell">{{ page.url }}</td>
            <td>{{ page.views }}</td>
            <td>{{ page.uniqueVisitors }}</td>
            <td>{{ page.bounceRate }}</td>
            <td>{{ page.avgDuration }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnalyticsPage',
  data() {
    return {
      dateFrom: '2025-11-01',
      dateTo: '2025-11-16',
      metrics: [
        { id: 1, icon: '👁️', title: 'Total Visits', value: '45,231', change: '↑ 12% vs previous period', positive: true },
        { id: 2, icon: '👥', title: 'Unique Visitors', value: '32,145', change: '↑ 8% vs previous period', positive: true },
        { id: 3, icon: '⏱️', title: 'Avg. Session Duration', value: '5m 42s', change: '↓ 2% vs previous period', positive: false },
        { id: 4, icon: '🚀', title: 'Conversion Rate', value: '3.2%', change: '↑ 0.5% vs previous period', positive: true }
      ],
      trafficData: [45, 52, 38, 71, 56, 82, 65],
      deviceStats: [
        { name: 'Desktop', icon: '🖥️', percentage: 58 },
        { name: 'Mobile', icon: '📱', percentage: 35 },
        { name: 'Tablet', icon: '📱', percentage: 7 }
      ],
      topPages: [
        { id: 1, url: '/dashboard', views: 12543, uniqueVisitors: 8231, bounceRate: '23%', avgDuration: '6m 23s' },
        { id: 2, url: '/products', views: 9876, uniqueVisitors: 6543, bounceRate: '31%', avgDuration: '4m 12s' },
        { id: 3, url: '/blog', views: 8765, uniqueVisitors: 5432, bounceRate: '42%', avgDuration: '3m 45s' },
        { id: 4, url: '/contact', views: 4321, uniqueVisitors: 3210, bounceRate: '18%', avgDuration: '2m 15s' },
        { id: 5, url: '/pricing', views: 3456, uniqueVisitors: 2345, bounceRate: '28%', avgDuration: '3m 30s' }
      ]
    }
  },
  methods: {
    refreshData() {
      alert('Data refreshed! Updated analytics from ' + this.dateFrom + ' to ' + this.dateTo);
    }
  }
}
</script>

<style scoped>
.analytics-page {
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 700;
}

.page-header p {
  font-size: 16px;
  color: #666;
}

.analytics-controls {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: flex-end;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.date-range {
  display: flex;
  gap: 15px;
  align-items: center;
}

.date-range label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.date-range input {
  padding: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
}

.analytics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.metric-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.metric-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.metric-header h4 {
  font-size: 14px;
  color: #666;
  margin: 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.metric-icon {
  font-size: 24px;
}

.metric-value {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.metric-change {
  font-size: 13px;
}

.metric-change.positive {
  color: #27ae60;
}

.metric-change.negative {
  color: #e74c3c;
}

.charts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.chart-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.chart-card h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 600;
}

.chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 250px;
  margin-bottom: 20px;
  gap: 15px;
}

.chart-bar {
  flex: 1;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
  border-radius: 6px 6px 0 0;
  position: relative;
  min-height: 20px;
  transition: all 0.3s ease;
}

.chart-bar:hover {
  background: linear-gradient(180deg, #5568d3 0%, #6b4290 100%);
  transform: translateY(-5px);
}

.bar-value {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 700;
  color: #333;
}

.chart-labels {
  display: flex;
  justify-content: space-around;
  gap: 15px;
  font-size: 12px;
  color: #999;
}

.device-stats {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.device-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.device-info {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 120px;
}

.device-icon {
  font-size: 20px;
}

.device-name {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.device-bar {
  flex: 1;
  height: 8px;
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.device-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
}

.device-percentage {
  min-width: 50px;
  text-align: right;
  font-size: 14px;
  font-weight: 700;
  color: #333;
}

.table-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.table-card h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 600;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table thead {
  border-bottom: 2px solid #e0e0e0;
}

.data-table th {
  padding: 15px;
  text-align: left;
  font-size: 13px;
  font-weight: 700;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.data-table td {
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 14px;
  color: #333;
}

.data-table tbody tr:hover {
  background: #f8f9fa;
}

.url-cell {
  font-weight: 600;
  color: #667eea;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .analytics-page {
    padding: 15px;
  }

  .analytics-controls {
    flex-direction: column;
    align-items: stretch;
    padding: 12px;
    gap: 10px;
  }

  .date-range {
    flex-direction: column;
    gap: 8px;
  }

  .date-range label {
    font-size: 12px;
  }

  .date-range input {
    padding: 8px;
    font-size: 12px;
  }

  .analytics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 20px;
  }

  .metric-card {
    padding: 15px;
  }

  .charts-container {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .chart-card {
    padding: 12px;
  }

  .table-card {
    padding: 12px;
  }

  .page-header h1 {
    font-size: 20px;
  }

  .data-table {
    font-size: 11px;
  }

  .data-table th,
  .data-table td {
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .analytics-page {
    padding: 10px;
  }

  .analytics-controls {
    gap: 8px;
    padding: 10px;
  }

  .analytics-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .metric-card {
    padding: 12px;
  }

  .metric-header h4 {
    font-size: 12px;
  }

  .metric-value {
    font-size: 22px;
  }

  .metric-icon {
    font-size: 20px;
  }

  .chart-card h3 {
    font-size: 13px;
  }

  .page-header h1 {
    font-size: 18px;
  }

  .page-header p {
    font-size: 12px;
  }

  .data-table {
    font-size: 10px;
  }

  .data-table th,
  .data-table td {
    padding: 6px;
  }
}
</style>
