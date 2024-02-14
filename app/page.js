import BlogCard from "@/components/BlogCard";
import styles from './styles.module.css'
async function getPosts(){
  const response = await fetch("https://dummyjson.com/posts")
  return response.json()
}

async function Home() {

  const {posts} = await getPosts()

  return (
    <div className={styles.container}>
      {
        posts.map((post) => (
          <BlogCard  key={post.id} {...post}/>
        ))
      }
    </div>
  );
}

export default Home