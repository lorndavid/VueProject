<template>
  <div class="dashboard-page">
    <div class="page-header">
      <h1>Dashboard</h1>
      <p>Welcome back! Here's your overview for today.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="stat in statistics" :key="stat.id">
        <div class="stat-icon">{{ stat.icon }}</div>
        <div class="stat-content">
          <p class="stat-label">{{ stat.label }}</p>
          <h3 class="stat-value">{{ stat.value }}</h3>
          <p class="stat-change" :class="stat.positive ? 'positive' : 'negative'">
            {{ stat.change }}
          </p>
        </div>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="chart-card">
        <h3>User Growth</h3>
        <div class="chart-placeholder">
          <div class="mini-chart">
            <div class="bar" v-for="i in 12" :key="i" :style="{ height: (Math.random() * 80 + 20) + '%' }"></div>
          </div>
        </div>
        <p class="chart-label">12 months trend</p>
      </div>

      <div class="chart-card">
        <h3>System Health</h3>
        <div class="health-meter">
          <div class="health-circle">
            <div class="health-value">99.9%</div>
          </div>
        </div>
        <p class="chart-label">Uptime status</p>
      </div>

      <div class="chart-card">
        <h3>Performance</h3>
        <div class="performance-list">
          <div class="perf-item">
            <span>CPU Usage</span>
            <div class="perf-bar">
              <div class="perf-fill" style="width: 45%"></div>
            </div>
            <span class="perf-value">45%</span>
          </div>
          <div class="perf-item">
            <span>Memory</span>
            <div class="perf-bar">
              <div class="perf-fill" style="width: 62%"></div>
            </div>
            <span class="perf-value">62%</span>
          </div>
          <div class="perf-item">
            <span>Disk</span>
            <div class="perf-bar">
              <div class="perf-fill" style="width: 28%"></div>
            </div>
            <span class="perf-value">28%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="recent-activities">
      <h3>Recent Activities</h3>
      <div class="activity-timeline">
        <div class="timeline-item" v-for="activity in activities" :key="activity.id">
          <div class="timeline-dot" :class="activity.type"></div>
          <div class="timeline-content">
            <p class="timeline-title">{{ activity.title }}</p>
            <p class="timeline-time">{{ activity.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data() {
    return {
      statistics: [
        { id: 1, icon: '👥', label: 'Total Users', value: '2,543', change: '↑ 12% from last week', positive: true },
        { id: 2, icon: '💰', label: 'Revenue', value: '$54,210', change: '↑ 8% from last week', positive: true },
        { id: 3, icon: '📦', label: 'Orders', value: '1,234', change: '↓ 3% from last week', positive: false },
        { id: 4, icon: '⭐', label: 'Rating', value: '4.8/5', change: '↑ 0.2% from last week', positive: true }
      ],
      activities: [
        { id: 1, type: 'success', title: 'System backup completed', time: '2 hours ago' },
        { id: 2, type: 'info', title: 'New user registered', time: '3 hours ago' },
        { id: 3, type: 'warning', title: 'High CPU usage detected', time: '5 hours ago' },
        { id: 4, type: 'success', title: 'Database optimization finished', time: '6 hours ago' },
        { id: 5, type: 'info', title: 'Server update deployed', time: '1 day ago' }
      ]
    }
  }
}
</script>

<style scoped>
.dashboard-page {
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 40px;
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.stat-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-start;
  gap: 20px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.stat-icon {
  font-size: 32px;
  min-width: 50px;
  text-align: center;
}

.stat-content {
  flex: 1;
}

.stat-label {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.stat-value {
  font-size: 24px;
  color: #333;
  font-weight: 700;
  margin-bottom: 8px;
}

.stat-change {
  font-size: 13px;
  margin: 0;
}

.stat-change.positive {
  color: #27ae60;
}

.stat-change.negative {
  color: #e74c3c;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
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
  margin-bottom: 20px;
  font-weight: 600;
}

.chart-placeholder {
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  margin-bottom: 15px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.mini-chart {
  display: flex;
  gap: 8px;
  width: 100%;
  height: 100%;
  align-items: flex-end;
}

.bar {
  flex: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px 4px 0 0;
  transition: all 0.3s ease;
}

.bar:hover {
  background: linear-gradient(135deg, #5568d3 0%, #6b4290 100%);
}

.health-meter {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.health-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(#27ae60 0%, #27ae60 99.9%, #e0e0e0 99.9%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.health-value {
  font-size: 28px;
  font-weight: 700;
  color: #27ae60;
  background: white;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-label {
  text-align: center;
  font-size: 12px;
  color: #999;
  margin: 0;
}

.performance-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.perf-item {
  display: grid;
  grid-template-columns: 80px 1fr 60px;
  align-items: center;
  gap: 15px;
}

.perf-item span:first-child {
  font-size: 14px;
  color: #666;
  font-weight: 600;
}

.perf-bar {
  height: 8px;
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.perf-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
}

.perf-value {
  font-size: 13px;
  font-weight: 700;
  color: #333;
  text-align: right;
}

.recent-activities {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.recent-activities h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 600;
}

.activity-timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.timeline-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-top: 5px;
  flex-shrink: 0;
}

.timeline-dot.success {
  background: #27ae60;
}

.timeline-dot.info {
  background: #3498db;
}

.timeline-dot.warning {
  background: #f39c12;
}

.timeline-content {
  flex: 1;
}

.timeline-title {
  font-size: 14px;
  color: #333;
  font-weight: 600;
  margin: 0 0 5px 0;
}

.timeline-time {
  font-size: 12px;
  color: #999;
  margin: 0;
}

@media (max-width: 768px) {
  .dashboard-page {
    padding: 15px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 20px;
  }

  .stat-card {
    padding: 15px;
    gap: 15px;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 20px;
  }

  .chart-card {
    padding: 15px;
  }

  .page-header h1 {
    font-size: 20px;
  }

  .page-header p {
    font-size: 14px;
  }

  .recent-activities {
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .dashboard-page {
    padding: 10px;
  }

  .stats-grid {
    gap: 10px;
    margin-bottom: 15px;
  }

  .stat-card {
    padding: 12px;
    gap: 10px;
  }

  .stat-icon {
    font-size: 24px;
  }

  .stat-value {
    font-size: 18px;
  }

  .stat-label {
    font-size: 11px;
  }

  .stat-change {
    font-size: 11px;
  }

  .dashboard-grid {
    gap: 10px;
  }

  .chart-card h3 {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .page-header h1 {
    font-size: 18px;
  }

  .recent-activities h3 {
    font-size: 14px;
  }
}
</style>
