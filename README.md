# ProShop eCommerce Platform

> eCommerce platform built with the MERN stack & Redux.

This is my first capstone project using MERN.
[Live Demo](https://me-proshop.herokuapp.com/)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User Authentication & Authorization
- User profile & my orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

### ES Modules in Node

We us ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error.

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your_mongodb_uri
JWT_SECRET = your_secret_key
PAYPAL_CLIENT_ID = your_paypal_client_id
```

### Install Dependencies (frontend & backend)

```
# for backend
npm install
# for frontend
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000) concurrently
npm run dev

# Run individual
# backend only
npm run serve #http://localhost:5000
# frontend only
cd frontend
npm start #http://localhost:3000
```

## Build & Deploy

```
# Go to frontend directory
cd frontend
# Generate build for production
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@admin.com (Admin)
123456

user@user.com (Customer)
123456

test@test.com (Customer)
123456
```
