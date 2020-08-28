const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('there are eight blogs', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(8)
})

afterAll(() => {
  mongoose.connection.close()
})
