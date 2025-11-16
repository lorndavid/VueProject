<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="breadcrumb">
        <span>Home</span>
        <span class="separator">›</span>
        <span>{{ pageTitle }}</span>
      </div>
      
      <div class="navbar-actions">
        <button class="btn btn-primary">+ New</button>
        <button class="btn btn-secondary">Export</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  props: {
    pageTitle: {
      type: String,
      default: 'Dashboard'
    }
  }
}
</script>

<style scoped>
.navbar {
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 30px;
  transition: all 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
}

.breadcrumb span:first-child {
  color: #667eea;
  font-weight: 600;
  cursor: pointer;
}

.separator {
  color: #999;
}

.navbar-actions {
  display: flex;
  gap: 10px;
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

.btn-secondary {
  background: #f0f0f0;
  color: #333;
  border: 1px solid #ddd;
}

.btn-secondary:hover {
  background: #e8e8e8;
}

@media (max-width: 768px) {
  .navbar {
    padding: 12px;
  }

  .navbar-content {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  .breadcrumb {
    font-size: 12px;
    width: 100%;
  }

  .navbar-actions {
    display: flex;
    gap: 8px;
    width: 100%;
  }

  .btn {
    padding: 8px 12px;
    font-size: 12px;
    flex: 1;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 10px;
  }

  .breadcrumb {
    font-size: 11px;
  }

  .navbar-actions {
    gap: 5px;
  }

  .btn {
    padding: 6px 10px;
    font-size: 11px;
  }
}
</style>
