import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Yusuf Ajadi',
    email: 'yusuf@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Tade Ola',
    email: 'tade@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users