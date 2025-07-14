import type { ComponentType } from 'react'
import {
  groupByMonth,
  groupByYear,
  groupByDate,
  sortByDate,
} from '../../helpers'

import type {
  AggregatedByMonth,
  AggregatedByYearh,
  AggregatedByDate,
  DataFromResponse,
} from '../../types'

export const GROUPING = {
  BY_MONTH: 'byMonth',
  BY_YEARH: 'byYearh',
  BY_DATE: 'byDate',
} as const

type GroupingType = (typeof GROUPING)[keyof typeof GROUPING]
type GroupedDataType = {
  [GROUPING.BY_MONTH]: AggregatedByMonth[]
  [GROUPING.BY_YEARH]: AggregatedByYearh[]
  [GROUPING.BY_DATE]: AggregatedByDate[]
}

const groupingMap: {
  [K in GroupingType]: (data: DataFromResponse[]) => GroupedDataType[K]
} = {
  [GROUPING.BY_MONTH]: groupByMonth,
  [GROUPING.BY_YEARH]: groupByYear,
  [GROUPING.BY_DATE]: (data) => sortByDate(groupByDate(data)),
}

export default function withGroupedData<T extends GroupingType>(type: T) {
  return function (data: DataFromResponse[]) {
    return function (
      Component: ComponentType<{ list: GroupedDataType[T] }>
    ): ComponentType {
      const groupedList = groupingMap[type](data)

      const Wrapped = () => <Component list={groupedList} />

      Wrapped.displayName = `withAggregatedData(${Component.displayName || Component.name || 'Component'})`

      return Wrapped
    }
  }
}
