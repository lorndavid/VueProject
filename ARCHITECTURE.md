# 🏗️ System Architecture & Component Overview

## Application Structure

```
┌─────────────────────────────────────────────────────────────┐
│                       App.vue (Root)                         │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ AppHeader (Fixed Top)                                │  │
│  │ - Logo & App Name                                    │  │
│  │ - Search Bar                                         │  │
│  │ - Notifications & User Menu                          │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌─────────────┐  ┌────────────────────────────────────┐  │
│  │ SideBar     │  │ Main Wrapper                       │  │
│  │ (Fixed Left)│  │                                    │  │
│  │             │  │ ┌──────────────────────────────┐  │  │
│  │ - Dashboard │  │ │ AppNavbar (Sticky)           │  │  │
│  │ - Profile   │  │ │ - Breadcrumbs               │  │  │
│  │ - Settings  │  │ │ - Action Buttons            │  │  │
│  │ - Analytics │  │ └──────────────────────────────┘  │  │
│  │ - Files     │  │                                    │  │
│  │ - Notif.    │  │ ┌──────────────────────────────┐  │  │
│  │ - Help      │  │ │ Router View (Page Content)   │  │  │
│  │             │  │ │ - Dashboard Page            │  │  │
│  │ Active      │  │ │ - Profile Page              │  │  │
│  │ Highlight   │  │ │ - Settings Page             │  │  │
│  │ & Hover     │  │ │ - Analytics Page            │  │  │
│  │ Effects     │  │ │ - Files Page                │  │  │
│  │             │  │ │ - Notifications Page        │  │  │
│  │             │  │ │ - Help Page                 │  │  │
│  │             │  │ └──────────────────────────────┘  │  │
│  │             │  │                                    │  │
│  │             │  │ ┌──────────────────────────────┐  │  │
│  │             │  │ │ AppFooter                    │  │  │
│  │             │  │ │ - Links & Info               │  │  │
│  │             │  │ │ - Developer Credit          │  │  │
│  │             │  │ │ - Social Media               │  │  │
│  │             │  │ └──────────────────────────────┘  │  │
│  │             │  │                                    │  │
│  └─────────────┘  └────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Page Components Detail

### 📊 Dashboard Page
```
Dashboard.vue
├── Page Header (Title & Description)
├── Statistics Grid (4 cards)
│   ├── Total Users
│   ├── Revenue
│   ├── Orders
│   └── Rating
├── Charts Grid
│   ├── User Growth Chart (Bar visualization)
│   ├── System Health (Circular indicator)
│   └── Performance Metrics (Progress bars)
└── Recent Activities (Timeline)
    ├── Activity Items (5+)
    ├── Type indicators (success/warning/info)
    └── Timestamps
```

### 👤 Profile Page
```
Profile.vue
├── Profile Sidebar
│   ├── Avatar & User Info
│   ├── Edit Profile Button
│   └── Profile Stats (Posts, Followers, Following)
└── Profile Main
    ├── Personal Information
    │   ├── Display Mode
    │   ├── Info Grid (6 fields)
    │   └── View Only
    ├── Edit Mode
    │   ├── Form Fields (6 inputs)
    │   ├── Save Button
    │   └── Cancel Button
    └── Recent Activity Log
        └── Activity Items (4+)
```

### ⚙️ Settings Page
```
Settings.vue
├── Settings Sidebar
│   ├── Account
│   ├── Privacy & Security
│   ├── Notifications
│   └── Theme & Display
└── Settings Content
    ├── Account Settings
    │   ├── Email, Phone, Language inputs
    │   └── Save button
    ├── Privacy Settings
    │   ├── Two-Factor Auth toggle
    │   ├── Login Notifications toggle
    │   └── Profile Privacy toggle
    ├── Notification Settings
    │   ├── Email toggle
    │   ├── Push toggle
    │   └── SMS toggle
    └── Theme Settings
        ├── Theme selector
        └── Compact Mode toggle
```

### 📈 Analytics Page
```
Analytics.vue
├── Analytics Controls
│   ├── Date Range Pickers
│   └── Refresh Button
├── Metrics Grid (4 cards)
│   ├── Total Visits
│   ├── Unique Visitors
│   ├── Avg. Session Duration
│   └── Conversion Rate
├── Charts
│   ├── Traffic Overview (Bar chart)
│   └── Device Distribution (Progress bars)
└── Top Pages Table
    ├── Headers (5 columns)
    ├── Table Rows (5+ items)
    └── Data Points (Views, Visitors, Bounce Rate, etc.)
```

### 📁 Files Page
```
Files.vue
├── Toolbar
│   ├── Search Box
│   ├── Upload Button
│   ├── New Folder Button
│   └── View Toggle (Grid/List)
├── Breadcrumb Navigation
├── Files Display
│   ├── Grid View
│   │   └── File Cards (Icon, Name, Size, Date)
│   └── List View
│       └── Table (Name, Size, Type, Modified)
└── File Details (When selected)
    ├── Details Grid (6 fields)
    └── Action Buttons (Download, Rename, Delete)
```

### 🔔 Notifications Page
```
Notifications.vue
├── Controls
│   ├── Filter Tabs (All, Unread, Success, Warning, Error)
│   └── Clear All Button
└── Notifications List
    ├── Notification Items
    │   ├── Icon (Type-based)
    │   ├── Title & Message
    │   ├── Timestamp
    │   ├── Color Border (Type-coded)
    │   ├── Unread Indicator
    │   └── Delete Button
    └── Empty State
```

### ❓ Help Page
```
Help.vue
├── Search Box
├── FAQ Section
│   ├── FAQ Items (Collapsible)
│   ├── Toggle Icons
│   └── Answers (Hidden until expanded)
├── Troubleshooting Section
│   └── Troubleshooting Cards (4+ items)
├── Contact Support
│   ├── Email Contact Card
│   ├── Live Chat Card
│   └── Phone Support Card
├── Documentation
│   └── Doc Cards (4 cards with links)
└── Tips & Tricks
    └── Tip Cards (4+ cards)
```

## Routing Configuration

```javascript
Routes:
/                 → Dashboard.vue
/profile          → Profile.vue
/settings         → Settings.vue
/analytics        → Analytics.vue
/files            → Files.vue
/notifications    → Notifications.vue
/help             → Help.vue
```

## Data Flow

```
User Click on Sidebar Item
    ↓
Router Link Navigate to Path
    ↓
URL Changes (e.g., /dashboard → /profile)
    ↓
Route Guard Executes
    ↓
Correct Component Loads in <router-view>
    ↓
App Updates Page Title
    ↓
Active Class Applied to Sidebar Item
    ↓
Page Content Displays with Data
```

## Component Communication

### Props Flow (Top to Bottom)
```
App.vue
├── Passes: collapsed prop → SideBar
└── Passes: pageTitle prop → AppNavbar
```

### Events Flow (Bottom to Top)
```
SideBar
└── Emits: toggle event → App.vue

Router Changes
└── Updates: $route.meta (page title) → App.vue → AppNavbar
```

## State Management Strategy

Currently using **Vue Component State**:
- Local `data()` in each component
- Props for parent-to-child communication
- Events for child-to-parent communication

### Future Enhancement: Pinia Store Structure
```
stores/
├── auth.js        # User authentication
├── ui.js          # UI state (theme, sidebar)
├── profile.js     # User profile data
├── notifications.js # Notifications
└── analytics.js   # Analytics data
```

## Styling Architecture

### Global Styles
- CSS Variables for colors
- Utility classes for common styles
- Scoped styles per component

### Color Palette
```
Primary Gradient: #667eea → #764ba2 (Purple/Blue)
Text: #333 (Dark) to #999 (Light)
Backgrounds: #fff (White) to #f8f9fa (Light Gray)
Borders: #e0e0e0 (Light Gray)
Success: #27ae60 (Green)
Warning: #f39c12 (Orange)
Error: #e74c3c (Red)
Info: #3498db (Blue)
```

### Animation Patterns
- Transitions: 0.3s ease
- Hover: translateY(-2px to -5px)
- Active: Color + Background change
- Collapse: Width transition

---

**This architecture supports scalability and maintainability!** 🎯
