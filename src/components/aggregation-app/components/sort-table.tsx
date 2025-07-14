import type { AggregatedByDate } from '../../../types'

type SortTableProps = {
  list: AggregatedByDate[]
}
export default function SortTable(props: SortTableProps) {
  console.log('SortTable', props)

  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item) => (
            <tr key={item.date}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
