/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

const findPostsByHashtag = (hashtag: string) => {
  return posts.filter(post => post.hashtags.includes(hashtag));
}

const findPostWithHighestLikes = () => {
  return posts.reduce((maxPost, currentPost) => currentPost.likes > maxPost.likes ? currentPost : maxPost);
}

const calculateTotalLikes = () => {
  return posts.reduce((total, post) => total + post.likes, 0);
}

console.log("1. Posts containing 'typescript':", findPostsByHashtag("typescript"));
console.log("2. Posts containing 'nestjs':", findPostsByHashtag("nestjs"));
console.log("3. Post with highest number of likes:", findPostWithHighestLikes());
console.log("4. Total number of likes:", calculateTotalLikes());