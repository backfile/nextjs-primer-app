import { Like } from './Like'

//  React server component
const fetchData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 50 // Incremental Static Regeneration
    }
  }).then((data) => data.json())
}

export default async function PostPage () {
  const posts = await fetchData()

  return (
    <ul>
      {posts.slice(0, 5).map((post) => (
        <li key={post.id}>
          <p>{post.title}</p>
          <Like />
        </li>
      ))}
    </ul>
  )
}
