import React from 'react'

const ThemeToggle = () => {
 
    const toggle = ()=>{
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
           
          } else {
            document.documentElement.classList.add('dark');
          }
    }

  return (
    <button onClick={toggle} className="mt-4 p-2 text-white">
      Toggle Theme
    </button>
  )
}

export default ThemeToggle