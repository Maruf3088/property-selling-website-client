# Property Selling Website - Full Stack Application

A comprehensive, full-stack property selling platform built with modern web technologies. This application enables users to browse, list, and manage properties with a professional admin dashboard for managing users, properties, and agencies.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Pages & Components](#pages--components)
- [User Roles & Permissions](#user-roles--permissions)
- [API Integration](#api-integration)
- [Database Schema](#database-schema)
- [Recent Updates](#recent-updates)

---

## 🎯 Project Overview

The Property Selling Website is a full-featured real estate platform that connects buyers, sellers, and agencies. It provides:

- **For Buyers**: Browse properties, save favorites, book appointments, leave reviews
- **For Sellers**: List properties, manage listings, track appointments, view analytics
- **For Admin**: Manage all users, approve/reject properties, manage agencies, view system statistics
- **For Agencies**: Manage agency profile, list agency properties, track property count

The platform features a responsive design that works seamlessly on desktop and mobile devices, with a professional dashboard interface for administrative tasks.

---

## ⭐ Key Features

### Authentication & Authorization
- **Firebase Authentication** - Secure user login/registration with email/password
- **Role-Based Access Control** - Three user roles: Admin, Seller, Buyer
- **JWT Token Management** - Secure API communication with axios interceptors
- **Persistent Sessions** - localStorage-based authentication state management

### Property Management
- **Browse Properties** - View all properties with filters and pagination
- **List Properties** - Sellers can create and publish new property listings
- **Property Details Modal** - Detailed view of property information, location, images
- **Property Search & Filter** - Find properties by type, location, price range
- **Property Status Workflow** - Approve, pending, and rejected property states
- **Property Images** - Display property thumbnails in all tables with fallback images

### User Features
- **User Profiles** - View and edit user profile information with professional design
- **Favorites System** - Save favorite properties to wishlist
- **Appointment Booking** - Schedule appointments to view properties
- **Reviews & Ratings** - Leave reviews and ratings on properties
- **Responsive Dashboard** - Mobile-friendly dashboard with drawer navigation

### Admin Dashboard
- **Manage Users** - View all users with profile photos, assign admin roles, delete users
- **Manage Properties** - View all properties with images, approve/reject submissions, delete
- **Manage Agencies** - View agencies with photos, manage agency information
- **Property Requests** - Review and approve/reject pending property listings (3 status tables with images)
- **System Statistics** - View charts, analytics, and key metrics
- **User Management** - Handle user roles and permissions

### Seller Features
- **Property Management** - Create, update, delete property listings
- **Seller Dashboard** - View property statistics and sales metrics
- **Manage Property Status** - Track approved, pending, and rejected properties with images
- **Appointment Tracking** - View scheduled appointments for properties

### Buyer Features
- **Browse & Search** - Find properties using advanced filters
- **Save Favorites** - Bookmark properties for later viewing
- **Booking Appointments** - Schedule property viewing appointments
- **Write Reviews** - Share feedback and ratings on properties viewed

### UI/UX Features
- **Responsive Design** - Mobile-first approach with tablet and desktop views
- **Mobile Drawer Navigation** - Hamburger menu with smooth drawer animation
- **Professional Design** - Gradient backgrounds, cards, badges, smooth transitions
- **Loading States** - Spinner indicators for async operations
- **Error Handling** - SweetAlert confirmation dialogs and toast notifications
- **Data Pagination** - 5 items per page with next/previous navigation
- **Avatar Fallbacks** - Auto-generated avatars using ui-avatars.com API
- **Photo Columns in Tables** - All management tables display photos/images with fallbacks

---

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **Vite** 6.2.1 - Build tool and dev server
- **React Router** 7.10.1 - Client-side routing
- **TailwindCSS** 4.1.17 - Utility-first CSS framework
- **DaisyUI** 5.5.8 - Tailwind component library
- **Material-UI** 7.3.6 - Additional UI components

### State & Data Management
- **React Context API** - Global state management (Auth, DarkMode)
- **@tanstack/react-query** 5.90.12 - Server state management
- **React Hook Form** 7.69.0 - Form handling

### Authentication & Security
- **Firebase** 12.7.0 - Authentication and storage
- **Axios** - HTTP client with interceptors
- **JWT Tokens** - Secure API communication

### Icons & Visual
- **lucide-react** - Modern icon library
- **react-icons** - FontAwesome and other icon sets
- **ui-avatars.com** - Avatar generation fallback

### User Feedback
- **react-hot-toast** 2.6.0 - Toast notifications
- **sweetalert2** 11.26.17 - Beautiful alert dialogs

### Charts & Analytics
- **recharts** 3.6.0 - React charting library

---

## 📁 Project Structure

```
property-selling-website-client/
├── src/
│   ├── api/                      # API service functions
│   │   ├── agency.api.js
│   │   ├── appointment.api.js
│   │   ├── properties.api.js
│   │   ├── reviews.api.js
│   │   └── user.api.js
│   │
│   ├── axios/                    # Axios configuration
│   │   ├── axiosPublic.js        # For public API calls
│   │   └── axiosSecure.js        # For authenticated API calls with JWT
│   │
│   ├── component/                # Reusable components
│   │   ├── breadcrumb/
│   │   ├── footer/
│   │   ├── loading/
│   │   ├── navbar/
│   │   ├── propert details modal/
│   │   └── title/
│   │
│   ├── firebase/
│   │   └── firebase.init.js      # Firebase configuration
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── useAdmin.js
│   │   ├── useAgencies.js
│   │   ├── useAgencyById.js
│   │   ├── useAllProperties.js
│   │   ├── useAllUser.js
│   │   ├── useAppointmentCandidatesByPropertyId.js
│   │   ├── useAppointmentsByBuyerEmail.js
│   │   ├── useFavourites.js
│   │   ├── useProperties.js
│   │   ├── usePropertyByAgencyId.js
│   │   ├── usePropertyByEmail.js
│   │   ├── usePropertyById.js
│   │   ├── usePropertyCountByAgency.js
│   │   ├── usePropertyCountByPropertyId.js
│   │   ├── usePropertyTypes.js
│   │   └── useReviewsByPropertyId.js
│   │
│   ├── layout/                   # Layout components
│   │   ├── DashboardLayout.jsx
│   │   └── MainLayout.jsx
│   │
│   ├── pages/                    # Page components
│   │   ├── agency profile/       # Agency detail page
│   │   ├── all agency/           # List all agencies
│   │   ├── all property/         # List all properties
│   │   ├── Blog/                 # Blog page
│   │   ├── contact/              # Contact page
│   │   ├── dashboard/            # Admin dashboard
│   │   │   └── dashboard component/
│   │   │       ├── Dashboard.jsx (admin overview with stats)
│   │   │       ├── ManageUsers.jsx (user table with photos)
│   │   │       ├── ManageProperty.jsx (property table with images)
│   │   │       ├── ManageAgencies.jsx (agency table with photos)
│   │   │       ├── PropertyRequest.jsx (3 tables: approved, pending, rejected with photos)
│   │   │       └── SellerManageProperty.jsx (seller property table with photos)
│   │   ├── home/                 # Home page
│   │   ├── login/                # Login page
│   │   ├── profile/              # User profile page
│   │   ├── property details page/# Single property view
│   │   └── register/             # Registration page
│   │
│   ├── provider/                 # Context providers
│   │   ├── AuthProvider.jsx      # Authentication context
│   │   └── DarkModeProvider.jsx  # Dark mode context
│   │
│   ├── router/                   # Routing configuration
│   │   ├── AdminRoute.jsx        # Protected admin routes
│   │   ├── PrivateRoute.jsx      # Protected user routes
│   │   └── Router.jsx            # Route definitions
│   │
│   ├── index.css                 # Global styles
│   ├── main.jsx                  # React entry point
│   └── App.jsx                   # Root component
│
├── public/                       # Static assets
│   └── lotties/                  # Lottie animations
│
├── package.json
├── vite.config.js
├── firebase.json
└── README.md
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Firebase Account** - Create a project at [firebase.google.com](https://firebase.google.com)
- **Backend Server** - Running Node.js/Express server

### Client Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd property-selling-website-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Open `src/firebase/firebase.init.js`
   - Replace with your Firebase project credentials
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Set API endpoints**
   - Open `src/axios/axiosSecure.js`
   - Ensure API base URL points to your backend server
   ```javascript
   const baseURL = "http://localhost:5000"; // or your server URL
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

6. **Build for production**
   ```bash
   npm run build
   ```

7. **Deploy to Firebase Hosting**
   ```bash
   firebase login
   firebase deploy
   ```

---

## 📖 Usage Guide

### For First-Time Users

1. **Create an Account**
   - Visit the Register page
   - Choose role: Buyer or Seller
   - Enter email and password

2. **Login**
   - Use your credentials to log in
   - JWT token automatically stored in localStorage

3. **Browse Properties** (Buyer)
   - View all properties on the "All Properties" page
   - Use filters for property type, location, price
   - Click property card to view details

4. **Save Favorites** (Buyer)
   - Click the heart icon on any property
   - View saved properties in your profile

5. **Book Appointments** (Buyer)
   - Click "Book Appointment" on property details
   - Select date and time
   - Receive confirmation

6. **List Property** (Seller)
   - Go to Dashboard → Create Property
   - Fill in property details and upload images
   - Submit for admin approval

### Admin Panel Access

**Admin Dashboard**: `/dashboard`

**Features**:
- **Dashboard** - View system statistics and analytics
- **Manage Users** - View all users with profile photos, promote/demote admin roles, delete users
- **Manage Properties** - View all properties with images, approve/reject, delete
- **Manage Agencies** - View agencies with photos, manage agency information
- **Property Requests** - Review properties across 3 status tables (approved, pending, rejected) with property images
- **My Profile** - Admin profile management

---

## 🎨 Pages & Components

### Public Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with featured properties |
| All Properties | `/all-property` | Browse all published properties |
| All Agencies | `/all-agency` | View all registered agencies |
| Agency Profile | `/all-agency/:id` | Single agency details and properties |
| Property Details | `/property/:id` | Full property information with reviews |
| Blog | `/blog` | Blog articles and news |
| Contact | `/contact` | Contact form |
| Login | `/login` | User login |
| Register | `/register` | User registration |

### Protected Pages

| Page | Route | Role | Description |
|------|-------|------|-------------|
| Dashboard | `/dashboard` | All | Role-specific dashboard |
| Profile | `/profile` | All | User profile management |

### Admin Dashboard Components

| Component | Route | Features |
|-----------|-------|----------|
| Dashboard | `/dashboard` | Stats, charts, system overview |
| Manage Users | `/dashboard/manage-users` | User table with photos, role management |
| Manage Properties | `/dashboard/manage-property` | Property table with images, CRUD |
| Manage Agencies | `/dashboard/manage-agencies` | Agency table with photos |
| Property Requests | `/dashboard/property-requests` | 3 tables with property images |
| My Profile | `/dashboard/profile` | Admin profile |

### Seller Dashboard Components

| Component | Route | Features |
|-----------|-------|----------|
| Dashboard | `/dashboard` | Seller stats and analytics |
| Manage Property | `/dashboard/manage-property` | Seller's properties with images |
| My Profile | `/dashboard/profile` | Seller profile |

### Key Components

**Navbar.jsx**
- Responsive navigation header
- Mobile drawer menu with hamburger icon
- User profile dropdown
- Authentication state display
- Logo and brand

**DashboardSidebar.jsx**
- Role-based navigation menu
- Mobile hamburger menu with smooth drawer overlay
- Auto-closing drawer on navigation
- Logout with SweetAlert confirmation
- Dynamic menu items based on user role

**PropertyDetailsModal.jsx**
- Property information display with images
- Location details and map
- Amenities and features list
- Property statistics

**PropertyRequest.jsx**
- Three separate tables for property status management
- Approved properties table with image column, full CRUD
- Pending properties table with image column, status selector
- Rejected properties table with image column, delete action
- Property images displayed with squircle avatar masks
- Fallback placeholder images

**SellerManageProperty.jsx**
- PropertyTable reusable component
- Displays seller's properties in three status sections
- Approved, pending, and rejected properties with images
- Edit, delete, and view actions
- Status badges with conditional colors
- Image columns across all three variants

**Profile.jsx**
- Professional user profile display
- Gradient header with user photo
- User information cards (name, email, phone, location)
- Stat cards (properties, reviews, appointments)
- Verification status and role badges
- Contact information section
- Account management buttons
- Professional design with smooth transitions

**ManageUsers.jsx**
- Admin user management table
- Circular avatar masks with user profile photos
- Make Admin/Remove Admin buttons with role management
- Delete user functionality with confirmation
- Email verification status display
- Role badges (Admin, Seller, Buyer)
- Pagination (5 items per page)
- Loading states and error handling

**ManageProperty.jsx**
- Admin property management table
- Squircle avatar masks with property images
- Property details modal integration
- Edit and delete functionality
- Property status badges
- Agency information display
- Pagination (5 items per page)
- Image fallback system

**ManageAgencies.jsx**
- Admin agency management table
- Squircle avatar masks with agency photos/logos
- View agency profile link
- Delete agency functionality with confirmation
- Property count display per agency
- Location and contact information
- Loading states and empty state handling

---

## 👥 User Roles & Permissions

### Admin Role
- **Access**: Full system access via `/dashboard`
- **Permissions**:
  - Manage all users (view all, promote/demote admin roles, delete users)
  - Approve/reject property listings
  - Manage all properties in the system
  - View and manage agencies
  - Access system analytics and statistics
  - View all appointments and reviews
  - System-wide property and user management

### Seller Role
- **Access**: Limited to seller dashboard and property management
- **Permissions**:
  - Create and list properties with images
  - Edit own property listings
  - Delete own properties
  - View appointment requests for properties
  - Edit seller profile and information
  - View property performance analytics
  - Track property approval status (approved, pending, rejected)
  - Manage property photos and details

### Buyer Role
- **Access**: Limited to buyer features and public pages
- **Permissions**:
  - Browse all published properties
  - Filter properties by type, location, price
  - Save favorite properties to wishlist
  - Book property viewing appointments
  - Write reviews and ratings on properties viewed
  - Edit buyer profile
  - View appointment history
  - Track saved favorites

---

## 🔌 API Integration

### API Service Files

**user.api.js**
- `getAllUsers()` - Fetch all users (admin)
- `makeAdmin(userId)` - Promote user to admin
- `removeAdmin(userId)` - Demote admin to regular user
- `deleteUser(userId)` - Delete user account
- `getUserByEmail(email)` - Get user details

**properties.api.js**
- `getAllProperties()` - Get all properties (admin)
- `getPublishedProperties()` - Get buyer-visible properties
- `getPropertyById(id)` - Get single property details
- `getPropertyByEmail(email)` - Get seller's properties
- `createProperty(propertyData)` - Create new property
- `updateProperty(id, propertyData)` - Update property details
- `deleteProperty(id)` - Delete property
- `approveProperty(id)` - Admin approve property
- `rejectProperty(id)` - Admin reject property
- `pendingProperty(id)` - Change to pending status

**appointment.api.js**
- `createAppointment(appointmentData)` - Book viewing appointment
- `getAppointmentsByBuyerEmail(email)` - Get buyer's appointments
- `getAppointmentsByPropertyId(id)` - Get property appointments
- `cancelAppointment(id)` - Cancel scheduled appointment

**reviews.api.js**
- `getReviewsByPropertyId(id)` - Get property reviews
- `createReview(reviewData)` - Post property review
- `deleteReview(id)` - Delete review

**agency.api.js**
- `getAllAgencies()` - Fetch all agencies
- `getAgencyById(id)` - Get single agency details
- `getAgencyProperties(agencyId)` - Get agency's properties
- `updateAgency(id, data)` - Update agency information

### Axios Configuration

**axiosPublic.js**
- Used for public endpoints without authentication
- No JWT token required

**axiosSecure.js**
- Used for protected endpoints requiring authentication
- Automatically attaches JWT token from localStorage
- Handles token refresh on 401 responses
- Redirects to login on authentication failure
- Includes request/response interceptors

### Authentication Flow
1. User logs in with Firebase email/password
2. Firebase returns ID token
3. Frontend calls backend with Firebase token
4. Backend validates token with Firebase Admin SDK
5. Backend returns custom JWT token
6. Frontend stores JWT in localStorage
7. Subsequent requests include JWT in Authorization header
8. Backend validates JWT for protected routes

---

## 💾 Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  photoURL: String,
  role: String, // "admin" | "seller" | "buyer"
  location: String,
  phone: String,
  verified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Properties Collection
```javascript
{
  _id: ObjectId,
  propertyName: String,
  propertyType: String, // "House", "Apartment", "Land", etc
  location: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  squareFeet: Number,
  image: String, // Primary image URL
  propertyImage: String, // Alternative image field
  description: String,
  sellerEmail: String,
  agencyId: ObjectId,
  isAdminApproved: String, // "approved" | "pending" | "rejected"
  amenities: [String], // ["WiFi", "Parking", "Pool", etc]
  createdAt: Date,
  updatedAt: Date
}
```

### Agencies Collection
```javascript
{
  _id: ObjectId,
  agencyName: String,
  email: String,
  location: String,
  phone: String,
  photo: String, // Agency logo/photo URL
  logo: String,
  description: String,
  website: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Appointments Collection
```javascript
{
  _id: ObjectId,
  propertyId: ObjectId,
  buyerEmail: String,
  sellerEmail: String,
  date: Date,
  time: String,
  notes: String,
  status: String, // "scheduled" | "completed" | "cancelled"
  createdAt: Date,
  updatedAt: Date
}
```

### Reviews Collection
```javascript
{
  _id: ObjectId,
  propertyId: ObjectId,
  buyerEmail: String,
  rating: Number, // 1-5 stars
  comment: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Favorites Collection
```javascript
{
  _id: ObjectId,
  buyerEmail: String,
  propertyId: ObjectId,
  addedAt: Date
}
```

---

## 🌟 Recent Updates

### Phase 1 - Core Features (Completed)
- ✅ Firebase authentication with JWT tokens
- ✅ Role-based access control (Admin, Seller, Buyer)
- ✅ Property listing and management
- ✅ User management with promotion/demotion
- ✅ Property approval workflow
- ✅ Appointment booking system
- ✅ Reviews and ratings functionality

### Phase 2 - UI/UX Enhancements (Completed)
- ✅ Professional user profile page with gradient design
- ✅ Mobile drawer navigation for responsive design
- ✅ Enhanced navbar with mobile menu
- ✅ Logout confirmation dialogs
- ✅ Profile photos in ManageUsers table
- ✅ Property images in ManageProperty table
- ✅ Agency photos in ManageAgencies table
- ✅ Property images in PropertyRequest (3 tables)
- ✅ Property images in SellerManageProperty
- ✅ Data pagination across dashboard (5 items per page)
- ✅ SweetAlert confirmations for deletions
- ✅ Toast notifications for user feedback

### Phase 3 - Image & Avatar System
- ✅ Circular avatar masks for user photos
- ✅ Squircle avatar masks for property/agency images
- ✅ Fallback avatar generation via ui-avatars.com API
- ✅ Placeholder images for missing data
- ✅ Consistent image sizing and styling

---

## 🚀 Future Enhancements

### Phase 4 - Advanced Features
- [ ] Advanced search with map-based property search
- [ ] Real-time chat between buyer and seller
- [ ] Video property tours
- [ ] Payment integration (Stripe/PayPal)
- [ ] Email notifications for appointments
- [ ] Mobile React Native application

### Phase 5 - Analytics & Reporting
- [ ] Advanced analytics dashboard
- [ ] PDF report generation
- [ ] Sales metrics and trends
- [ ] Admin system usage analytics
- [ ] Custom report builder

### Phase 6 - Social & Community
- [ ] Enhanced review system with images
- [ ] Community forum for discussions
- [ ] Property comparison tools
- [ ] Wishlist sharing functionality
- [ ] Social media integration

### Phase 7 - Optimization & Accessibility
- [ ] Image optimization and lazy loading
- [ ] SEO improvements
- [ ] WCAG 2.1 accessibility compliance
- [ ] Multi-language support (i18n)
- [ ] Full dark mode enhancement
- [ ] Performance optimization

---

## 📞 Support & Contact

For issues, questions, or feature requests:
- Create an issue in the repository
- Contact the development team
- Check existing documentation

---

## 📜 License

This project is licensed under the MIT License.

---

**Last Updated**: January 2026  
**Current Version**: 1.0.0  
**Status**: Active Development  
**Frontend Framework**: React 19.2.0 with Vite  
**Build Status**: Production Ready
