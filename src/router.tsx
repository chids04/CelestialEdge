import { createRouter as createTanstackRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
import * as TanstackQuery from './integrations/tanstack-query/root-provider'
import { http, WagmiProvider, createConfig } from 'wagmi'
import { mainnet, linea, lineaSepolia, polygonAmoy } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

const config = createConfig({
  // this is a spa application
  ssr: false,
  chains: [mainnet, linea, lineaSepolia, polygonAmoy],
  connectors: [
    metaMask({
      infuraAPIKey: import.meta.env.VITE_INFURA_KEY,
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [linea.id]: http(),
    [lineaSepolia.id]: http(),
    [polygonAmoy.id]: http(),
  },
})

// Create a new router instance
export const createRouter = () => {
  const rqContext = TanstackQuery.getContext()

  const router = createTanstackRouter({
    routeTree,
    context: { ...rqContext },
    defaultPreload: 'intent',
    Wrap: (props: { children: React.ReactNode }) => {
      return (
        <WagmiProvider config={config}>
          <TanstackQuery.Provider {...rqContext}>
            {props.children}
          </TanstackQuery.Provider>
        </WagmiProvider>
      )
    },
  })

  setupRouterSsrQueryIntegration({ router, queryClient: rqContext.queryClient })

  return router
}

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
