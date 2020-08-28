const Blog = require('../models/blog')

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

module.exports = {
  initialBlogs,
  blogsInDb,
}
