
const fetchSinglePost = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 50
    }
  }).then((data) => data.json())
}

export default async function Comment ({ params }) {
  const { id } = params
  const data = await fetchSinglePost(id)
  return (
    <ul>
      {data.map((comment) => (
        <li key={comment.id}>
          <p>{comment.email}</p>
        </li>
      ))}
    </ul>
  )
}
