<template>
  <div class="help-page">
    <div class="page-header">
      <h1>Help & Support</h1>
      <p>Find answers and get support for your questions</p>
    </div>

    <div class="help-search">
      <input type="text" placeholder="Search for help..." v-model="searchQuery">
    </div>

    <div class="help-container">
      <div class="help-section">
        <h3>📚 Frequently Asked Questions</h3>
        <div class="faq-list">
          <div class="faq-item" v-for="faq in filteredFaqs" :key="faq.id">
            <div class="faq-question" @click="toggleFaq(faq)">
              <span class="toggle-icon">{{ faq.open ? '▼' : '▶' }}</span>
              <p>{{ faq.question }}</p>
            </div>
            <div class="faq-answer" v-if="faq.open">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="help-section">
        <h3>🔧 Troubleshooting</h3>
        <div class="troubleshooting-list">
          <div class="troubleshooting-item" v-for="item in troubleshooting" :key="item.id">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <button class="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>

      <div class="help-section">
        <h3>📞 Contact Support</h3>
        <div class="contact-info">
          <div class="contact-method">
            <div class="contact-icon">✉️</div>
            <div class="contact-details">
              <p class="contact-title">Email Support</p>
              <p class="contact-value">support@myapp.com</p>
              <p class="contact-desc">Response time: Within 24 hours</p>
            </div>
          </div>

          <div class="contact-method">
            <div class="contact-icon">💬</div>
            <div class="contact-details">
              <p class="contact-title">Live Chat</p>
              <p class="contact-value">Available 9 AM - 6 PM</p>
              <p class="contact-desc">Click the chat icon at bottom right</p>
            </div>
          </div>

          <div class="contact-method">
            <div class="contact-icon">📱</div>
            <div class="contact-details">
              <p class="contact-title">Phone Support</p>
              <p class="contact-value">+1 (555) 123-4567</p>
              <p class="contact-desc">Available 9 AM - 6 PM (EST)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="help-section">
        <h3>📖 Documentation</h3>
        <div class="docs-grid">
          <a href="#" class="doc-card">
            <div class="doc-icon">📘</div>
            <h4>Getting Started</h4>
            <p>Learn the basics and get up and running quickly</p>
          </a>
          <a href="#" class="doc-card">
            <div class="doc-icon">🔒</div>
            <h4>Security Guide</h4>
            <p>Best practices for securing your account</p>
          </a>
          <a href="#" class="doc-card">
            <div class="doc-icon">⚙️</div>
            <h4>Configuration</h4>
            <p>Configure the system to your needs</p>
          </a>
          <a href="#" class="doc-card">
            <div class="doc-icon">🎓</div>
            <h4>Tutorials</h4>
            <p>Step-by-step guides and video tutorials</p>
          </a>
        </div>
      </div>

      <div class="help-section">
        <h3>💡 Tips & Tricks</h3>
        <div class="tips-list">
          <div class="tip-card" v-for="tip in tips" :key="tip.id">
            <div class="tip-icon">{{ tip.icon }}</div>
            <div class="tip-content">
              <h4>{{ tip.title }}</h4>
              <p>{{ tip.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelpPage',
  data() {
    return {
      searchQuery: '',
      faqs: [
        { id: 1, question: 'How do I reset my password?', answer: 'Go to Settings > Privacy & Security and click "Change Password". Follow the prompts to set a new password.', open: false },
        { id: 2, question: 'How do I upload files?', answer: 'Click the Upload button in the File Manager. You can drag and drop files or browse your computer to select files.', open: false },
        { id: 3, question: 'How do I enable two-factor authentication?', answer: 'Go to Settings > Privacy & Security and toggle on "Two-Factor Authentication". You\'ll need to scan a QR code with your authenticator app.', open: false },
        { id: 4, question: 'How do I export my data?', answer: 'Go to Settings > Account and click the Export button. Choose the format you prefer (CSV, PDF, or JSON) and your data will be downloaded.', open: false },
        { id: 5, question: 'What file formats are supported?', answer: 'We support most common file formats including PDF, DOC, XLS, PNG, JPG, MP4, and more. Maximum file size is 5GB.', open: false }
      ],
      troubleshooting: [
        { id: 1, title: 'Can\'t Login?', description: 'If you\'re unable to login, try resetting your password or clearing your browser cache.' },
        { id: 2, title: 'Slow Performance?', description: 'Clear browser cache, disable extensions, or try a different browser. Contact support if issues persist.' },
        { id: 3, title: 'File Upload Issues?', description: 'Check file size limits, file format support, and internet connection. Try uploading smaller files first.' },
        { id: 4, title: 'Notifications Not Working?', description: 'Ensure notifications are enabled in your browser settings and account settings.' }
      ],
      tips: [
        { id: 1, icon: '⌨️', title: 'Keyboard Shortcuts', description: 'Use Ctrl+F to search, Ctrl+S to save, and Ctrl+Shift+? to view all shortcuts.' },
        { id: 2, icon: '🎯', title: 'Quick Navigation', description: 'Use the sidebar to quickly navigate between different sections of the application.' },
        { id: 3, icon: '📊', title: 'Analytics Export', description: 'Export your analytics data in multiple formats for further analysis in Excel or other tools.' },
        { id: 4, icon: '🔔', title: 'Custom Alerts', description: 'Customize your notification preferences in Settings to receive only relevant alerts.' }
      ]
    }
  },
  computed: {
    filteredFaqs() {
      return this.faqs.filter(faq => 
        faq.question.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    toggleFaq(faq) {
      faq.open = !faq.open;
    }
  }
}
</script>

<style scoped>
.help-page {
  padding: 30px;
  max-width: 1000px;
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

.help-search {
  margin-bottom: 40px;
}

.help-search input {
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.help-search input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.1);
}

.help-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.help-section h3 {
  font-size: 22px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 700;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.faq-item {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: #f8f9fa;
}

.toggle-icon {
  color: #667eea;
  font-weight: 700;
  min-width: 20px;
}

.faq-question p {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.faq-answer {
  padding: 0 20px 20px 35px;
  font-size: 14px;
  color: #666;
  background: #f8f9fa;
  border-top: 1px solid #e0e0e0;
}

.faq-answer p {
  margin: 0;
}

.troubleshooting-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.troubleshooting-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.troubleshooting-item h4 {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
}

.troubleshooting-item p {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.contact-method {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 20px;
}

.contact-icon {
  font-size: 32px;
  min-width: 50px;
}

.contact-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 5px 0;
}

.contact-value {
  font-size: 14px;
  font-weight: 600;
  color: #667eea;
  margin: 0 0 5px 0;
}

.contact-desc {
  font-size: 13px;
  color: #999;
  margin: 0;
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.doc-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.doc-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
}

.doc-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.doc-card h4 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.doc-card p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.tips-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.tip-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 15px;
  border-left: 4px solid #667eea;
}

.tip-icon {
  font-size: 28px;
  min-width: 40px;
}

.tip-content h4 {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
}

.tip-content p {
  font-size: 13px;
  color: #666;
  margin: 0;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
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

@media (max-width: 768px) {
  .help-page {
    padding: 15px;
  }

  .help-search {
    padding: 12px;
    margin-bottom: 15px;
  }

  .help-search input {
    padding: 8px;
    font-size: 12px;
  }

  .page-header h1 {
    font-size: 20px;
  }

  .page-header p {
    font-size: 12px;
  }

  .docs-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .doc-card {
    padding: 12px;
  }

  .doc-card h3 {
    font-size: 14px;
  }

  .doc-card p {
    font-size: 12px;
  }

  .tips-list {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .tip-card {
    padding: 12px;
  }

  .tip-title {
    font-size: 13px;
  }

  .tip-text {
    font-size: 11px;
  }

  .contact-info {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .contact-item {
    padding: 12px;
  }

  .contact-item h4 {
    font-size: 13px;
  }

  .contact-item p {
    font-size: 11px;
  }

  .troubleshooting-list {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .faq-item {
    margin-bottom: 10px;
  }

  .faq-item button {
    padding: 10px;
    font-size: 12px;
  }

  .faq-content {
    padding: 12px;
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .help-page {
    padding: 10px;
  }

  .help-search {
    padding: 10px;
    margin-bottom: 12px;
  }

  .help-search input {
    padding: 8px;
    font-size: 12px;
    width: 100%;
  }

  .page-header h1 {
    font-size: 18px;
  }

  .page-header p {
    font-size: 11px;
  }

  .docs-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .doc-card {
    padding: 10px;
  }

  .doc-card h3 {
    font-size: 13px;
    margin-bottom: 6px;
  }

  .doc-card p {
    font-size: 11px;
    line-height: 1.4;
  }

  .doc-card a {
    display: inline-block;
    margin-top: 8px;
    padding: 6px 12px;
    font-size: 10px;
  }

  .tips-list {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .tip-card {
    padding: 10px;
  }

  .tip-icon {
    font-size: 20px;
    margin-bottom: 6px;
  }

  .tip-title {
    font-size: 12px;
    margin-bottom: 4px;
  }

  .tip-text {
    font-size: 10px;
    line-height: 1.4;
  }

  .contact-info {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .contact-item {
    padding: 10px;
  }

  .contact-item h4 {
    font-size: 12px;
    margin-bottom: 4px;
  }

  .contact-item p {
    font-size: 10px;
    line-height: 1.4;
  }

  .troubleshooting-list {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .faq-item {
    margin-bottom: 8px;
  }

  .faq-item button {
    padding: 8px 10px;
    font-size: 11px;
    width: 100%;
    text-align: left;
  }

  .faq-content {
    padding: 10px;
    font-size: 10px;
    line-height: 1.5;
  }

  .section-title {
    font-size: 15px;
    margin-top: 12px;
    margin-bottom: 10px;
  }
}
</style>
