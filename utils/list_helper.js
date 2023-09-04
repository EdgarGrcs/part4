let _ = require('lodash');

const dummy = (blogs) => {
    const result = 1;
    return result;
  }


const totalLikes = (blogs) => {
    
  let result = 0;

    blogs.forEach((array) => {
      result = result + array.likes;
    })  

    return result
}

const favoriteBlog = (blogs) => {

  let result = {
    title: blogs[0].title,
    author:blogs[0].author,
    likes: blogs[0].likes
  }

  for (let i = 0; i < blogs.length -1; i++){
    if (blogs[i].likes > result.likes){
      result.title = blogs[i].title;
      result.author = blogs[i].author;
      result.likes = blogs[i].likes; 
    }
  }

  return result;
}


const mostBlogs = (blogs) => {

  const result = {
    author: "",
    blogs: 0
  }

  const author = _.countBy(blogs, "author");
  let values = Object.values(author);
  let maxKey = _.max(Object.keys(author), o => author[o] );




  result.author = maxKey;
  result.blogs = values[values.length -1];

  return result; 


}


const mostLikes = (blogs) => {

const getMostLikes = (blogs) => blogs
  .reduce(({sums,most}, {likes, author}) => {
    sums[author] = likes = (sums[author] || 0) + likes;
    if (likes > most.likes) most = {author,likes};
    return {sums,most};
  }, {sums: {}, most: {likes:0} })
  .most;

  result = getMostLikes(blogs);

  return result;
}


  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
  }