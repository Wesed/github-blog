import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import { twMerge } from 'tailwind-merge'

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
      className={twMerge(
        'flex flex-col rounded-lg border-2 border-transparent bg-base_profile p-8',
        'hover:border-base_label',
        'hover:scale-105 hover:bg-base_post',
        'transition duration-200',
      )}
    >
      <div className="relative flex items-start justify-between gap-x-2">
        <span className="absolute -top-6 right-0  text-xs/8 text-base_span lg:text-sm/8">
          {formatDistanceToNow(new Date(date), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
        <h1 className="flex-1 pt-3 font-bold text-base_title lg:text-xl">
          {title}
        </h1>
      </div>

      <div className="description mt-5 overflow-y-hidden text-sm text-base_text lg:text-base">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </a>
  )
}
