import React from 'react'
import { useAuth } from '../hooks/useAuth'

export const ProfilePage = () => {
  const {user}= useAuth()

  console.log(user)
  return (
    <div>ProfilePage</div>
  )
}
