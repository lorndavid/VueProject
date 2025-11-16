<template>
  <div id="app">
    <app-header />
    <side-bar :collapsed="sidebarCollapsed" />
    <div class="main-wrapper" :class="{ collapsed: sidebarCollapsed }">
      <app-navbar :page-title="currentPageTitle" />
      <router-view />
      <app-footer />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import SideBar from './components/Sidebar.vue'
import AppNavbar from './components/Navbar.vue'
import AppFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    SideBar,
    AppNavbar,
    AppFooter
  },
  data() {
    return {
      sidebarCollapsed: false
    }
  },
  computed: {
    currentPageTitle() {
      return this.$route.meta?.label || 'Dashboard';
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f8f9fa;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.main-wrapper {
  flex: 1;
  margin-left: 250px;
  margin-top: 80px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  width: calc(100% - 250px);
  height: calc(100vh - 80px);
  overflow: hidden;
}

.main-wrapper.collapsed {
  margin-left: 80px;
  width: calc(100% - 80px);
}

/* Tablet Responsive (768px - 1200px) */
@media (max-width: 1200px) {
  .main-wrapper {
    margin-left: 100px;
    width: calc(100% - 100px);
  }

  .main-wrapper.collapsed {
    margin-left: 80px;
    width: calc(100% - 80px);
  }
}

/* Mobile Responsive (< 768px) */
@media (max-width: 768px) {
  #app {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }

  .main-wrapper {
    margin-left: 0 !important;
    margin-top: 80px;
    width: 100%;
    height: auto;
    min-height: calc(100vh - 80px);
    overflow: visible;
  }

  .main-wrapper.collapsed {
    margin-left: 0 !important;
    width: 100%;
  }
}

/* Phone - No fixed sidebar, off-canvas menu only */
@media (max-width: 480px) {
  #app {
    display: block;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .main-wrapper {
    margin-left: 0 !important;
    margin-top: 60px;
    width: 100%;
    height: calc(100vh - 60px);
    overflow: auto;
    flex-direction: column;
  }

  .main-wrapper.collapsed {
    margin-left: 0 !important;
    width: 100%;
  }
}
</style>
