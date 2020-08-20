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
  let biggestLikeValue = 0
  let blogIndex = 0
  for (let index = 0; index < blogs.length; index++) {
    const element = blogs[index]
    if (element.likes > biggestLikeValue) {
      biggestLikeValue = element.likes
      blogIndex = index
    }
  }
  let returnObject = blogs[blogIndex]
  delete returnObject._id
  delete returnObject.url
  delete returnObject.__v
  return returnObject
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
