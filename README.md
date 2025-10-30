
# MediCare BD Backend

This is the backend for MediCare BD app, including:
- User authentication (Patient, Doctor, Admin)
- Doctors search, top-rated, favorites
- Appointments CRUD
- Reviews and ratings
- Admin dashboard
- Profile image upload (Cloudinary)

## Setup Instructions

1. Clone the repository or extract ZIP.
2. Copy `.env.example` to `.env` and fill environment variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
5. Access API at `http://localhost:5000/api/v1/...`

## Scripts
- `npm start` : Start server in production
- `npm run dev` : Start server with nodemon

## Demo Users
| Role | Email | Password |
|------|-------|----------|
| Patient | patient1@demo.com | 123456 |
| Doctor | doctor1@demo.com | 123456 |
| Admin | admin@demo.com | 123456 |

## API Endpoints
- `/auth/register/patient` POST
- `/auth/register/doctor` POST
- `/auth/login` POST
- `/me` GET
- `/doctors` GET
- `/appointments` POST/GET/PATCH
- `/reviews` POST/GET
- `/admin/users` GET
- `/admin/doctors` GET
- `/admin/approve-doctor` PATCH
- `/admin/user/:id` DELETE