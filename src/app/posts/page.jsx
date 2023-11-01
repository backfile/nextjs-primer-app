import Link from 'next/link'
import { Like } from './Like'

const fetchData = () => {
  // getStaticProps
  // return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

  // getServerSideProps
  // return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }).then(res => res.json())

  // Incremental Static Regeneration
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 50
    }
  }).then((data) => data.json())
}
//  React server component
export default async function PostPage () {
  const posts = await fetchData()

  return (
    <ul>
      {posts.slice(0, 5).map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
          <Like />
        </li>
      ))}
    </ul>
  )
}
