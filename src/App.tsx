import AggregationApp from './components/aggregation-app'
import BlogApp from './components/blog-app'
import VideoApp from './components/video-app'

function App() {
  return (
    <div className="container">
      <VideoApp />
      <BlogApp />
      <AggregationApp />
    </div>
  )
}

export default App
