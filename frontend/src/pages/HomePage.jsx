import { useAuth } from "../hooks/useAuth"

export const HomePage = () => {
  const { user, loading } = useAuth()

  console.log({user, loading})

  return (
    <div>HomePage</div>
  )
}
