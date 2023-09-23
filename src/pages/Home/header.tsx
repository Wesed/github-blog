import { ExternalLink, Building, Users2 } from 'lucide-react'
import { GithubContext } from '../../contexts/githubontext'
import { useContext } from 'react'
import { Github } from '../../components/github'

export function Header() {
  const { githubData, githubURL } = useContext(GithubContext)
  const { avatar, bio, company, followers, login, name } = githubData
  return (
    <div className="mx-auto -mt-20 flex items-center gap-8 rounded-lg bg-base_profile px-10 py-8">
      <img
        src={avatar}
        alt="foto de perfil"
        className="h-[148px] w-[148px] rounded-lg"
      />
      <div className="flex flex-col">
        <div className="flex justify-between font-bold text-base_title">
          <h2 className="text-2xl">{name}</h2>
          <a
            href={githubURL}
            target="_blank"
            className="flex gap-2 text-sm text-blue"
            rel="noreferrer"
          >
            GITHUB
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-2 text-base_text">{bio}</p>

        <div className="mt-6 flex gap-6 text-base_subtitle">
          <div className="flex items-center gap-2">
            <Github />
            {login}
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-base_label" />
            {company}
          </div>
          <div className="flex items-center gap-2">
            <Users2 className="h-4 w-4 text-base_label" />
            {followers} followers
          </div>
        </div>
      </div>
    </div>
  )
}
