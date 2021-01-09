import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'user@user.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Test User',
    email: 'test@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
