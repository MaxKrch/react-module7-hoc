import type { VideoItemWithDate } from '../../../types'
import Video from './video-item'

type VideoListProps = {
  list: VideoItemWithDate[]
}

export default function VideoList(props: VideoListProps) {
  return props.list.map((item) => (
    <li key={item.url}>
      <Video url={item.url} date={item.date} />
    </li>
  ))
}
