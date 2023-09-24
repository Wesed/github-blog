import { ExternalLink, Building, Users2 } from 'lucide-react'
import { GithubContext } from '../../contexts/githubontext'
import { useContext } from 'react'
import { Github } from '../../components/github'

export function Header() {
  const { githubData, githubURL } = useContext(GithubContext)
  const { avatar, bio, company, followers, login, name } = githubData
  return (
    <div className="mx-auto flex gap-2 rounded-lg bg-base_profile p-2 lg:-mt-20 lg:items-center lg:gap-8 lg:px-10 lg:py-8">
      <img
        src={avatar}
        alt="foto de perfil"
        className="h-[90px] rounded-lg lg:h-[148px]"
      />
      <div className="flex flex-col">
        <div className="flex justify-between font-bold text-base_title">
          <h2 className="lg:text-2xl">{name}</h2>
          <a
            href={githubURL}
            target="_blank"
            className="flex h-5 gap-1 border-b border-transparent text-sm text-blue transition duration-100 hover:border-blue lg:gap-2"
            rel="noreferrer"
          >
            GITHUB
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-2 text-sm text-base_text lg:text-base">{bio}</p>

        <div className="-ml-24 mt-6 flex justify-around gap-3 text-sm text-base_subtitle lg:ml-0 lg:justify-start lg:gap-6 lg:text-base">
          <div className="flex items-center gap-1 lg:gap-2">
            <Github />
            {login}
          </div>
          <div className="flex items-center gap-1 lg:gap-2">
            <Building className="h-4 w-4 text-base_label" />
            {company}
          </div>
          <div className="flex items-center gap-1 lg:gap-2">
            <Users2 className="h-4 w-4 text-base_label" />
            {followers} followers
          </div>
        </div>
      </div>
    </div>
  )
}
