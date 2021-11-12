import React from 'react'
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📷 Images' },
  { url: '/videos', text: '📺 Videos' },

]

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {
        links.map(({ url, text },index) => (
          <NavLink key={index} to={url} className="dark:text-blue-300 mr-5 mb-0" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 mr-5">
            {text}
          </NavLink>
        ))
      }
    </div>
  )
}
