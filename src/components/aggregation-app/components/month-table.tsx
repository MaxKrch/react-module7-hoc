import type { AggregatedByMonth } from '../../../types'

type MonthTableProps = {
  list: AggregatedByMonth[]
}
export default function MonthTable(props: MonthTableProps) {
  console.log('MonthTable', props)

  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item) => (
            <tr key={item.month}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
