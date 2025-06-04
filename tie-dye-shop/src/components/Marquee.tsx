'use client'
import React from 'react'

export function Marquee() {
  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-gradient-to-r from-[#00CED1] via-[#40E0D0] to-[#5F9EA0] text-white overflow-hidden whitespace-nowrap z-50">
      <div className="inline-block animate-marquee">
        <span className="inline-block py-1.5 text-sm">
          🌟 20+ Years Experience | ISO 9001 Certified | Minimum Order: 100pcs | Free Sample Available | 24/7 Online Support 🌟
        </span>
      </div>
    </div>
  )
} 