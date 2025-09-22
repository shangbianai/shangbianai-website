import React from 'react'

const Logo = ({ className = "h-8 w-auto", size = "normal" }) => {
  const basePath = import.meta.env.BASE_URL || '/'
  const logoSrc = size === "small" ? `${basePath}images/logo-small.png` : `${basePath}images/logo-small.png`
  const logoSize = size === "small" ? "h-20 w-20" : "h-32 w-32"
  
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo图片 */}
      <img 
        src={logoSrc}
        alt="熵变智元 SHANG BIAN ZHI YUAN"
        className={`${logoSize} object-contain`}
        onError={(e) => {
          console.error('Logo image failed to load:', logoSrc);
          e.target.style.display = 'none';
          const parent = e.target.parentElement;
          const fallback = parent.querySelector('.logo-fallback');
          if (fallback) {
            fallback.classList.remove('hidden');
            fallback.classList.add('flex');
          }
        }}
      />
      
      {/* 文字fallback（图片加载失败时显示） */}
      <div className="hidden flex-col logo-fallback">
        <div className="text-lg font-bold text-black tracking-tight">
          熵变智元
        </div>
        <div className="text-xs text-gray-600 tracking-wider -mt-1">
          SHANG BIAN ZHI YUAN
        </div>
      </div>
    </div>
  )
}

export default Logo
