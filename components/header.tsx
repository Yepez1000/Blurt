import { Button } from "@/components/ui/button"
import { Mic, Square } from 'lucide-react'
import { useState, useEffect } from "react"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import 'regenerator-runtime/runtime';

interface HeaderProps {
  toggleSidebar: () => void
  isSidebarOpen: boolean
  setTranscript: (transcript: string) => void
}

export default function Header({ toggleSidebar, isSidebarOpen, setTranscript }: HeaderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [appNameStyle, setAppNameStyle] = useState({})

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    
    if (isRecording) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  }

  useEffect(() => {
    if (isSidebarOpen) {
      setAppNameStyle({ marginLeft: '16rem', transition: 'margin-left 0.3s ease-in-out' })
    } else {
      setAppNameStyle({ marginLeft: '0', transition: 'margin-left 0.3s ease-in-out' })
    }
  }, [isSidebarOpen])

  useEffect(() => {
    setTranscript(transcript)  // Update the parent component's state with the transcript
  }, [transcript, setTranscript]);

  console.log("this is the transcript",transcript)
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Toggle sidebar">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </Button>
        <h1 className="text-xl font-semibold absolute left-16" style={appNameStyle}>Blurt</h1>
      </div>

    
      <Button
        size="sm"
        variant={isRecording ? "destructive" : "outline"}
        className="rounded-full"
        onClick={toggleRecording}
      >
        {isRecording ? <Square className="w-4 h-4 mr-2" /> : <Mic className="w-4 h-4 mr-2" />}
        {isRecording ? "Stop Recording" : "Start Recording"}
      </Button>


      <Button variant="ghost">Sign In</Button>
    </header>
  )
}

