import { Marquee } from '../components/Marquee'
import { Header } from '../components/Header'
import { Button, ButtonGroup } from '../components/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* 顶部滚动文字 */}
      <Marquee />
      
      {/* 导航栏 */}
      <Header />
      
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* 背景渐变 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F0F8FF] via-[#E6E6FA] to-[#B0E0E6] animate-gradient opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] animate-pulse-slow" />
        </div>
        
        {/* 主要内容 */}
        <div className="relative z-10 max-w-7xl mx-auto pt-32 px-6">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">Since 2023</span>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">Verified Supplier</span>
              </div>
              <h1 className="text-6xl font-black text-gray-900 mb-6">
                Traditional Craftsmanship,<br />
                Modern Innovation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Leading manufacturer of premium tie-dye textiles.<br />
                Custom designs, bulk orders, and OEM/ODM services available.
              </p>
              <ButtonGroup>
                <Link href="/products" className="hero-btn-primary">
                  <span>View Products</span>
                </Link>
                <Button className="hero-btn-secondary">Get Quotation</Button>
              </ButtonGroup>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/image/logo.jpg" 
                  alt="TianYun Tie-Dye Premium Products" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 认证标志 */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex gap-4 items-center">
                  <img src="/image/ISO-CC/1.png" alt="ISO Certified" className="h-12 w-auto" />
                  <img src="/image/ISO-CC/2.png" alt="CE Certified" className="h-12 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center hover-lift">
              <div className="text-4xl font-bold text-indigo-600 mb-2 animate-float">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">1M+</div>
              <div className="text-gray-600">Products Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Collections</h2>
              <p className="text-gray-600">Discover our exclusive tie-dye artworks and digital collectibles</p>
            </div>
            <ButtonGroup>
              <Button variant="secondary" is3d>View Gallery</Button>
              <Button variant="primary" is3d>Digital Collection</Button>
            </ButtonGroup>
          </div>
          
          {/* 高定系列 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Haute Couture Collection</h3>
            <div className="grid grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4 hover-scale">
                    <img 
                      src={`/image/Collections/${item}.png`}
                      alt={`Haute Couture ${item}`}
                      className="w-full h-full object-none object-top transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <Button variant="haute">View Artwork</Button>
                        <Button variant="haute">Digital Token</Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">Limited Edition Artwork</h3>
                      <p className="text-sm text-gray-500">Hand-crafted by Master Artisan</p>
                    </div>
                    <div className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-sm">Limited</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Edition:</span>
                      <span className="text-sm font-medium">1 of 10</span>
                    </div>
                    <Button variant="artisan" ripple className="opacity-50 cursor-not-allowed">Inquire Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 数字藏品系列 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Digital Collectibles</h3>
            <div className="grid grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-black/60 text-white rounded-full text-sm">
                        #{String(item).padStart(3, '0')}
                      </span>
                    </div>
                    <img 
                      src={`/image/digital/${item}.png`}
                      alt={`Digital Art ${item}`}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col items-center justify-center">
                      <h4 className="text-white font-bold mb-2">TianYun Digital Collection #{String(item).padStart(3, '0')}</h4>
                      <p className="text-white/80 text-sm mb-4">Limited Edition: 10 Pieces</p>
                      <div className="flex gap-3">
                        <Button variant="secondary">View Details</Button>
                        <Button variant="primary">Collect Now</Button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">TianYun Digital Art #{String(item).padStart(3, '0')}</h4>
                      <span className="text-indigo-600 font-medium">$ 1,499</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Sold: 6/10</span>
                      <span>Release Date: 2024.03.{item}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 常规产品系列 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Ready-to-Wear Collection</h3>
            <div className="grid grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                    <img 
                      src={`/image/clothes/${item}.png`}
                      alt={`Product ${item}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button variant="secondary">View Details</Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold">Premium Tie-Dye T-Shirt</h3>
                    <div className="px-2 py-1 bg-green-100 text-green-600 rounded text-sm">In Stock</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-sm">MOQ: 100 pieces</p>
                    <Button variant="artisan" ripple className="opacity-50 cursor-not-allowed">Request Price</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Craftsmanship Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Master Artisan Heritage</h2>
            <p className="text-gray-600">Perfect Fusion of Traditional Craftsmanship and Modern Innovation</p>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
                <img 
                  src={`/image/master/1.png`}
                  alt="Master Chen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Master Chen</h3>
                    <p className="text-sm text-white/80 mb-3">National Intangible Cultural Heritage Inheritor</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">30 Years Experience</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Tie-Dye Master</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Arts & Crafts Master</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated to traditional tie-dye craftsmanship for over 30 years, specializing in multiple tie-dye techniques. Works have won numerous national awards. Committed to combining traditional tie-dye art with modern design.
                </p>
                <Button variant="artisan" ripple className="opacity-50 cursor-not-allowed">Explore More Works →</Button>
              </div>
            </div>
            
            <div className="group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
                <img 
                  src={`/image/master/2.png`}
                  alt="Master Zhang"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Master Zhang</h3>
                    <p className="text-sm text-white/80 mb-3">Contemporary Tie-Dye Innovator</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">25 Years Experience</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Design Innovation</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">International Awards</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pioneering the fusion of modern design with traditional tie-dye techniques. Specializing in creating vibrant, contemporary patterns that appeal to global markets. Zhang's innovative approach has earned international recognition and multiple design awards.
                </p>
                <Button variant="artisan" ripple className="opacity-50 cursor-not-allowed">Explore More Works →</Button>
              </div>
            </div>
            
            <div className="group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
                <img 
                  src={`/image/master/3.png`}
                  alt="Master Liu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Master Liu</h3>
                    <p className="text-sm text-white/80 mb-3">Natural Dye Specialist</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">20 Years Experience</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Natural Pigments</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Eco-Friendly Processes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Expert in sustainable, eco-friendly tie-dye techniques using only natural pigments and dyes. Liu's work focuses on reviving ancient methods while maintaining environmental responsibility. Known for creating subtle, elegant designs with harmonious color palettes derived from plant and mineral sources.
                </p>
                <Button variant="artisan" ripple className="opacity-50 cursor-not-allowed">Explore More Works →</Button>
              </div>
            </div>
          </div>

          {/* Craftsmanship Heritage Program */}
          <div className="bg-gray-50 rounded-2xl p-12">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Craftsmanship Heritage Program</h3>
                <p className="text-gray-600 mb-8">
                  We are dedicated to preserving and innovating traditional tie-dye craftsmanship through our master-apprentice training program, ensuring the continuation and development of this ancient art.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Master Studio</h4>
                      <p className="text-sm text-gray-600">Learn traditional tie-dye techniques from masters</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Innovation Workshop</h4>
                      <p className="text-sm text-gray-600">Explore the fusion of tradition and modernity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Cultural Exchange</h4>
                      <p className="text-sm text-gray-600">Promote international craft cultural exchange</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="/image/workshops/1.png" 
                    alt="Workshop Display" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-indigo-600">20+</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Apprentices Trained</p>
                      <p className="text-2xl font-bold">200+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600">Your reliable partner in premium tie-dye manufacturing</p>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {/* Advantage Cards */}
            <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-gray-600 mb-4">
                ISO 9001 certified manufacturing process with strict quality control at every step
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Quality inspection reports</li>
                <li>• Material testing certificates</li>
                <li>• Color fastness guarantee</li>
              </ul>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Factory Direct</h3>
              <p className="text-gray-600 mb-4">
                20+ years manufacturing experience with competitive factory-direct pricing
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• No middleman markup</li>
                <li>• Flexible MOQ options</li>
                <li>• Custom packaging available</li>
              </ul>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Global Shipping</h3>
              <p className="text-gray-600 mb-4">
                Fast and reliable shipping worldwide with professional export service
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Door-to-door delivery</li>
                <li>• Real-time tracking</li>
                <li>• Export documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Production Process</h2>
            <p className="text-gray-600">From design to delivery, quality at every step</p>
          </div>
          <div className="grid grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center relative">
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-sm text-gray-600">Custom pattern development</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center relative">
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Sample</h3>
              <p className="text-sm text-gray-600">Pre-production approval</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center relative">
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Production</h3>
              <p className="text-sm text-gray-600">Mass manufacturing</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center relative">
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">QC</h3>
              <p className="text-sm text-gray-600">Quality inspection</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center relative">
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">5</span>
                <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-sm text-gray-600">Worldwide shipping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Inquiry Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
              <p className="text-xl opacity-90 mb-8">
                Get in touch with us today for custom designs and wholesale pricing
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Free sample available</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Custom designs accepted</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>24/7 online support</span>
                </li>
              </ul>
              <ButtonGroup>
                <Button variant="primary" ripple>Contact Us Now</Button>
                <Button variant="secondary">Download Catalog</Button>
              </ButtonGroup>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input type="text" placeholder="Your Name *" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white" />
                  </div>
                  <div>
                    <input type="email" placeholder="Your Email *" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white" />
                  </div>
                </div>
                <div>
                  <input type="text" placeholder="Product Interest *" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white" />
                </div>
                <div>
                  <input type="text" placeholder="Quantity Required" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white" />
                </div>
                <div>
                  <textarea placeholder="Message *" rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white"></textarea>
                </div>
                <Button variant="primary" className="w-full" loading>Send Inquiry</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Art Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Digital Art Gallery</h2>
            <p className="text-gray-600">Explore Unique Digital Art Collections</p>
          </div>
          
          {/* 3D展示区 */}
          <div className="mb-16">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">3D Virtual Gallery</h3>
                  <p className="mb-6">Experience Our Digital Art Collection in Immersive 3D</p>
                  <Link href="/vr-canvas">
                    <Button variant="primary" ripple is3d>Enter Virtual Gallery</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* NFT展示区 */}
          <div className="grid grid-cols-4 gap-8 mb-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/60 text-white rounded-full text-sm">
                      #{String(item).padStart(3, '0')}
                    </span>
                  </div>
                  <img 
                    src={`/image/digital/${item}.png`}
                    alt={`Digital Art ${item}`}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col items-center justify-center">
                    <h4 className="text-white font-bold mb-2">TianYun Digital Collection #{String(item).padStart(3, '0')}</h4>
                    <p className="text-white/80 text-sm mb-4">Limited Edition: 10 Pieces</p>
                    <div className="flex gap-3">
                      <Button variant="secondary">View Details</Button>
                      <Button variant="primary">Collect Now</Button>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">TianYun Digital Art #{String(item).padStart(3, '0')}</h4>
                    <span className="text-indigo-600 font-medium">$ 1,499</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Sold: 6/10</span>
                    <span>Release Date: 2024.03.{item}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Collection Benefits */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Digital Collection Benefits</h2>
            <p className="text-white/80">Exclusive Privileges for Digital Collection Holders</p>
          </div>

          <div className="grid grid-cols-4 gap-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Priority Purchase</h3>
              <p className="text-white/80 text-sm">Early access to new product releases</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Exclusive Certificate</h3>
              <p className="text-white/80 text-sm">Blockchain-verified authentication</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">One-on-One Consultation</h3>
              <p className="text-white/80 text-sm">Direct communication with master artisans</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Value-Added Services</h3>
              <p className="text-white/80 text-sm">Secondary market trading privileges</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="privilege" ripple is3d>Explore More Benefits</Button>
          </div>
        </div>
      </section>
    </main>
  )
}