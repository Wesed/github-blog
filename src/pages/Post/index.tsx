import { ChevronLeft, ExternalLink } from 'lucide-react'
import { Github } from '../../components/github'
import { Comments } from '../../components/comments'
import { Calendar } from '../../components/calendar'

export function Post() {
  return (
    <div className="-mt-20 flex flex-col rounded-lg bg-base_profile p-8">
      {/* header */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <a
            href=""
            className="flex gap-2 text-xs font-bold uppercase text-blue"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar
          </a>
          <a
            href=""
            className="flex gap-2 text-xs font-bold uppercase text-blue"
          >
            Ver no GITHUB
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <h1 className="mt-5 text-2xl font-bold text-base_title">
          JavaScript data types and data structures
        </h1>

        {/* rodapé */}
        <div className="mt-3 flex gap-6 text-base_subtitle">
          <div className="flex items-center gap-2 text-base_label">
            <Github />
            <span className="text-base_span">cameronwll</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar />
            <span className="text-base_span">Há 1 dia</span>
          </div>
          <div className="flex items-center gap-2">
            <Comments />
            <span className="text-base_span">5 comentários</span>
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  )
}
