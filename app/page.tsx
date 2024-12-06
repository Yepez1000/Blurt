'use client'

import { useState } from 'react'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import NoteEditor from '../components/note-editor'
import 'regenerator-runtime/runtime';


export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [transcript, setTranscript] = useState('')

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} setTranscript={setTranscript} />
        <main className="flex-1 p-6 overflow-auto">
          <NoteEditor content={transcript} />
        </main>
      </div>
    </div>
  )
}

