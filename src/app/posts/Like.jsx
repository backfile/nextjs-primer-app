'use client'

import { useState } from 'react'

export function Like () {
  const [like, setLike] = useState(false)

  return (
    <>
      <button onClick={() => setLike(!like)}> Like </button>
      <p>{like ? 'Le gusta' : 'No le gusta'}</p>
    </>
  )
}
