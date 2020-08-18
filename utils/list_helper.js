const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }
  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  return 123 // TODO: the final return statement
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
