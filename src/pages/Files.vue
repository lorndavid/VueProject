<template>
  <div class="files-page">
    <div class="page-header">
      <h1>File Manager</h1>
      <p>Organize and manage your files efficiently</p>
    </div>

    <div class="files-toolbar">
      <div class="search-box">
        <input type="text" placeholder="Search files..." v-model="searchQuery">
      </div>
      <div class="toolbar-actions">
        <button class="btn btn-secondary">📤 Upload</button>
        <button class="btn btn-secondary">➕ New Folder</button>
        <button class="btn btn-primary" @click="viewMode = viewMode === 'grid' ? 'list' : 'grid'">
          {{ viewMode === 'grid' ? '≡ List' : '⊟ Grid' }}
        </button>
      </div>
    </div>

    <div class="breadcrumb">
      <span>My Files</span>
      <span>›</span>
      <span>Documents</span>
    </div>

    <div v-if="viewMode === 'grid'" class="files-grid">
      <div class="file-card" v-for="file in filteredFiles" :key="file.id" @click="selectFile(file)" :class="{ selected: selectedFile?.id === file.id }">
        <div class="file-icon">{{ file.icon }}</div>
        <p class="file-name">{{ file.name }}</p>
        <p class="file-size">{{ file.size }}</p>
        <p class="file-date">{{ file.date }}</p>
      </div>
    </div>

    <div v-else class="files-list">
      <div class="list-header">
        <div class="col-name">Name</div>
        <div class="col-size">Size</div>
        <div class="col-type">Type</div>
        <div class="col-date">Modified</div>
      </div>
      <div class="list-item" v-for="file in filteredFiles" :key="file.id" @click="selectFile(file)" :class="{ selected: selectedFile?.id === file.id }">
        <div class="col-name">
          <span class="file-icon">{{ file.icon }}</span>
          <span>{{ file.name }}</span>
        </div>
        <div class="col-size">{{ file.size }}</div>
        <div class="col-type">{{ file.type }}</div>
        <div class="col-date">{{ file.date }}</div>
      </div>
    </div>

    <div v-if="selectedFile" class="file-details">
      <h3>File Details</h3>
      <div class="details-grid">
        <div class="detail-item">
          <label>Name</label>
          <p>{{ selectedFile.name }}</p>
        </div>
        <div class="detail-item">
          <label>Size</label>
          <p>{{ selectedFile.size }}</p>
        </div>
        <div class="detail-item">
          <label>Type</label>
          <p>{{ selectedFile.type }}</p>
        </div>
        <div class="detail-item">
          <label>Modified</label>
          <p>{{ selectedFile.date }}</p>
        </div>
        <div class="detail-item">
          <label>Created</label>
          <p>{{ selectedFile.created }}</p>
        </div>
        <div class="detail-item">
          <label>Owner</label>
          <p>{{ selectedFile.owner }}</p>
        </div>
      </div>
      <div class="details-actions">
        <button class="btn btn-primary">📥 Download</button>
        <button class="btn btn-secondary">✏️ Rename</button>
        <button class="btn btn-secondary">🗑️ Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilesPage',
  data() {
    return {
      viewMode: 'grid',
      searchQuery: '',
      selectedFile: null,
      files: [
        { id: 1, icon: '📄', name: 'Project Proposal.pdf', size: '2.4 MB', type: 'PDF', date: '2025-11-15', created: '2025-11-01', owner: 'You' },
        { id: 2, icon: '📊', name: 'Q4 Analytics.xlsx', size: '1.8 MB', type: 'Excel', date: '2025-11-14', created: '2025-10-15', owner: 'You' },
        { id: 3, icon: '🎨', name: 'Design Assets', size: '145 MB', type: 'Folder', date: '2025-11-12', created: '2025-09-01', owner: 'You' },
        { id: 4, icon: '📝', name: 'Meeting Notes.docx', size: '542 KB', type: 'Document', date: '2025-11-13', created: '2025-11-10', owner: 'You' },
        { id: 5, icon: '🎬', name: 'Demo Video.mp4', size: '456 MB', type: 'Video', date: '2025-11-11', created: '2025-11-05', owner: 'You' },
        { id: 6, icon: '🔊', name: 'Podcast Episode.mp3', size: '87 MB', type: 'Audio', date: '2025-11-10', created: '2025-11-08', owner: 'You' },
        { id: 7, icon: '📑', name: 'Presentation.pptx', size: '5.2 MB', type: 'Presentation', date: '2025-11-09', created: '2025-11-01', owner: 'You' },
        { id: 8, icon: '🗂️', name: 'Archives', size: '2.1 GB', type: 'Folder', date: '2025-11-08', created: '2025-08-01', owner: 'You' }
      ]
    }
  },
  computed: {
    filteredFiles() {
      return this.files.filter(file => 
        file.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    selectFile(file) {
      this.selectedFile = this.selectedFile?.id === file.id ? null : file;
    }
  }
}
</script>

<style scoped>
.files-page {
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

.files-toolbar {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  align-items: center;
}

.search-box {
  flex: 1;
}

.search-box input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.search-box input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.1);
}

.toolbar-actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 15px;
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

.breadcrumb {
  font-size: 13px;
  color: #999;
  margin-bottom: 20px;
  padding: 10px 15px;
  background: white;
  border-radius: 6px;
}

.breadcrumb span {
  margin: 0 8px;
}

.files-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.file-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  border: 2px solid transparent;
}

.file-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.file-card.selected {
  border-color: #667eea;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
}

.file-icon {
  font-size: 40px;
  margin-bottom: 10px;
}

.file-name {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
  word-break: break-word;
}

.file-size {
  font-size: 12px;
  color: #999;
  margin-bottom: 5px;
}

.file-date {
  font-size: 11px;
  color: #bbb;
  margin: 0;
}

.files-list {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
}

.list-header {
  display: grid;
  grid-template-columns: 2fr 150px 150px 150px;
  gap: 20px;
  padding: 15px 20px;
  border-bottom: 2px solid #e0e0e0;
  font-weight: 600;
  color: #666;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.list-item {
  display: grid;
  grid-template-columns: 2fr 150px 150px 150px;
  gap: 20px;
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.list-item:hover {
  background: #f8f9fa;
}

.list-item.selected {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-left-color: #667eea;
}

.col-name {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  color: #333;
}

.file-icon {
  font-size: 20px;
}

.col-size,
.col-type,
.col-date {
  font-size: 14px;
  color: #666;
}

.file-details {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.file-details h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 600;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 25px;
}

.detail-item label {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}

.detail-item p {
  font-size: 14px;
  color: #333;
  margin: 0;
  font-weight: 500;
}

.details-actions {
  display: flex;
  gap: 10px;
}

@media (max-width: 768px) {
  .files-page {
    padding: 15px;
  }

  .files-toolbar {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    padding: 12px;
  }

  .search-box input {
    padding: 8px;
    font-size: 12px;
  }

  .toolbar-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .toolbar-actions .btn {
    flex: 1;
    min-width: 100px;
    padding: 8px;
    font-size: 12px;
  }

  .breadcrumb {
    padding: 8px;
    font-size: 12px;
  }

  .files-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 12px;
    padding: 12px 0;
  }

  .file-card {
    padding: 12px;
  }

  .file-icon {
    font-size: 24px;
  }

  .file-name {
    font-size: 12px;
  }

  .file-size,
  .file-date {
    font-size: 10px;
  }

  .list-header {
    grid-template-columns: 2fr 1fr 1fr;
    font-size: 12px;
    padding: 8px;
  }

  .list-item {
    grid-template-columns: 2fr 1fr 1fr;
    font-size: 11px;
    padding: 8px;
  }

  .col-type,
  .col-date {
    display: none;
  }

  .page-header h1 {
    font-size: 20px;
  }

  .page-header p {
    font-size: 12px;
  }

  .sidebar {
    display: none;
  }

  .details-actions .btn {
    padding: 8px;
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .files-page {
    padding: 10px;
  }

  .files-toolbar {
    gap: 8px;
    padding: 10px;
  }

  .search-box input {
    padding: 8px;
    font-size: 12px;
    width: 100%;
  }

  .toolbar-actions {
    gap: 6px;
  }

  .toolbar-actions .btn {
    min-width: 80px;
    padding: 8px 6px;
    font-size: 11px;
  }

  .breadcrumb {
    padding: 8px;
    font-size: 11px;
    overflow-x: auto;
    white-space: nowrap;
  }

  .files-grid {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 10px;
    padding: 10px 0;
  }

  .file-card {
    padding: 10px;
  }

  .file-icon {
    font-size: 20px;
  }

  .file-name {
    font-size: 11px;
  }

  .file-size,
  .file-date {
    font-size: 9px;
  }

  .list-header {
    grid-template-columns: 1fr;
    font-size: 11px;
    padding: 8px;
    display: none;
  }

  .list-item {
    grid-template-columns: 1fr;
    font-size: 10px;
    padding: 8px;
    border-bottom: 1px solid #eee;
  }

  .col-name {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .col-size,
  .col-type,
  .col-date {
    display: none;
  }

  .page-header h1 {
    font-size: 18px;
  }

  .page-header p {
    font-size: 11px;
  }

  .detail-item {
    margin-bottom: 8px;
  }

  .detail-item p {
    font-size: 12px;
  }

  .details-actions {
    flex-direction: column;
  }

  .details-actions .btn {
    width: 100%;
    padding: 10px;
    font-size: 12px;
  }
}
</style>
