import { useContext } from 'react'
import { GithubContext } from '../../contexts/githubontext'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Search() {
  const { githubIssuesData, fetchGithubIssues } = useContext(GithubContext)
  const totalPosts = githubIssuesData.length

  const { register, handleSubmit, reset } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchIssues = (data: SearchFormInput) => {
    fetchGithubIssues(data.query)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchIssues)}
      className="mx-auto mt-20 flex flex-col gap-3"
    >
      <div className="flex justify-between">
        <h2 className="text-lg text-base_subtitle">Publicações</h2>
        <span className="text-sm text-base_span">{totalPosts} publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="rounded-md border-base_border bg-base_input px-4 py-3 text-white placeholder:text-base_label"
        {...register('query')}
      />
    </form>
  )
}
