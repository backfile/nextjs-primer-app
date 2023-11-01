import Link from "next/link"

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 50
    }
  }).then((data) => data.json())
}

export default async function Post ({children, params }) {
  const { id } = params
  const data = await fetchSinglePost(id)

  return (
    <div>
      <h2>Este es el post {data.id}</h2>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios...</Link>
      {children}
    </div>
  )
}
