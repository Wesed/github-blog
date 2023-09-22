import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'

export interface PostCardProps {
  title: string
  date: string
  description: string
  number: number
}

export function PostCard({ title, date, description, number }: PostCardProps) {
  return (
    <a
      href={`/issues/${number}`}
      className="flex flex-col rounded-lg bg-base_profile p-8"
    >
      <div className=" relative flex items-start justify-between gap-x-2">
        <span className="absolute -top-6 right-0 text-sm/8 text-base_span">
          {formatDistanceToNow(new Date(date), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
        <h1 className=" flex-1 pt-3 text-xl font-bold text-base_title">
          {title}
        </h1>
      </div>

      <div className="description mt-5 overflow-y-hidden text-base_text">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </a>
  )
}
