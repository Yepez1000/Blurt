'use client'

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, ChevronLeft } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <div 
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="font-semibold text-black">Your Notes</h2>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close sidebar">
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <Button className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Add New Note
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)] p-4">
        {/* Add your notes list here */}
        <p className="text-black">No notes yet. Start writing or recording to see your notes!</p>
      </ScrollArea>
    </div>
  )
}

