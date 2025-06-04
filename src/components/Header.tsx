'use client'
import React from 'react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Logo区域 */}
      <div className="absolute top-8 left-8 animate-logo-appear">
        <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100 shadow-lg">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              TianYun Tie-Dye
            </Link>
          </div>
        </div>
      </div>

      {/* 导航菜单 */}
      <div className="nav-container animate-fade-in-delay">
        <nav className="flex flex-col">
          <a href="#" className="nav-link"><span>Products</span></a>
          <Link href="/vr-canvas" className="nav-link">
            <span>VR Canvas</span>
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </Link>
          <a href="#" className="nav-link"><span>About Us</span></a>
          <a href="#" className="nav-link"><span>Factory Tour</span></a>
          <a href="#" className="nav-link"><span>Quality Control</span></a>
          <a href="#" className="nav-link"><span>R&D Capability</span></a>
          <a href="#" className="nav-link"><span>Contact Us</span></a>
        </nav>
      </div>

      {/* 右侧按钮 */}
      <div className="absolute top-8 right-8 flex items-center gap-3 animate-fade-in">
        <a href="#" className="action-button">
          <span>Request a Quote</span>
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="action-button-white">
          <span>Contact Supplier</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </header>
  )
} 