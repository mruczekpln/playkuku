import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    socketRef.current = io('http://localhost:8000')

    socketRef.current.on('connect', () => {
      console.log('Connected to server with ID:', socketRef.current?.id)
    })

    return () => {
      socketRef.current?.disconnect()
    }
  }, [])

  return <h1>Norbercik!</h1>
}
