type DateTimeProps = {
  date: string
}

export default function DateTime(props: DateTimeProps) {
  return <p className="date">{props.date}</p>
}
