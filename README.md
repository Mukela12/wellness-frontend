# WellnessAI Frontend

A comprehensive employee wellness platform built with React 19, Vite, and Tailwind CSS. This frontend application provides role-based access for employees, managers, HR personnel, and administrators to track wellness, manage teams, and analyze organizational health metrics.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Backend API running on `http://localhost:8005`

### Installation

```bash
# Clone and install
git clone <repository-url>
cd wellness-frontend
npm install

# Setup environment
echo "VITE_API_URL=http://localhost:8005/api" > .env

# Start development server
npm run dev
```

Access the application at `http://localhost:5173`

## 🛠 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v3.4.17
- **State**: Zustand
- **Routing**: React Router v6
- **HTTP**: Axios
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── layouts/         # Page layouts
├── pages/          # Route pages by role
├── services/       # API integration
├── store/          # State management
├── hooks/          # Custom React hooks
└── utils/          # Utility functions
```

## 🔐 User Roles

- **Employee**: Personal dashboard, check-ins, surveys, rewards
- **Manager**: Team management, mood analytics, risk assessment
- **HR**: Company-wide analytics, engagement analysis, data export
- **Admin**: Full system access, settings management

## 📊 Core Features

✅ **Completed**
- JWT Authentication & Role-based access
- Daily wellness check-ins
- Pulse surveys & feedback
- Rewards system
- Team management dashboards
- Company analytics
- Responsive glass-morphism UI

⚠️ **In Progress**
- Challenge system integration
- Resource library backend
- User management admin panel

## 🎨 Design System

- **Colors**: Sage green primary, neutral grays, accent purple/blue
- **Typography**: Inter font family
- **Components**: Glass morphism effects, 8px rounded corners
- **Responsive**: Mobile-first, adaptive layouts

## 📜 Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run lint` - Code quality

## 🚀 Production Deployment

### Checklist
✅ Environment configuration
✅ Build optimization
✅ Error handling
✅ Loading states
⚠️ Security headers (backend)
❌ SSL certificate
❌ CDN setup

### Deployment Options
- Vercel
- Netlify
- AWS S3 + CloudFront
- Docker

## 📞 Support

**Version**: 1.0.0  
**Status**: Production Ready (Core Features)  
**Last Updated**: September 2025

For issues or feature requests, please contact the development team.