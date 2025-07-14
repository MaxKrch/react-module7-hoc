import type { VideoItemWithDate } from '../../../types'
import withPrettyTime from '../../with-pretty-date'
import DateTime from './date-time'

export default function Video(props: VideoItemWithDate) {
  const PrettyDateTime = withPrettyTime(props.date)(DateTime)
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <PrettyDateTime />
    </div>
  )
}
