'use client';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

// 产品类型定义
type Product = {
  id: number;
  name: string;
  category: string;
  grade: 'Standard' | 'Premium' | 'Luxury';
  limited: boolean;
  price: number;
  image: string;
  description: string;
};

// 筛选器状态
type Filters = {
  grade: string[];
  limited: boolean | null;
  category: string[];
  priceRange: {
    min: number;
    max: number;
  };
};

// 示例产品数据
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Indigo Mountain Tie-Dye T-Shirt",
    category: "Clothing",
    grade: "Premium",
    limited: false,
    price: 89.99,
    image: "/products/tshirt1.jpg",
    description: "Hand-dyed premium cotton t-shirt with indigo mountain pattern"
  },
  {
    id: 2,
    name: "Ocean Waves Silk Scarf",
    category: "Accessories",
    grade: "Luxury",
    limited: true,
    price: 159.99,
    image: "/products/scarf1.jpg",
    description: "Limited edition silk scarf with ocean-inspired tie-dye pattern"
  },
  {
    id: 3,
    name: "Summer Breeze Cotton Dress",
    category: "Clothing",
    grade: "Premium",
    limited: false,
    price: 129.99,
    image: "/products/dress1.jpg",
    description: "Lightweight summer dress with multi-color tie-dye technique"
  },
  {
    id: 4,
    name: "Galaxy Tie-Dye Tapestry",
    category: "Home Decor",
    grade: "Standard",
    limited: false,
    price: 49.99,
    image: "/products/tapestry1.jpg",
    description: "Cotton wall tapestry with cosmic tie-dye design"
  },
  {
    id: 5,
    name: "Shibori Indigo Pillow Cover",
    category: "Home Decor",
    grade: "Premium",
    limited: false,
    price: 39.99,
    image: "/products/pillow1.jpg",
    description: "Traditional Shibori technique pillow cover in indigo blue"
  },
  {
    id: 6,
    name: "Artisan Tie-Dye Tote Bag",
    category: "Accessories",
    grade: "Standard",
    limited: false,
    price: 45.99,
    image: "/products/tote1.jpg",
    description: "Handcrafted cotton tote bag with vibrant tie-dye pattern"
  },
  {
    id: 7,
    name: "Master Chen Special Edition Scarf",
    category: "Accessories",
    grade: "Luxury",
    limited: true,
    price: 299.99,
    image: "/products/scarf2.jpg",
    description: "Limited edition scarf personally dyed by Master Chen using ancient techniques"
  },
  {
    id: 8,
    name: "Gradient Sunset Linen Tablecloth",
    category: "Home Decor",
    grade: "Premium",
    limited: false,
    price: 79.99,
    image: "/products/tablecloth1.jpg",
    description: "Linen tablecloth with gradient sunset tie-dye pattern"
  }
];

// 商品种类列表
const categories = [
  "Clothing",
  "Accessories",
  "Home Decor",
  "Wall Art",
  "Bedding",
  "Curtains",
  "Handkerchiefs"
];

// 商品等级列表
const grades = ["Standard", "Premium", "Luxury"];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Filters>({
    grade: [],
    limited: null,
    category: [],
    priceRange: { min: 0, max: 1000 }
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(sampleProducts);

  // 处理筛选逻辑
  useEffect(() => {
    let results = sampleProducts;
    
    // 搜索词筛选
    if (searchTerm) {
      results = results.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // 等级筛选
    if (filters.grade.length > 0) {
      results = results.filter(product => filters.grade.includes(product.grade));
    }
    
    // 限量版筛选
    if (filters.limited !== null) {
      results = results.filter(product => product.limited === filters.limited);
    }
    
    // 分类筛选
    if (filters.category.length > 0) {
      results = results.filter(product => filters.category.includes(product.category));
    }
    
    // 价格范围筛选
    results = results.filter(product => 
      product.price >= filters.priceRange.min && 
      product.price <= filters.priceRange.max
    );
    
    setFilteredProducts(results);
  }, [searchTerm, filters]);

  // 更新筛选条件
  const handleFilterChange = (filterType: keyof Filters, value: any) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      
      if (filterType === 'grade') {
        if (newFilters.grade.includes(value)) {
          newFilters.grade = newFilters.grade.filter(item => item !== value);
        } else {
          newFilters.grade = [...newFilters.grade, value];
        }
      } else if (filterType === 'limited') {
        newFilters.limited = value;
      } else if (filterType === 'category') {
        if (newFilters.category.includes(value)) {
          newFilters.category = newFilters.category.filter(item => item !== value);
        } else {
          newFilters.category = [...newFilters.category, value];
        }
      } else if (filterType === 'priceRange') {
        newFilters.priceRange = value;
      }
      
      return newFilters;
    });
  };

  // 清除所有筛选条件
  const clearFilters = () => {
    setFilters({
      grade: [],
      limited: null,
      category: [],
      priceRange: { min: 0, max: 1000 }
    });
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        
        {/* 搜索栏 */}
        <div className="mb-6 flex items-center gap-2">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <button 
            className="p-3 bg-indigo-600 text-white rounded-xl flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <AdjustmentsHorizontalIcon className="w-5 h-5" />
          </button>
        </div>
        
        {/* 筛选区域 */}
        <div className={`bg-white rounded-xl shadow-sm border border-gray-100 mb-8 overflow-hidden transition-all duration-300 ${isFilterOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Filter Products</h2>
              <button 
                className="text-sm text-indigo-600 hover:text-indigo-800"
                onClick={clearFilters}
              >
                Clear All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* 商品等级 */}
              <div>
                <h3 className="font-medium mb-2">Product Grade</h3>
                {grades.map(grade => (
                  <div key={grade} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`grade-${grade}`}
                      checked={filters.grade.includes(grade)}
                      onChange={() => handleFilterChange('grade', grade)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`grade-${grade}`} className="ml-2 text-sm text-gray-700">
                      {grade}
                    </label>
                  </div>
                ))}
              </div>
              
              {/* 限量版 */}
              <div>
                <h3 className="font-medium mb-2">Limited Edition</h3>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="limited-all"
                    name="limited"
                    checked={filters.limited === null}
                    onChange={() => handleFilterChange('limited', null)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor="limited-all" className="ml-2 text-sm text-gray-700">
                    All Products
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="limited-yes"
                    name="limited"
                    checked={filters.limited === true}
                    onChange={() => handleFilterChange('limited', true)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor="limited-yes" className="ml-2 text-sm text-gray-700">
                    Limited Edition Only
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="limited-no"
                    name="limited"
                    checked={filters.limited === false}
                    onChange={() => handleFilterChange('limited', false)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor="limited-no" className="ml-2 text-sm text-gray-700">
                    Regular Products Only
                  </label>
                </div>
              </div>
              
              {/* 商品种类 */}
              <div>
                <h3 className="font-medium mb-2">Product Category</h3>
                <div className="max-h-44 overflow-y-auto pr-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        checked={filters.category.includes(category)}
                        onChange={() => handleFilterChange('category', category)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 价格范围 */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Min: ${filters.priceRange.min}</span>
                  <span className="text-sm text-gray-500">Max: ${filters.priceRange.max}</span>
                </div>
                <div className="mb-4">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={filters.priceRange.min}
                    onChange={(e) => handleFilterChange('priceRange', { ...filters.priceRange, min: Number(e.target.value) })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={filters.priceRange.max}
                    onChange={(e) => handleFilterChange('priceRange', { ...filters.priceRange, max: Number(e.target.value) })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 产品列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="h-52 relative overflow-hidden">
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                    <span className="text-gray-400">Product Image</span>
                  </div>
                  {product.limited && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Limited Edition
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-1">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      product.grade === 'Luxury' ? 'bg-purple-500' : 
                      product.grade === 'Premium' ? 'bg-indigo-500' : 'bg-blue-500'
                    }`}></span>
                    <span className="text-xs text-gray-500">{product.grade}</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <p className="text-xs text-gray-500 mb-3 h-10 overflow-hidden">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-indigo-600">${product.price}</span>
                    <button className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-200 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center">
              <p className="text-gray-500">No products match your current filters.</p>
              <button 
                className="mt-4 text-indigo-600 hover:text-indigo-800"
                onClick={clearFilters}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 