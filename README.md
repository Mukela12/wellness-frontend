# WellnessAI Frontend

A comprehensive employee wellness platform built with React 19, Vite, and Tailwind CSS. This frontend application provides role-based access for employees, managers, HR personnel, and administrators to track wellness, manage teams, and analyze organizational health metrics.


 ---
  🔑 DEMO CREDENTIALS (For Testing)

  | Role     | Email            | Password    |
  |----------|------------------|-------------|
  | Student  | student@unza.zm  | password123 |
  | Lecturer | lecturer@unza.zm | password123 |
  | Admin    | admin@unza.zm    | password123 |
  | Finance  | finance@unza.zm  | password123 |

  ---


hey so my friend and I are software engineers that graduated last year from xiamen university malaysia and cam eback to zambia now we are
  trying to grow a software agency in zambia and we have recently been approached by two universities that want a student portal that allows them
  to perform all tasks that most university portals allow them these two universities are small universities who don't have a portal one of them
  has about 500 students the portal is supposed to allow students, administration and stuff to better manage all university work, and to make
  the university more effciient so i have an idea to work on a well designed demo make sure to go through the agency standards mcp to help make a
  Saas Demo of a Saas we can sell to both universities and universities that can later ask the plan here is to work on a full frontend design
  that's well design, well layed out, well designed, high-quality UI you can review our previous projects to better understand the designs Ui
  such as the one used with our previous project mukelakatungu@Mukelas-MacBook-Air wellness-frontend-1 %  keep in mind for now you will be
  working on researching softwares as a service out there that also do the same for univerities and i want you to work on researching on how to
  make them better and researching some of the complaints peope have of these softwares and work on making sure we don't so the same, the idea
  here is that the demo is going to use mock data as the backend only the frontend should be well design and be ready to be replaced with real
  api endpoints keep in mind i use railway for the backend which also allows me to connect a database and host my server so for now it will be a
  web app, the frontend will be hosted on netlify keep in mind this demo should be well designed, well layed out and be very professionally
  designed with user intutive UI/UX for all users on the platform the demo will have mock data and it will be pushed to netlify to let clients
  view the system and give back suggestions once all the suggestiosn and changes are gathered from both unis then the frontend changes will be
  made and the backend well be well designed too later to match everything then the system can be funtional and deployed this demo should be
  impressive, well designed, professional and amazing the name of the system will be called "DegreeDesk" here is the logo
  https://res.cloudinary.com/dvj7ayoot/image/upload/v1764113274/UNICoup_-_Logo_yhtgmd.png    and
  https://res.cloudinary.com/dvj7ayoot/image/upload/v1764113274/UNICoup_-_Logo_c1ljni.svg keep in mind the logo is a bit dark bluw and it's just
  a graduation hat no text for now i want you to make a folder for the project and the documentation for both frontend and backend and all
  features keep in mind backend well be in a separate folder later you have to perform deep research about this keep in mind that since this
  project will be in zambia the payment method will be mobile money and other payment we will use tech pay system if you want to review this go
  through the mukelakatungu@Mukelas-MacBook-Air bantu-ride-functions %  to use the .env for the payment method and to just make sure the system
  works for tests because we will setup our own tech pay account later when we have confirmed everything this demo is just to make sure the
  client can test the whole flow of the system from all sides and the comprehensive solution we will work on for them and that we can have them
  use




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