<template>
  <header class="header">
    <div class="header-content">
      <div class="logo-section">
        <div class="logo">🚀</div>
        <div class="app-name">MyApp</div>
      </div>
      
      <div class="header-actions">
        <div class="search-bar">
          <input type="text" placeholder="Search...">
        </div>
        <div class="user-profile">
          <div class="notification-bell">🔔</div>
          <div class="user-avatar">👤</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: white;
  border-bottom: 2px solid #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  align-items: center;
}

.header-content {
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 80px;
}

.logo {
  font-size: 32px;
}

.app-name {
  font-size: 22px;
  font-weight: 700;
  color: #333;
  letter-spacing: 0.5px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search-bar {
  width: 250px;
}

.search-bar input {
  width: 100%;
  padding: 10px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.search-bar input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.1);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 15px;
}

.notification-bell,
.user-avatar {
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.notification-bell:hover,
.user-avatar:hover {
  transform: scale(1.15);
}

@media (max-width: 768px) {
  .header {
    height: 70px;
    padding: 0 15px;
  }

  .header-content {
    padding: 0 10px;
    gap: 10px;
  }

  .logo-section {
    margin-left: 0;
    gap: 8px;
  }

  .logo {
    font-size: 24px;
  }

  .app-name {
    font-size: 16px;
    display: none;
  }

  .search-bar {
    display: none;
  }

  .header-actions {
    gap: 10px;
  }

  .notification-bell,
  .user-avatar {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .header {
    height: 60px;
  }

  .logo {
    font-size: 20px;
  }

  .notification-bell,
  .user-avatar {
    font-size: 16px;
  }
}
</style>
