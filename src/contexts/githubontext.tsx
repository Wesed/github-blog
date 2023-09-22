import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api, userData } from '../lib/axios'

interface GithubDataProps {
  name: string
  avatar: string
  bio: string
  company: string
  followers: string
  login: string
}

interface GithubIssuesDataProps {
  id: number
  title: string
  created_at: string
  body: string
}

interface GithubContext {
  githubData: GithubDataProps
  githubURL: string
  githubIssuesData: GithubIssuesDataProps[]
  fetchGithubIssues: (query?: string) => void
}
export const GithubContext = createContext({} as GithubContext)

interface GithubContextProviderProps {
  children: ReactNode
}

export function GithubContextProvider({
  children,
}: GithubContextProviderProps) {
  const [githubData, setGithubData] = useState<GithubDataProps>(
    {} as GithubDataProps,
  )
  const [githubIssuesData, setGithubIssuesData] = useState<
    GithubIssuesDataProps[]
  >([])

  const githubURL = 'https://github.com/Wesed/'

  const getGithubData = useCallback(async () => {
    try {
      const response = await userData.get('/Wesed')
      const user: GithubDataProps = {
        name: response.data.name,
        avatar: response.data.avatar_url,
        bio: response.data.bio,
        company: response.data.company,
        followers: response.data.followers,
        login: response.data.login,
      }
      setGithubData(user)
    } catch (err) {
      console.log('error')
    }
  }, [])

  // retorna as issues
  const fetchGithubIssues = useCallback(async (query?: string) => {
    let repoParams
    if (query) {
      repoParams = `${query} repo:Wesed/github-blog`
    } else {
      repoParams = 'repo:Wesed/github-blog'
    }

    const response = await api.get('/issues', {
      params: {
        q: repoParams,
      },
    })

    const issues = response.data.items.map((item: GithubIssuesDataProps) => ({
      id: item.id,
      title: item.title,
      created_at: item.created_at,
      body: item.body,
    }))
    setGithubIssuesData(issues)
  }, [])

  // pesquisar entre as issues
  // const fetchGithubIssues = useCallback(
  //   async (query: string) => {
  //     const repoParams = `${query}%20repo:${githubData.login}/github-blog`
  //     console.log(repoParams)
  //     const response = await api.get('/issues', {
  //       params: {
  //         q: repoParams,
  //       },
  //     })

  //     console.log(response.data)
  //   },
  //   [githubData.login],
  // )

  useEffect(() => {
    getGithubData()
    // fetchGithubIssues()
    fetchGithubIssues()
  }, [getGithubData, fetchGithubIssues])

  return (
    <GithubContext.Provider
      value={{ githubData, githubIssuesData, fetchGithubIssues, githubURL }}
    >
      {children}
    </GithubContext.Provider>
  )
}
