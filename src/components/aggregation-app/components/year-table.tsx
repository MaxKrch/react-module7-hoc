import type { AggregatedByYearh } from '../../../types'

type YearTableProps = {
  list: AggregatedByYearh[]
}

export default function YearTable(props: YearTableProps) {
  console.log('YearTable', props)

  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
