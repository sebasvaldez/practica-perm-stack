import { useAuth } from "../hooks/useAuth"

export const HomePage = () => {
  const { user, loading } = useAuth()


  return (
    <div>HomePage</div>
  )
}
