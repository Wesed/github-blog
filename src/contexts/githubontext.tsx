import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { userData } from '../lib/axios'

interface GithubDataProps {
  name: string
  avatar: string
  bio: string
  company: string
  followers: string
  login: string
}

interface GithubContext {
  githubData: GithubDataProps
  githubURL: string
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
  const githubURL = 'https://github.com/Wesed/'

  const getGithubData = async () => {
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
  }

  console.log(githubData)

  useEffect(() => {
    getGithubData()
  }, [])

  // console.log(githubData)

  return (
    <GithubContext.Provider value={{ githubData, githubURL }}>
      {children}
    </GithubContext.Provider>
  )
}
