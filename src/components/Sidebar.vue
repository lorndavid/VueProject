<template>
  <aside class="sidebar" :class="{ collapsed: collapsed, 'mobile-collapsed': mobileMenuCollapsed }">
    <div class="sidebar-toggle" @click="$emit('toggle')">
      <i class="icon">☰</i>
    </div>
    
    <!-- Mobile Menu Expand Button -->
    <button class="mobile-expand-btn" @click="mobileMenuCollapsed = !mobileMenuCollapsed" v-if="isMobile">
      <span class="expand-icon">{{ mobileMenuCollapsed ? '→' : '←' }}</span>
    </button>
    
    <!-- Overlay for mobile menu -->
    <div class="mobile-overlay" v-if="!mobileMenuCollapsed && isMobile" @click="mobileMenuCollapsed = true"></div>
    
    <nav class="sidebar-nav">
      <router-link 
        v-for="item in menuItems" 
        :key="item.id"
        :to="item.path"
        class="nav-item"
        active-class="active"
        @click="handleNavClick">
        <div class="nav-icon">{{ item.icon }}</div>
        <span class="nav-label">{{ item.label }}</span>
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuItems: [
        { id: 1, icon: '🏠', label: 'Dashboard', path: '/' },
        { id: 2, icon: '👤', label: 'Profile', path: '/profile' },
        { id: 3, icon: '⚙️', label: 'Settings', path: '/settings' },
        { id: 4, icon: '📊', label: 'Analytics', path: '/analytics' },
        { id: 5, icon: '📁', label: 'Files', path: '/files' },
        { id: 6, icon: '🔔', label: 'Notifications', path: '/notifications' },
        { id: 7, icon: '❓', label: 'Help', path: '/help' }
      ],
      mobileMenuCollapsed: true,
      isMobile: false
    }
  },
  mounted() {
    this.checkMobileSize();
    window.addEventListener('resize', this.checkMobileSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileSize);
  },
  methods: {
    checkMobileSize() {
      this.isMobile = window.innerWidth <= 480;
    },
    handleNavClick() {
      // Close mobile menu after clicking on a link
      if (this.isMobile) {
        this.mobileMenuCollapsed = true;
      }
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.3s ease;
  overflow-y: auto;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  padding-top: 80px;
  color: white;
  z-index: 900;
}

.sidebar.collapsed {
  width: 80px;
}

.sidebar-toggle {
  position: fixed;
  top: 20px;
  left: 15px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
}

.sidebar-toggle:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.icon {
  font-size: 20px;
  color: white;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 15px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
  color: white;
}

.nav-item.active {
  background: rgba(255, 255, 255, 0.25);
  color: white;
  font-weight: 600;
  border-left: 3px solid white;
  padding-left: 12px;
}

.nav-icon {
  font-size: 20px;
  min-width: 30px;
  text-align: center;
}

.nav-label {
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.sidebar.collapsed .nav-label {
  display: none;
}

.sidebar.collapsed .nav-item.active {
  border-left: none;
  padding-left: 15px;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Mobile Expand Button */
.mobile-expand-btn {
  display: none;
  position: absolute;
  top: 12px;
  right: -40px;
  width: 35px;
  height: 35px;
  background: rgba(102, 126, 234, 0.9);
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: all 0.3s ease;
}

.mobile-expand-btn:hover {
  background: rgba(102, 126, 234, 1);
  transform: scale(1.1);
}

.expand-icon {
  font-size: 18px;
  color: white;
  font-weight: bold;
}

.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 850;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .sidebar {
    width: 70px;
    padding-top: 70px;
    box-shadow: 1px 0 5px rgba(0, 0, 0, 0.1);
  }

  .sidebar.collapsed {
    width: 70px;
  }

  .sidebar-toggle {
    top: 15px;
    left: 10px;
    width: 35px;
    height: 35px;
  }

  .icon {
    font-size: 16px;
  }

  .sidebar-nav {
    gap: 10px;
    padding: 15px 5px;
  }

  .nav-item {
    padding: 10px 12px;
    gap: 10px;
    justify-content: center;
  }

  .nav-item.active {
    border-left: none;
    border-bottom: 3px solid white;
    padding-left: 12px;
  }

  .nav-icon {
    font-size: 18px;
    min-width: 24px;
  }

  .nav-label {
    display: none;
  }
}

/* Mobile Phone - Off-Canvas Menu */
@media (max-width: 480px) {
  .sidebar {
    width: 60px;
    padding-top: 65px;
    position: static;
    height: auto;
    background: transparent;
    box-shadow: none;
  }

  .sidebar-toggle {
    display: none;
  }

  .mobile-expand-btn {
    display: flex;
  }

  .sidebar.mobile-collapsed {
    width: 60px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 1px 0 5px rgba(0, 0, 0, 0.1);
  }

  .sidebar.mobile-collapsed .sidebar-nav {
    gap: 8px;
    padding: 10px 3px;
  }

  .sidebar.mobile-collapsed .nav-item {
    padding: 8px 10px;
    justify-content: center;
    font-size: 0;
  }

  .sidebar.mobile-collapsed .nav-label {
    display: none;
  }

  /* Expanded state - full off-canvas menu */
  .sidebar:not(.mobile-collapsed) {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    padding-top: 50px;
    z-index: 950;
    overflow-y: auto;
  }

  .sidebar:not(.mobile-collapsed) .mobile-expand-btn {
    right: 15px;
    top: 12px;
  }

  .sidebar:not(.mobile-collapsed) .sidebar-nav {
    gap: 12px;
    padding: 20px 15px;
  }

  .sidebar:not(.mobile-collapsed) .nav-item {
    padding: 12px 15px;
    justify-content: flex-start;
    gap: 15px;
  }

  .sidebar:not(.mobile-collapsed) .nav-item.active {
    border-left: 3px solid white;
    border-bottom: none;
    padding-left: 12px;
  }

  .sidebar:not(.mobile-collapsed) .nav-label {
    display: block;
    font-size: 14px;
  }

  .sidebar:not(.mobile-collapsed) .nav-icon {
    font-size: 20px;
    min-width: 30px;
  }

  .mobile-overlay {
    display: block;
  }

  .icon {
    font-size: 14px;
  }

  .nav-item {
    padding: 8px 10px;
  }

  .nav-icon {
    font-size: 16px;
  }
}
</style>
