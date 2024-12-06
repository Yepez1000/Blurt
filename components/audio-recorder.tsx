'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Mic, Square } from 'lucide-react'

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false)

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // Add actual recording logic here
  }

  return (
    <div className="flex items-center justify-center">
      <Button
        size="sm"
        variant={isRecording ? "destructive" : "outline"}
        className="rounded-full"
        onClick={toggleRecording}
      >
        {isRecording ? <Square className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
        <span className="ml-2">{isRecording ? "Stop" : "Record"}</span>
      </Button>
    </div>
  )
}

