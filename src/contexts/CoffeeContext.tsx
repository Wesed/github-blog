import { ReactNode, createContext, useEffect, useState } from 'react'

interface Order {
  id: string
  image: string
  title: string
  qtd: number
  price: number
}

interface CheckoutData {
  zipCode: string
  addressLine1: string
  house: number
  addressLine2?: string
  neighborhood: string
  city: string
  state: string
  paymentOption: string
}

interface CoffeeContextProps {
  url: string
  orders: Order[]
  checkoutData: CheckoutData
  newOrder: (order: Order) => void
  updatedQtdOrder: (id: string, newQtd: number) => void
  removeOrder: (id: string) => void
  dataToCheckout: (data: CheckoutData) => void
}

export const CoffeeContext = createContext({} as CoffeeContextProps)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  // const url = 'http://localhost:5173/'
  const url = 'https://coffee-delivery-three-taupe.vercel.app/'

  /* 
    se tiver algo no localStorage, inicia o state com esse valor
    senao tiver, inicia um array vazio
    converte os dados do localStorage pra object
  */
  const [orders, setOrders] = useState<Order[]>(() => {
    const orderStateAsJSON = localStorage.getItem('@coffee-delivery:orders')

    if (orderStateAsJSON) {
      return JSON.parse(orderStateAsJSON)
    }

    return []
  })
  const [checkoutData, setCheckoutData] = useState<CheckoutData>(() => {
    const checkoutStateAsJSON = localStorage.getItem(
      '@coffee-delivery:checkout',
    )

    if (checkoutStateAsJSON) {
      return JSON.parse(checkoutStateAsJSON)
    }

    return {}
  })

  useEffect(() => {
    // toda vez que o orders mudar, salva no localStorage
    const orderJSON = JSON.stringify(orders)
    localStorage.setItem('@coffee-delivery:orders', orderJSON)

    // salva os dados do checkout
    const checkoutJSON = JSON.stringify(checkoutData)
    localStorage.setItem('@coffee-delivery:checkout', checkoutJSON)
  }, [orders, checkoutData])

  const newOrder = (newOrder: Order) => {
    setOrders((state) => [...state, newOrder])
  }

  // altera a qtd dos produtos
  const updatedQtdOrder = (id: string, newQtd: number) => {
    setOrders(
      orders.map((order) => {
        if (order.id === id) {
          return { ...order, qtd: newQtd }
        } else {
          return order
        }
      }),
    )
  }

  // deleta um produto
  const removeOrder = (id: string) => {
    /* explicacao
    filtro todos os pedidos, exceto aquele que possui id igual ao da exclusao 
    */
    const updatedOrderAfterRemove = orders.filter((order) => {
      return order.id !== id
    })
    setOrders(updatedOrderAfterRemove)
  }

  // armazena info de endereco e forma de pgto
  const dataToCheckout = (data: CheckoutData) => {
    setCheckoutData(data)
  }

  return (
    <CoffeeContext.Provider
      value={{
        checkoutData,
        url,
        newOrder,
        orders,
        updatedQtdOrder,
        removeOrder,
        dataToCheckout,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
