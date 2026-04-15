interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{value}</div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
