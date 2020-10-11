const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'Yle',
    author: 'Yleisradio',
    url: 'https://yle.fi/',
    likes: 5,
  },
  {
    title: 'Chromium Blog',
    author: 'Google',
    url: 'https://blog.chromium.org/',
    likes: 16,
  },
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map((u) => u.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb,
  usersInDb,
}
