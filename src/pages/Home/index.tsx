import { useContext } from 'react'
import { GithubContext } from '../../contexts/githubontext'
import { Header } from './header'
import { PostCard } from './postCard'
import { Search } from './search'

export function Home() {
  const { githubIssuesData } = useContext(GithubContext)

  return (
    <div className="">
      <Header />
      <Search />

      <div className="mx-auto mt-14 grid grid-cols-2 justify-between gap-8 pb-52">
        {githubIssuesData.map((issue) => (
          <PostCard
            key={issue.id}
            title={issue.title}
            date={issue.created_at}
            description={issue.body}
          />
        ))}
      </div>
    </div>
  )
}
