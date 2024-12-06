'use client'

import { useRef, useEffect } from 'react'

export default function WritingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let isDrawing = false
    let lastX = 0
    let lastY = 0

    const draw = (e: MouseEvent) => {
      if (!isDrawing) return
      ctx.beginPath()
      ctx.moveTo(lastX, lastY)
      ctx.lineTo(e.offsetX, e.offsetY)
      ctx.stroke()
      [lastX, lastY] = [e.offsetX, e.offsetY]
    }

    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY]
    })
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', () => isDrawing = false)
    canvas.addEventListener('mouseout', () => isDrawing = false)

    // Resize canvas to fit the container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full cursor-crosshair"
    />
  )
}

