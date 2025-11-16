<template>
  <main class="content-area">
    <div class="content-container">
      <div class="welcome-section">
        <h1>Welcome to Dashboard</h1>
        <p>Manage your application with ease and efficiency</p>
      </div>

      <div class="details-grid">
        <div class="detail-card" v-for="card in detailCards" :key="card.id">
          <div class="card-icon">{{ card.icon }}</div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <div class="card-stats">{{ card.stats }}</div>
        </div>
      </div>

      <div class="details-section">
        <h2>System Information</h2>
        <div class="info-grid">
          <div class="info-item">
            <label>Total Users</label>
            <span>1,234</span>
          </div>
          <div class="info-item">
            <label>Active Sessions</label>
            <span>567</span>
          </div>
          <div class="info-item">
            <label>System Status</label>
            <span class="status-good">Healthy</span>
          </div>
          <div class="info-item">
            <label>Uptime</label>
            <span>99.9%</span>
          </div>
        </div>
      </div>

      <div class="details-section">
        <h2>Recent Activities</h2>
        <div class="activity-list">
          <div class="activity-item" v-for="activity in activities" :key="activity.id">
            <div class="activity-icon">{{ activity.icon }}</div>
            <div class="activity-details">
              <p class="activity-title">{{ activity.title }}</p>
              <p class="activity-time">{{ activity.time }}</p>
            </div>
            <span class="activity-badge">{{ activity.status }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContentArea',
  data() {
    return {
      detailCards: [
        {
          id: 1,
          icon: '📈',
          title: 'Performance',
          description: 'System performance metrics',
          stats: '↑ 23% this week'
        },
        {
          id: 2,
          icon: '📊',
          title: 'Analytics',
          description: 'Detailed analytics dashboard',
          stats: '↑ 15% vs last month'
        },
        {
          id: 3,
          icon: '🔐',
          title: 'Security',
          description: 'Security and compliance',
          stats: '100% Secure'
        },
        {
          id: 4,
          icon: '⚡',
          title: 'Performance',
          description: 'Speed and optimization',
          stats: 'Average 2.3s'
        }
      ],
      activities: [
        { id: 1, icon: '✅', title: 'Backup completed successfully', time: '2 hours ago', status: 'Completed' },
        { id: 2, icon: '🔄', title: 'System update in progress', time: '30 minutes ago', status: 'In Progress' },
        { id: 3, icon: '⚠️', title: 'High memory usage detected', time: '1 hour ago', status: 'Warning' },
        { id: 4, icon: '✅', title: 'Database optimization finished', time: '3 hours ago', status: 'Completed' }
      ]
    }
  }
}
</script>

<style scoped>
.content-area {
  margin-left: 250px;
  margin-top: 80px;
  min-height: calc(100vh - 80px - 100px);
  transition: all 0.3s ease;
  padding: 30px;
  background: #f8f9fa;
}

.content-area.collapsed {
  margin-left: 80px;
}

.content-container {
  max-width: 1200px;
}

.welcome-section {
  margin-bottom: 40px;
}

.welcome-section h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 700;
}

.welcome-section p {
  font-size: 16px;
  color: #666;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.detail-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.detail-card h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 600;
}

.detail-card p {
  font-size: 14px;
  color: #999;
  margin-bottom: 15px;
}

.card-stats {
  font-size: 14px;
  color: #667eea;
  font-weight: 600;
}

.details-section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.details-section h2 {
  font-size: 22px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 700;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.info-item {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.info-item label {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  font-weight: 600;
}

.info-item span {
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.status-good {
  color: #27ae60;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.activity-item:hover {
  background: #f0f1f5;
}

.activity-icon {
  font-size: 24px;
  min-width: 40px;
}

.activity-details {
  flex: 1;
}

.activity-title {
  font-size: 14px;
  color: #333;
  font-weight: 600;
  margin: 0;
}

.activity-time {
  font-size: 12px;
  color: #999;
  margin: 5px 0 0 0;
}

.activity-badge {
  font-size: 12px;
  padding: 4px 12px;
  background: #e8f5e9;
  color: #27ae60;
  border-radius: 20px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .content-area {
    margin-left: 0;
    padding: 15px;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .welcome-section h1 {
    font-size: 24px;
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
