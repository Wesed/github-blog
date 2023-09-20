import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Items } from '../components/Title/items'
import { CoffeeContainer } from '../components/Products/coffeeContainer'
import { useContext } from 'react'
import { CoffeeContext } from '../contexts/CoffeeContext'

export function Home() {
  const { url } = useContext(CoffeeContext)

  return (
    <main className="min-h-screen">
      {/* title */}
      <div className="flex w-full justify-between bg-backgroundContainer bg-cover px-40 py-24">
        <div className="w-[600px]">
          <div className="flex flex-col gap-4">
            <h1 className="font-serif text-5xl font-extrabold text-base_title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <span className="text-xl text-base_subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-5 py-16">
            <Items
              icon={
                <ShoppingCart
                  size={18}
                  weight="fill"
                  className="fill-background"
                />
              }
              text="Compra simples e segura"
              color="bg-yellow_dark"
            />
            <Items
              icon={
                <Package size={18} weight="fill" className="fill-background" />
              }
              text="Embalagem que mantém o café intacto"
              color="bg-base_text"
            />
            <Items
              icon={
                <Timer size={18} weight="fill" className="fill-background" />
              }
              text="Entrega rápida e rastreada"
              color="bg-yellow"
            />
            <Items
              icon={
                <Coffee size={18} weight="fill" className="fill-background" />
              }
              text="O café chega fresquinho até você"
              color="bg-purple"
            />
          </div>
        </div>
        <img src={`${url}imagem.png`} alt="foto de um café" />
      </div>
      {/* produtos */}
      <div className="px-40 pb-40">
        <h2 className="font-serif text-5xl font-extrabold text-base_title">
          Nossos cafés
        </h2>
        <CoffeeContainer />
      </div>
    </main>
  )
}
