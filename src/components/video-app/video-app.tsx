import { useState } from 'react'
import { videosWithDate } from '../../mock/videos-with-date'
import VideoList from './components/video-list'

export default function VideoApp() {
  const [list] = useState(videosWithDate)

  return (
    <div className="video-list-container">
      <VideoList list={list} />
    </div>
  )
}
