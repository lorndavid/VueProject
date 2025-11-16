<template>
  <div class="settings-page">
    <div class="page-header">
      <h1>Settings</h1>
      <p>Manage your application preferences and configurations</p>
    </div>

    <div class="settings-container">
      <div class="settings-sidebar">
        <div class="settings-menu">
          <div class="settings-item" 
               v-for="item in settingsMenu" 
               :key="item.id"
               @click="currentTab = item.id"
               :class="{ active: currentTab === item.id }">
            <span class="menu-icon">{{ item.icon }}</span>
            <span class="menu-label">{{ item.label }}</span>
          </div>
        </div>
      </div>

      <div class="settings-content">
        <!-- Account Settings -->
        <div v-if="currentTab === 'account'" class="settings-section">
          <h3>Account Settings</h3>
          <div class="setting-group">
            <div class="setting-item">
              <div class="setting-label">
                <p class="label-title">Email Address</p>
                <p class="label-desc">Change your email address</p>
              </div>
              <input type="email" placeholder="your.email@example.com" class="setting-input">
            </div>
            <div class="setting-item">
              <div class="setting-label">
                <p class="label-title">Phone Number</p>
                <p class="label-desc">Update your contact number</p>
              </div>
              <input type="tel" placeholder="+1 (555) 000-0000" class="setting-input">
            </div>
            <div class="setting-item">
              <div class="setting-label">
                <p class="label-title">Language</p>
                <p class="label-desc">Choose your preferred language</p>
              </div>
              <select class="setting-input">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <button class="btn btn-primary">Save Changes</button>
          </div>
        </div>

        <!-- Privacy & Security -->
        <div v-if="currentTab === 'privacy'" class="settings-section">
          <h3>Privacy & Security</h3>
          <div class="setting-group">
            <div class="setting-toggle">
              <div class="setting-label">
                <p class="label-title">Two-Factor Authentication</p>
                <p class="label-desc">Add an extra layer of security to your account</p>
              </div>
              <label class="toggle-switch">
                <input type="checkbox" v-model="settings.twoFactorAuth">
                <span class="slider"></span>
              </label>
            </div>
            <div class="setting-toggle">
              <div class="setting-label">
                <p class="label-title">Login Notifications</p>
                <p class="label-desc">Get notified of new login attempts</p>
              </div>
              <label class="toggle-switch">
                <input type="checkbox" v-model="settings.loginNotifications">
                <span class="slider"></span>
              </label>
            </div>
            <div class="setting-toggle">
              <div class="setting-label">
                <p class="label-title">Profile Privacy</p>
                <p class="label-desc">Make your profile visible to others</p>
              </div>
              <label class="toggle-switch">
                <input type="checkbox" v-model="settings.profilePrivacy">
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <!-- Notifications -->
        <div v-if="currentTab === 'notifications'" class="settings-section">
          <h3>Notification Preferences</h3>
          <div class="setting-group">
            <div class="setting-toggle">
              <div class="setting-label">
                <p class="label-title">Email Notifications</p>
                <p class="label-desc">Receive email updates and notifications</p>
              </div>
              <label class="toggle-switch">
                <input type="checkbox" v-model="settings.emailNotifications">
                <span class="slider"></span>
              </label>
            </div>
            <div class="setting-toggle">
              <div class="setting-label">
                <p class="label-title">Push Notifications</p>
                <p class="label-desc">Receive push notifications on your devices</p>
              </div>
              <label class="toggle-switch">
                <input type="checkbox" v-model="settings.pushNotifications">
                <span class="slider"></span>
              </label>
            </div>
            <div class="setting-toggle">
              <div class="setting-label">
                <p class="label-title">SMS Alerts</p>
                <p class="label-desc">Get SMS alerts for important updates</p>
              </div>
              <label class="toggle-switch">
                <input type="checkbox" v-model="settings.smsAlerts">
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <!-- Theme & Display -->
        <div v-if="currentTab === 'theme'" class="settings-section">
          <h3>Theme & Display</h3>
          <div class="setting-group">
            <div class="setting-item">
              <div class="setting-label">
                <p class="label-title">Theme</p>
                <p class="label-desc">Choose your preferred theme</p>
              </div>
              <div class="theme-options">
                <button class="theme-btn active">Light</button>
                <button class="theme-btn">Dark</button>
                <button class="theme-btn">Auto</button>
              </div>
            </div>
            <div class="setting-toggle">
              <div class="setting-label">
                <p class="label-title">Compact Mode</p>
                <p class="label-desc">Use a more compact interface</p>
              </div>
              <label class="toggle-switch">
                <input type="checkbox" v-model="settings.compactMode">
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      currentTab: 'account',
      settingsMenu: [
        { id: 'account', icon: '👤', label: 'Account' },
        { id: 'privacy', icon: '🔐', label: 'Privacy & Security' },
        { id: 'notifications', icon: '🔔', label: 'Notifications' },
        { id: 'theme', icon: '🎨', label: 'Theme & Display' }
      ],
      settings: {
        twoFactorAuth: true,
        loginNotifications: true,
        profilePrivacy: true,
        emailNotifications: true,
        pushNotifications: false,
        smsAlerts: false,
        compactMode: false
      }
    }
  }
}
</script>

<style scoped>
.settings-page {
  padding: 30px;
  max-width: 1200px;
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

.settings-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
}

.settings-sidebar {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: fit-content;
}

.settings-menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.settings-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: #666;
  font-weight: 500;
}

.settings-item:hover {
  background: #f8f9fa;
}

.settings-item.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.menu-icon {
  font-size: 18px;
}

.settings-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.settings-section h3 {
  font-size: 22px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 600;
}

.setting-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.setting-item,
.setting-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.setting-label {
  flex: 1;
}

.label-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 5px 0;
}

.label-desc {
  font-size: 13px;
  color: #999;
  margin: 0;
}

.setting-input {
  padding: 10px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  min-width: 250px;
  transition: all 0.3s ease;
}

.setting-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.1);
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  cursor: pointer;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.3s;
  border-radius: 28px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #667eea;
}

input:checked + .slider:before {
  transform: translateX(22px);
}

.theme-options {
  display: flex;
  gap: 10px;
}

.theme-btn {
  padding: 10px 20px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}

.theme-btn:hover {
  border-color: #667eea;
}

.theme-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
}

.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
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
  .settings-page {
    padding: 15px;
  }

  .settings-container {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .settings-sidebar {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 12px;
    gap: 8px;
  }

  .settings-item {
    padding: 10px;
    font-size: 12px;
  }

  .menu-icon {
    font-size: 16px;
  }

  .settings-content {
    padding: 15px;
  }

  .settings-section h3 {
    font-size: 16px;
  }

  .setting-item,
  .setting-toggle {
    padding: 15px;
    flex-direction: column;
    align-items: flex-start;
  }

  .setting-input {
    min-width: 100%;
    margin-top: 10px;
  }

  .page-header h1 {
    font-size: 20px;
  }

  .page-header p {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .settings-page {
    padding: 10px;
  }

  .settings-sidebar {
    grid-template-columns: 1fr;
  }

  .settings-content {
    padding: 12px;
  }

  .settings-section h3 {
    font-size: 14px;
  }

  .setting-group {
    gap: 12px;
  }

  .label-title {
    font-size: 12px;
  }

  .label-desc {
    font-size: 11px;
  }

  .page-header h1 {
    font-size: 18px;
  }
}
</style>
