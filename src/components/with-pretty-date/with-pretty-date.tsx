import type { ComponentType } from 'react'
import { formatDate } from '../../helpers'

function withPrettyDate<P extends { date: string }>(date: string) {
  return function (
    Component: ComponentType<P>
  ): ComponentType<Omit<P, 'date'>> {
    function Wrapped(props: Omit<P, 'date'>) {
      return <Component {...(props as P)} date={formatDate(date)} />
    }
    Wrapped.displayName = `withPrettyDate(${Component.displayName || Component.name || 'Component'})`

    return Wrapped
  }
}

export default withPrettyDate
