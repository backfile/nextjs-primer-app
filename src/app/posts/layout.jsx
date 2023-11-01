import { Counter } from './Counter'

export default function PostsLayout ({ children }) {
  return (
    <>
      <Counter />
      {children}
    </>
  )
}
