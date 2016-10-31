import md5 from 'md5';

export default (userImage) => {
  let imgSrc = !!userImage ? userImage.trim().toLowerCase() : '';
  let hash = md5(imgSrc)
  return `https://www.gravatar.com/avatar/${hash}.jpg?s=100`
}
