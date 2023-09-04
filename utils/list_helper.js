const dummy = (blogs) => {
    const result = 1;
    return result;
  }


const totalLikes = (blogs) => {
    
  let result = 0;

    blogs.forEach((array) => {
      result = result + array.likes;
      console.log(result);
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

  console.log(result);

  return result;
}
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }