import cover from '../src/assets/cover.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './globals.css'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

function App() {
  return (
    <div className="min-h-screen bg-base_background">
      <img src={cover} alt="" className="mx-auto max-w-[1440px]" />
      <div className="relative z-10 mx-auto my-0 max-w-maxWidthProject">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
