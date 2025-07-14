import type { ComponentType, ReactNode } from 'react'
import Popular from '../blog-app/components/popular-item'
import New from '../blog-app/components/new-item'

export default function withHightlightCategory<
  P extends {
    children?: ReactNode
    views: number
  },
>(Component: ComponentType<P>): ComponentType<P> {
  function Wrapped(props: P) {
    let WrappedComponent: ReactNode

    if (props.views > 1000) {
      WrappedComponent = (
        <Popular>
          <Component {...props} />
        </Popular>
      )
    } else if (props.views < 100) {
      WrappedComponent = (
        <New>
          <Component {...props} />
        </New>
      )
    } else {
      WrappedComponent = <Component {...props} />
    }

    return WrappedComponent
  }
  Wrapped.displayName = `withHightlightCategory(${Component.displayName || Component.name || 'Component'})`

  return Wrapped
}
