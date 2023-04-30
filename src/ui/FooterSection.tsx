import { Container } from '@/components'

export const FooterSection = () => {
  return (
    <footer>
      <Container className="flex flex-col items-center justify-center gap-4 pb-20">
        <p className="flex items-center gap-2">
          Feito com
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4 text-lime-500">
            <rect width="256" height="256" fill="none" />
            <path d="M128,216S24,160,24,94A54,54,0,0,1,78,40c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,160,128,216,128,216Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          </svg>
          por <a href="mailto:erickamaral@gmail.com" title="Enviar um e-mail" className="transition hover:text-lime-500">Erick Amaral</a>
        </p>
        <p className="flex items-center gap-1 text-sm font-light text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-3 h-3">
            <rect width="256" height="256" fill="none" />
            <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <path d="M160,152a40,40,0,1,1,0-48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          </svg>
          Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  )
}
