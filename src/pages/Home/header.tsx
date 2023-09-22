import { ExternalLink, Github, Building, Users2 } from 'lucide-react'
import avatar from '../../assets/avatar.png'

export function Header() {
  return (
    <div className="mx-auto -mt-20 flex items-center gap-8 rounded-lg bg-base_profile px-10 py-8">
      <img src={avatar} alt="foto de perfil" />
      <div className="flex flex-col">
        <div className="flex justify-between font-bold text-base_title">
          <h2 className="text-2xl">Cameron Williamson</h2>
          <a href="#" className="flex gap-2 text-sm text-blue">
            GITHUB
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-2 text-base_text">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div className="mt-6 flex gap-6 text-base_subtitle">
          <div className="flex items-center gap-2">
            <Github />
            cameronwll
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-base_label" />
            Rocketseat
          </div>
          <div className="flex items-center gap-2">
            <Users2 className="h-4 w-4 text-base_label" />
            32 seguidores
          </div>
        </div>
      </div>
    </div>
  )
}
