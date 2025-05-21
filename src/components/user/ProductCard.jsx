import { ShoppingCart, Star } from 'lucide-react'
import React from 'react'

const ProductCard = ({ product }) => {
  return (
      <div className='text-white/80'>
          <div className="relative ">
              <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-contain  p-4"
              />
              {product.bestseller && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                      BESTSELLER
                  </span>
              )}
              <button
               
                  className="absolute bottom-2 right-2  p-2 rounded-full hover:bg-rose-700 transition-colors"
              >
                  <ShoppingCart className="w-5 h-5" />
              </button>
          </div>
          <div className="p-4">
              <div className="flex justify-between items-start">
                  <h3 className="font-medium ">{product?.name}||product namje</h3>
                  <span className="font-bold ">${product.price}||price</span>
              </div>
              <div className="flex items-center mt-2">
                  <span className="text-xs px-2 py-1 rounded-full">
                      category
                  </span>
                  <div className="flex items-center ml-2">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="text-xs  ml-1">
                          rating || review
                      </span>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ProductCard