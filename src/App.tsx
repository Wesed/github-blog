import cover from '../src/assets/cover.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './globals.css'
import { Home } from './pages/Home'
import { Post } from './pages/Post'
import { GithubContextProvider } from './contexts/githubontext'

function App() {
  return (
    <GithubContextProvider>
      <div className="min-h-screen bg-base_background p-4 lg:p-0">
        <img
          src={cover}
          alt=""
          className="sr-only lg:not-sr-only lg:mx-auto lg:max-w-[1440px]"
        />
        <div className="relative z-10 mx-auto my-0 max-w-maxWidthProject">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/issues/:id" element={<Post />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </GithubContextProvider>
  )
}

export default App
