'use client'
import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'haute' | 'nft' | 'artisan' | 'privilege'
  children: React.ReactNode
  onClick?: () => void
  loading?: boolean
  className?: string
  ripple?: boolean
  is3d?: boolean
}

export function Button({
  variant = 'primary',
  children,
  onClick,
  loading = false,
  className = '',
  ripple = false,
  is3d = false,
}: ButtonProps) {
  const baseClass = `btn-${variant}`
  const loadingClass = loading ? 'btn-loading' : ''
  const rippleClass = ripple ? 'btn-ripple' : ''
  const threeDClass = is3d ? 'btn-3d' : ''
  
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`${baseClass} ${loadingClass} ${rippleClass} ${threeDClass} ${className}`}
    >
      <span>{children}</span>
    </button>
  )
}

export function ButtonGroup({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`btn-group ${className}`}>
      {children}
    </div>
  )
} 