export interface PostCardProps {
  title: string
  date: string
  description: string
}

export function PostCard({ title, date, description }: PostCardProps) {
  return (
    <div className="flex max-w-[416px] flex-col rounded-lg bg-base_profile p-8">
      <div className="flex items-start justify-between">
        <h1 className="flex-1 text-xl font-bold text-base_title">{title}</h1>
        <span className="text-sm/8 text-base_span">{date}</span>
      </div>
      <p className="description mt-5 max-h-[125px] overflow-y-hidden text-base_text">
        {description}
      </p>
    </div>
  )
}
