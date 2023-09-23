import { ChevronLeft, ExternalLink } from 'lucide-react'
import { Github } from '../../components/github'
import { Comments } from '../../components/comments'
import { Calendar } from '../../components/calendar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { issueData } from '../../lib/axios'
interface IssueProps {
  url: string
  title: string
  author: string
  comments: number
  body: string
  date: string
}

export function Post() {
  const { id } = useParams()
  const [issue, setIssue] = useState<IssueProps>({} as IssueProps)

  useEffect(() => {
    const getIssuesById = async () => {
      const response = await issueData.get(`/issues/${id}`)

      const issueInfo: IssueProps = {
        url: response.data.html_url,
        title: response.data.title,
        author: response.data.user.login,
        comments: response.data.comments,
        body: response.data.body,
        date: response.data.created_at,
      }

      setIssue(issueInfo)
    }
    getIssuesById()
  }, [id])

  return (
    <div className="-mt-20 flex flex-col">
      {/* header */}
      <div className="flex flex-col rounded-lg bg-base_profile p-8">
        <div className="flex justify-between">
          <a
            href="/"
            className="flex gap-2 text-xs font-bold uppercase text-blue"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar
          </a>
          <a
            href={issue.url}
            target="_blank"
            className="flex gap-2 text-xs font-bold uppercase text-blue"
            rel="noreferrer"
          >
            Ver no GITHUB
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <h1 className="mt-5 text-2xl font-bold text-base_title">
          {issue.title}
        </h1>

        {/* rodapé */}
        <div className="mt-3 flex gap-6 text-base_subtitle">
          <div className="flex items-center gap-2 text-base_label">
            <Github />
            <span className="text-base_span">{issue.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar />
            <span className="text-base_span">
              {issue.date &&
                formatDistanceToNow(new Date(issue.date), {
                  addSuffix: true,
                  locale: ptBR,
                })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Comments />
            <span className="text-base_span">{issue.comments} comentários</span>
          </div>
        </div>
      </div>

      <div className="markDownFormatter px-8 py-10 text-base_text">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
      </div>
    </div>
  )
}
