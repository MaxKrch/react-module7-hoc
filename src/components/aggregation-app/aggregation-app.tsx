import { Component, type ComponentType } from 'react'
import { url } from '../../consts'
import MonthTable from './components/month-table'
import YearTable from './components/year-table'
import SortTable from './components/sort-table'
import withGroupedData from '../with-grouped-data'
import type { DataFromResponse } from '../../types'
import { GROUPING } from '../with-grouped-data/with-grouped-data'

type AggregatedComponent = ComponentType // Универсальный тип для HOC'ов

type AggregationAppState = {
  list: DataFromResponse[]
  TableByMonth?: AggregatedComponent
  TableByYear?: AggregatedComponent
  TableWithSorted?: AggregatedComponent
}

export default class AggregationApp extends Component<{}, AggregationAppState> {
  state: AggregationAppState = {
    list: [],
  }

  componentDidMount(): void {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          list: data.list,
          TableByMonth: withGroupedData(GROUPING.BY_MONTH)(data.list)(
            MonthTable
          ),
          TableByYear: withGroupedData(GROUPING.BY_YEARH)(data.list)(YearTable),
          TableWithSorted: withGroupedData(GROUPING.BY_DATE)(data.list)(
            SortTable
          ),
        })
      })
      .catch((error) => console.log(`Что-то пошло не так: ${error}`))
  }

  render() {
    const { TableByMonth, TableByYear, TableWithSorted } = this.state

    return (
      <div id="app" className="aggregated-data-container">
        {TableByMonth && <TableByMonth />}
        {TableByYear && <TableByYear />}
        {TableWithSorted && <TableWithSorted />}
      </div>
    )
  }
}
