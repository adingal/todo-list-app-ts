import React from 'react'

interface HeaderProps {
  text?: string // Optional
}

const Header: React.FC<HeaderProps> = ({ text = 'Todo List App' }) => {
  return (
    <header className='py-4 md:py-5 lg:py-6'>
      <div className='max-w-md mx-auto px-4 text-center'>
        <p className='text-2xl md:text-3xl lg:text-4xl font-sans font-bold'>{text}</p>
      </div>
    </header>
  )
}

export default Header