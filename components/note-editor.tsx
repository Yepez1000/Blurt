'use client'

import { useState, useEffect } from 'react'
import 'regenerator-runtime/runtime';  

interface NoteEditorProps {
  content: string
}


export default function NoteEditor({ content }: NoteEditorProps) {
  const [noteContent, setNoteContent] = useState(content)

  useEffect(() => {
    setNoteContent(content)  // Update content when it's changed from the parent
  }, [content])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setNoteContent(newContent)
    localStorage.setItem('noteContent', newContent)
  }

  return (
    <div className="w-full h-full">
      <textarea
        className="w-full h-full p-4 text-lg bg-transparent border-none outline-none resize-none"
        value={noteContent}
        onChange={handleChange}
        placeholder="Start writing your notes here..."
        aria-label="Note editor"
      />
    </div>
  )
}

