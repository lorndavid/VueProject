<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>About</h4>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="#support">Help Center</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#community">Community</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Resources</h4>
        <ul>
          <li><a href="#docs">Documentation</a></li>
          <li><a href="#api">API Reference</a></li>
          <li><a href="#tutorials">Tutorials</a></li>
          <li><a href="#tools">Tools</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#cookies">Cookies</a></li>
          <li><a href="#sitemap">Sitemap</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 MyApp. All rights reserved.</p>
      <p class="developer-credit">Developed by <strong>IT Department</strong></p>
      <div class="social-links">
        <a href="#twitter">𝕏</a>
        <a href="#facebook">f</a>
        <a href="#linkedin">in</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: #ecf0f1;
  padding: 50px 30px 20px;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h4 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #fff;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 12px;
}

.footer-section a {
  color: #bdc3c7;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.footer-section a:hover {
  color: #667eea;
  padding-left: 5px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
}

.footer-bottom p {
  font-size: 14px;
  color: #95a5a6;
  margin: 5px 0;
}

.developer-credit {
  font-size: 15px;
  color: #3498db;
  font-weight: 600;
}

.developer-credit strong {
  color: #667eea;
}

.social-links {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-links a {
  font-size: 18px;
  font-weight: 700;
  color: #bdc3c7;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: #667eea;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .footer {
    padding: 25px 12px 12px;
  }

  .footer-bottom {
    font-size: 11px;
    padding-top: 15px;
  }

  .footer-bottom p {
    margin: 3px 0;
  }

  .social-links {
    gap: 12px;
    margin-top: 10px;
  }

  .footer-section h4 {
    font-size: 13px;
    margin-bottom: 10px;
  }

  .footer-section ul {
    gap: 5px;
  }

  .footer-section li {
    margin-bottom: 8px;
  }

  .footer-section a {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .footer {
    padding: 20px 10px 10px;
  }

  .footer-bottom {
    font-size: 10px;
  }

  .social-links {
    gap: 10px;
  }

  .footer-section h4 {
    font-size: 12px;
  }

  .footer-section a {
    font-size: 11px;
  }
}
</style>
