import cover from '../../assets/cover.png'
import avatar from '../../assets/avatar.png'
import { Building, ExternalLink, Users2 } from 'lucide-react'
import { Github } from '../../components/github'
export function Home() {
  return (
    <div className="min-h-screen bg-base_background">
      <img src={cover} alt="" className="mx-auto max-w-[1440px]" />

      <div className="relative z-10 mx-auto my-0 max-w-maxWidthProject">
        {/* cabeçalho */}
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
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
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

        {/* busca */}
        <div className="">

        </div>
      </div>
    </div>
  )
}
