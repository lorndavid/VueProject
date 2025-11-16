<template>
  <div class="notifications-page">
    <div class="page-header">
      <h1>Notifications</h1>
      <p>Stay updated with your system alerts and messages</p>
    </div>

    <div class="notifications-controls">
      <div class="filter-tabs">
        <button class="tab" 
                v-for="filter in filters" 
                :key="filter"
                @click="activeFilter = filter"
                :class="{ active: activeFilter === filter }">
          {{ filter }}
        </button>
      </div>
      <button class="btn btn-secondary" @click="clearAll">Clear All</button>
    </div>

    <div class="notifications-list">
      <div class="notification-item" 
           v-for="notification in filteredNotifications" 
           :key="notification.id"
           :class="[notification.type, { unread: !notification.read }]"
           @click="toggleRead(notification)">
        <div class="notification-icon">{{ notification.icon }}</div>
        <div class="notification-content">
          <p class="notification-title">{{ notification.title }}</p>
          <p class="notification-message">{{ notification.message }}</p>
          <p class="notification-time">{{ notification.time }}</p>
        </div>
        <div class="notification-actions">
          <button class="action-btn" @click.stop="deleteNotification(notification)">✕</button>
        </div>
      </div>

      <div v-if="filteredNotifications.length === 0" class="empty-state">
        <p>📭 No notifications</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationsPage',
  data() {
    return {
      activeFilter: 'All',
      filters: ['All', 'Unread', 'Success', 'Warning', 'Error'],
      notifications: [
        { id: 1, icon: '✅', type: 'success', title: 'Backup Completed', message: 'Your system backup has been completed successfully.', time: '5 minutes ago', read: false },
        { id: 2, icon: '⚠️', type: 'warning', title: 'High Memory Usage', message: 'Memory usage has exceeded 80% threshold.', time: '15 minutes ago', read: false },
        { id: 3, icon: '🔄', type: 'info', title: 'System Update Available', message: 'A new update is available for your system. Please update at your convenience.', time: '1 hour ago', read: true },
        { id: 4, icon: '❌', type: 'error', title: 'Failed Login Attempt', message: 'A failed login attempt was detected from IP 192.168.1.100', time: '2 hours ago', read: true },
        { id: 5, icon: '✅', type: 'success', title: 'File Upload Complete', message: 'Your files have been successfully uploaded to the server.', time: '3 hours ago', read: true },
        { id: 6, icon: '📧', type: 'info', title: 'New Message', message: 'You have received a new message from Admin.', time: '4 hours ago', read: true },
        { id: 7, icon: '🔐', type: 'warning', title: 'Security Alert', message: 'Unusual activity detected on your account. Please verify your recent activities.', time: '5 hours ago', read: true },
        { id: 8, icon: '✅', type: 'success', title: 'Profile Updated', message: 'Your profile information has been successfully updated.', time: '1 day ago', read: true }
      ]
    }
  },
  computed: {
    filteredNotifications() {
      return this.notifications.filter(notif => {
        if (this.activeFilter === 'All') return true;
        if (this.activeFilter === 'Unread') return !notif.read;
        return notif.type.toLowerCase().includes(this.activeFilter.toLowerCase());
      });
    }
  },
  methods: {
    toggleRead(notification) {
      notification.read = !notification.read;
    },
    deleteNotification(notification) {
      const index = this.notifications.findIndex(n => n.id === notification.id);
      if (index > -1) {
        this.notifications.splice(index, 1);
      }
    },
    clearAll() {
      this.notifications = this.notifications.filter(n => n.read);
    }
  }
}
</script>

<style scoped>
.notifications-page {
  padding: 30px;
  max-width: 900px;
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

.notifications-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.filter-tabs {
  display: flex;
  gap: 10px;
}

.tab {
  padding: 10px 20px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  color: #666;
}

.tab:hover {
  border-color: #667eea;
  color: #667eea;
}

.tab.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
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

.btn-secondary {
  background: #f0f0f0;
  color: #333;
}

.btn-secondary:hover {
  background: #e8e8e8;
}

.notifications-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.notification-item {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid #e0e0e0;
}

.notification-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.notification-item.unread {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-left-color: #667eea;
}

.notification-item.success {
  border-left-color: #27ae60;
}

.notification-item.warning {
  border-left-color: #f39c12;
}

.notification-item.error {
  border-left-color: #e74c3c;
}

.notification-item.info {
  border-left-color: #3498db;
}

.notification-icon {
  font-size: 28px;
  min-width: 40px;
}

.notification-content {
  flex: 1;
}

.notification-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 0 0 5px 0;
}

.notification-message {
  font-size: 14px;
  color: #666;
  margin: 0 0 10px 0;
}

.notification-time {
  font-size: 12px;
  color: #999;
  margin: 0;
}

.notification-actions {
  display: flex;
  align-items: center;
}

.action-btn {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
}

.action-btn:hover {
  color: #e74c3c;
  transform: scale(1.2);
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
  font-size: 18px;
}

@media (max-width: 768px) {
  .notifications-page {
    padding: 15px;
  }

  .notifications-controls {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    padding: 12px;
  }

  .filter-tabs {
    flex-wrap: wrap;
    gap: 8px;
  }

  .filter-tabs button {
    padding: 8px 12px;
    font-size: 12px;
  }

  .notification-item {
    padding: 12px;
    gap: 10px;
  }

  .notification-icon {
    font-size: 20px;
    min-width: 24px;
  }

  .notification-content h4 {
    font-size: 13px;
  }

  .notification-content p {
    font-size: 11px;
  }

  .notification-time {
    font-size: 10px;
  }

  .action-btn {
    font-size: 16px;
    padding: 4px;
  }

  .page-header h1 {
    font-size: 20px;
  }

  .page-header p {
    font-size: 12px;
  }

  .empty-state {
    padding: 40px 20px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .notifications-page {
    padding: 10px;
  }

  .notifications-controls {
    gap: 8px;
    padding: 10px;
  }

  .filter-tabs {
    gap: 6px;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 8px;
  }

  .filter-tabs button {
    padding: 8px 10px;
    font-size: 11px;
    min-width: fit-content;
  }

  .notification-item {
    padding: 10px;
    flex-direction: column;
    gap: 8px;
  }

  .notification-item.unread {
    padding: 10px;
    border-left-width: 3px;
  }

  .notification-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }

  .notification-icon {
    font-size: 18px;
    min-width: 20px;
  }

  .notification-content {
    flex: 1;
  }

  .notification-content h4 {
    font-size: 12px;
    margin-bottom: 4px;
  }

  .notification-content p {
    font-size: 10px;
    line-height: 1.4;
  }

  .notification-time {
    font-size: 9px;
    white-space: nowrap;
  }

  .action-btn {
    font-size: 14px;
    padding: 4px;
    align-self: flex-end;
  }

  .page-header h1 {
    font-size: 18px;
  }

  .page-header p {
    font-size: 11px;
  }

  .empty-state {
    padding: 30px 15px;
    font-size: 14px;
  }
}
</style>
