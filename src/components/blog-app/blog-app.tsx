import { useState } from 'react'
import { itemsWithViews } from '../../mock/items-with-views'
import List from './components/item-list'

export default function BlogApp() {
  const [list] = useState(itemsWithViews)

  return (
    <div className="video-list-container">
      <List list={list} />
    </div>
  )
}
