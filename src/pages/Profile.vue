<template>
  <div class="profile-page">
    <div class="page-header">
      <h1>User Profile</h1>
      <p>Manage your personal information and account settings</p>
    </div>

    <div class="profile-layout">
      <div class="profile-sidebar">
        <div class="profile-card">
          <div class="avatar-large">👤</div>
          <h2>{{ userProfile.name }}</h2>
          <p class="user-role">{{ userProfile.role }}</p>
          <p class="user-email">{{ userProfile.email }}</p>
          <button class="btn btn-primary" @click="toggleEditMode">
            {{ editMode ? 'Cancel' : 'Edit Profile' }}
          </button>
        </div>

        <div class="profile-stats">
          <div class="profile-stat">
            <span class="stat-num">{{ userProfile.postsCount }}</span>
            <span class="stat-label">Posts</span>
          </div>
          <div class="profile-stat">
            <span class="stat-num">{{ userProfile.followersCount }}</span>
            <span class="stat-label">Followers</span>
          </div>
          <div class="profile-stat">
            <span class="stat-num">{{ userProfile.followingCount }}</span>
            <span class="stat-label">Following</span>
          </div>
        </div>
      </div>

      <div class="profile-main">
        <div class="profile-section">
          <h3>Personal Information</h3>
          <div v-if="!editMode" class="info-grid">
            <div class="info-item">
              <label>Full Name</label>
              <p>{{ userProfile.name }}</p>
            </div>
            <div class="info-item">
              <label>Email Address</label>
              <p>{{ userProfile.email }}</p>
            </div>
            <div class="info-item">
              <label>Phone Number</label>
              <p>{{ userProfile.phone }}</p>
            </div>
            <div class="info-item">
              <label>Location</label>
              <p>{{ userProfile.location }}</p>
            </div>
            <div class="info-item">
              <label>Department</label>
              <p>{{ userProfile.department }}</p>
            </div>
            <div class="info-item">
              <label>Joined Date</label>
              <p>{{ userProfile.joinedDate }}</p>
            </div>
          </div>

          <div v-else class="edit-form">
            <div class="form-group">
              <label>Full Name</label>
              <input v-model="editedProfile.name" type="text" placeholder="Enter full name">
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input v-model="editedProfile.email" type="email" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label>Phone Number</label>
              <input v-model="editedProfile.phone" type="tel" placeholder="Enter phone number">
            </div>
            <div class="form-group">
              <label>Location</label>
              <input v-model="editedProfile.location" type="text" placeholder="Enter location">
            </div>
            <div class="form-group">
              <label>Department</label>
              <input v-model="editedProfile.department" type="text" placeholder="Enter department">
            </div>
            <div class="form-actions">
              <button class="btn btn-primary" @click="saveProfile">Save Changes</button>
              <button class="btn btn-secondary" @click="editMode = false">Cancel</button>
            </div>
          </div>
        </div>

        <div class="profile-section">
          <h3>Recent Activity</h3>
          <div class="activity-list">
            <div class="activity-item" v-for="activity in userProfile.recentActivity" :key="activity.id">
              <div class="activity-date">{{ activity.date }}</div>
              <div class="activity-desc">{{ activity.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      editMode: false,
      userProfile: {
        name: 'John Anderson',
        email: 'john.anderson@example.com',
        phone: '+1 234 567 8900',
        location: 'San Francisco, CA',
        department: 'Engineering',
        role: 'Senior Developer',
        joinedDate: 'January 15, 2022',
        postsCount: 128,
        followersCount: 1234,
        followingCount: 567,
        recentActivity: [
          { id: 1, date: '2025-11-15', description: 'Updated profile picture' },
          { id: 2, date: '2025-11-14', description: 'Changed password' },
          { id: 3, date: '2025-11-12', description: 'Enabled two-factor authentication' },
          { id: 4, date: '2025-11-10', description: 'Updated personal information' }
        ]
      },
      editedProfile: {}
    }
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
      if (this.editMode) {
        this.editedProfile = { ...this.userProfile };
      }
    },
    saveProfile() {
      this.userProfile = { ...this.userProfile, ...this.editedProfile };
      this.editMode = false;
      alert('Profile updated successfully!');
    }
  }
}
</script>

<style scoped>
.profile-page {
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

.profile-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
}

.profile-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.avatar-large {
  font-size: 80px;
  margin-bottom: 20px;
}

.profile-card h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 5px;
  font-weight: 700;
}

.user-role {
  font-size: 14px;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 5px;
}

.user-email {
  font-size: 13px;
  color: #999;
  margin-bottom: 20px;
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.profile-stat {
  text-align: center;
  padding: 15px;
}

.stat-num {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 5px;
}

.stat-label {
  display: block;
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.profile-main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile-section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.profile-section h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 600;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.info-item label {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

.info-item p {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  margin: 0;
}

.edit-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.form-group input {
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.1);
}

.form-actions {
  grid-column: 1 / -1;
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.activity-item {
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.activity-date {
  font-size: 12px;
  color: #999;
  margin-bottom: 5px;
  font-weight: 600;
}

.activity-desc {
  font-size: 14px;
  color: #333;
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
  width: 100%;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: #f0f0f0;
  color: #333;
}

.btn-secondary:hover {
  background: #e8e8e8;
}

@media (max-width: 768px) {
  .profile-page {
    padding: 15px;
  }

  .profile-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .profile-card {
    padding: 20px;
  }

  .profile-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 15px;
  }

  .stat-num {
    font-size: 18px;
  }

  .stat-label {
    font-size: 10px;
  }

  .info-grid,
  .edit-form {
    grid-template-columns: 1fr;
  }

  .profile-section {
    padding: 15px;
  }

  .page-header h1 {
    font-size: 20px;
  }

  .page-header p {
    font-size: 13px;
  }

  .profile-card h2 {
    font-size: 18px;
  }

  .avatar-large {
    font-size: 60px;
  }
}

@media (max-width: 480px) {
  .profile-page {
    padding: 10px;
  }

  .profile-layout {
    gap: 15px;
  }

  .profile-card {
    padding: 15px;
  }

  .profile-stats {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 18px;
  }

  .profile-card h2 {
    font-size: 16px;
  }

  .avatar-large {
    font-size: 50px;
  }

  .info-item label,
  .form-group label {
    font-size: 11px;
  }

  .info-item p {
    font-size: 14px;
  }

  .form-group input {
    padding: 10px;
    font-size: 13px;
  }
}
</style>
