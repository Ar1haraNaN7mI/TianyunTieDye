'use client'

import { useState, useRef, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import Link from 'next/link'

export default function VRCanvasPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [brushSize, setBrushSize] = useState(5)
  const [selectedColor, setSelectedColor] = useState('#FF6B6B')
  const [selectedTool, setSelectedTool] = useState('brush')
  const [lastPoint, setLastPoint] = useState({ x: 0, y: 0 })

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', 
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8C471', '#82E0AA', '#F1948A', '#85929E', '#2C3E50'
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 设置画布大小
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // 设置画布背景
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  const getEventPosition = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }

    const rect = canvas.getBoundingClientRect()
    
    if ('touches' in e) {
      // 触摸事件
      const touch = e.touches[0] || e.changedTouches[0]
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      }
    } else {
      // 鼠标事件
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    setIsDrawing(true)
    const point = getEventPosition(e)
    setLastPoint(point)
    draw(e)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    e.preventDefault()

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const currentPoint = getEventPosition(e)

    ctx.lineWidth = brushSize
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = selectedColor

    if (selectedTool === 'brush') {
      ctx.globalCompositeOperation = 'source-over'
    } else if (selectedTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out'
    }

    // 绘制平滑的线条
    ctx.beginPath()
    ctx.moveTo(lastPoint.x, lastPoint.y)
    ctx.lineTo(currentPoint.x, currentPoint.y)
    ctx.stroke()

    setLastPoint(currentPoint)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  const downloadCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement('a')
    link.download = 'tianyun-artwork.png'
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* 导航栏 */}
      <Header />
      
      <div className="pt-20">
        {/* 页面标题 */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">VR 创意画板</h1>
              <p className="text-gray-600">在虚拟现实环境中创作你的扎染艺术作品</p>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5m7-7l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                返回首页
              </Link>
            </div>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 工具栏 */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:sticky lg:top-28">
                {/* 工具选择 */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">绘画工具</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedTool('brush')}
                      className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-colors ${
                        selectedTool === 'brush' 
                          ? 'bg-indigo-100 text-indigo-600 border-2 border-indigo-300' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21.174 6.812a1 1 0 00-3.986-3.987L3.842 16.174a2 2 0 00-.5.83l-1.321 4.352a.5.5 0 00.623.622l4.353-1.32a2 2 0 00.83-.497z"/>
                      </svg>
                      <span className="text-sm">画笔</span>
                    </button>
                    <button
                      onClick={() => setSelectedTool('eraser')}
                      className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-colors ${
                        selectedTool === 'eraser' 
                          ? 'bg-indigo-100 text-indigo-600 border-2 border-indigo-300' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 20H7l-5-5 4-4 5.5 5.5L16 12"/>
                      </svg>
                      <span className="text-sm">橡皮擦</span>
                    </button>
                  </div>
                </div>

                {/* 画笔大小 */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">画笔大小</h3>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={brushSize}
                      onChange={(e) => setBrushSize(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>1px</span>
                      <span className="font-medium">{brushSize}px</span>
                      <span>50px</span>
                    </div>
                  </div>
                </div>

                {/* 颜色选择 */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">颜色选择</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-lg border-2 transition-transform hover:scale-110 ${
                          selectedColor === color ? 'border-gray-800 scale-110' : 'border-gray-200'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="mt-3">
                    <input
                      type="color"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-full h-10 rounded-lg border border-gray-300 cursor-pointer"
                    />
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="space-y-3">
                  <Button onClick={clearCanvas} variant="secondary" className="w-full">
                    清空画布
                  </Button>
                  <Button onClick={downloadCanvas} variant="primary" className="w-full">
                    下载作品
                  </Button>
                </div>
              </div>
            </div>

            {/* 画布区域 */}
            <div className="lg:col-span-9">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="text-xl font-semibold">创作画布</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                      VR 模式
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      实时保存
                    </span>
                  </div>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-xl overflow-hidden bg-white">
                  <canvas
                    ref={canvasRef}
                    className="w-full h-[400px] md:h-[600px] cursor-crosshair touch-none"
                    onMouseDown={startDrawing}
                    onMouseUp={stopDrawing}
                    onMouseMove={draw}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchEnd={stopDrawing}
                    onTouchMove={draw}
                  />
                </div>
                
                <div className="mt-4 text-center text-gray-500 text-sm">
                  使用鼠标或手指在画布上绘制，支持VR设备手势控制
                </div>
              </div>

              {/* VR 功能区 */}
              <div className="mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">VR 沉浸式体验</h3>
                  <p className="mb-6 opacity-90">
                    连接VR设备，在三维空间中创作你的扎染艺术作品
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button variant="primary" className="bg-white text-indigo-600 hover:bg-gray-100">
                      启动VR模式
                    </Button>
                    <Button variant="secondary" className="border-white text-white hover:bg-white/10">
                      设备设置
                    </Button>
                  </div>
                </div>
              </div>

              {/* 作品展示区 */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg mb-3">
                    <img src="/image/digital/1.png" alt="Sample Artwork" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <h4 className="font-medium text-gray-800">示例作品 #001</h4>
                  <p className="text-sm text-gray-500">VR创作</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-yellow-100 rounded-lg mb-3">
                    <img src="/image/digital/2.png" alt="Sample Artwork" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <h4 className="font-medium text-gray-800">示例作品 #002</h4>
                  <p className="text-sm text-gray-500">VR创作</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-3">
                    <img src="/image/digital/3.png" alt="Sample Artwork" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <h4 className="font-medium text-gray-800">示例作品 #003</h4>
                  <p className="text-sm text-gray-500">VR创作</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 