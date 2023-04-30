import { motion } from 'framer-motion';

import { Container, Title } from '@/components';

export const NetworksSection = () => {
  return (
    <>
      <section className="-mb-28">
        <Container>
          <header className="flex flex-col items-center gap-4">
            <Title>Redes Sociais</Title>
            <p className="text-center">Fique a vontade para visitar ou até mesmo me seguir nas minhas redes sociais.</p>
          </header>
        </Container>
      </section>
      <nav className="sticky bottom-0 flex items-center justify-center gap-4 py-6 overflow-hidden">
        <motion.a
          href="#"
          title="Visite meu GitHub"
          className="inline-flex items-center justify-center w-16 h-16 text-white rounded-full group bg-gray-950/70 backdrop-blur-md"
          initial={{ opacity: 0, translateY: '100%' }}
          animate={{ opacity: 1, translateY: '0%' }}
          transition={{ delay: 0.0 }}
        >
          <svg className="w-auto h-6 transition group-hover:text-lime-500" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.7934 6.74615C27.099 5.76014 27.1971 4.7215 27.0813 3.69572C26.9656 2.66993 26.6385 1.67925 26.1208 0.786149C26.0331 0.634097 25.9068 0.507838 25.7547 0.420068C25.6027 0.332297 25.4302 0.28611 25.2546 0.286149C24.0898 0.283711 22.9406 0.553729 21.8988 1.07463C20.857 1.59553 19.9515 2.35287 19.2546 3.28615H16.2546C15.5577 2.35287 14.6522 1.59553 13.6104 1.07463C12.5686 0.553729 11.4194 0.283711 10.2546 0.286149C10.079 0.28611 9.90654 0.332297 9.75447 0.420068C9.60241 0.507838 9.47614 0.634097 9.38835 0.786149C8.87066 1.67925 8.54363 2.66993 8.42789 3.69572C8.31214 4.7215 8.41019 5.76014 8.71585 6.74615C8.09801 7.82454 7.76705 9.04337 7.7546 10.2861V11.2861C7.7567 12.9782 8.37094 14.6123 9.48388 15.8867C10.5968 17.1612 12.1333 17.9899 13.8096 18.2199C13.1254 19.0955 12.754 20.1749 12.7546 21.2861V22.2861H9.7546C8.95895 22.2861 8.19589 21.9701 7.63328 21.4075C7.07067 20.8449 6.7546 20.0818 6.7546 19.2861C6.7546 18.6295 6.62527 17.9794 6.374 17.3727C6.12272 16.7661 5.75443 16.2149 5.29013 15.7506C4.82584 15.2863 4.27465 14.918 3.66802 14.6668C3.06139 14.4155 2.41121 14.2861 1.7546 14.2861C1.48938 14.2861 1.23503 14.3915 1.04749 14.579C0.859957 14.7666 0.754601 15.0209 0.754601 15.2861C0.754601 15.5514 0.859957 15.8057 1.04749 15.9933C1.23503 16.1808 1.48938 16.2861 1.7546 16.2861C2.55025 16.2861 3.31331 16.6022 3.87592 17.1648C4.43853 17.7274 4.7546 18.4905 4.7546 19.2861C4.7546 20.6122 5.28138 21.884 6.21907 22.8217C7.15675 23.7594 8.42852 24.2861 9.7546 24.2861H12.7546V26.2861C12.7546 26.5514 12.86 26.8057 13.0475 26.9933C13.235 27.1808 13.4894 27.2861 13.7546 27.2861C14.0198 27.2861 14.2742 27.1808 14.4617 26.9933C14.6492 26.8057 14.7546 26.5514 14.7546 26.2861V21.2861C14.7546 20.4905 15.0707 19.7274 15.6333 19.1648C16.1959 18.6022 16.959 18.2861 17.7546 18.2861C18.5502 18.2861 19.3133 18.6022 19.8759 19.1648C20.4385 19.7274 20.7546 20.4905 20.7546 21.2861V26.2861C20.7546 26.5514 20.86 26.8057 21.0475 26.9933C21.235 27.1808 21.4894 27.2861 21.7546 27.2861C22.0198 27.2861 22.2742 27.1808 22.4617 26.9933C22.6492 26.8057 22.7546 26.5514 22.7546 26.2861V21.2861C22.7552 20.1749 22.3838 19.0955 21.6996 18.2199C23.3759 17.9899 24.9124 17.1612 26.0253 15.8867C27.1383 14.6123 27.7525 12.9782 27.7546 11.2861V10.2861C27.7421 9.04337 27.4112 7.82454 26.7934 6.74615ZM25.7546 11.2861C25.7546 12.6122 25.2278 13.884 24.2901 14.8217C23.3525 15.7594 22.0807 16.2861 20.7546 16.2861H14.7546C13.4285 16.2861 12.1567 15.7594 11.2191 14.8217C10.2814 13.884 9.7546 12.6122 9.7546 11.2861V10.2861C9.76686 9.28618 10.0662 8.3108 10.6171 7.47615C10.7198 7.3408 10.7863 7.18152 10.8104 7.01333C10.8344 6.84515 10.8152 6.67361 10.7546 6.5149C10.4941 5.84315 10.3688 5.1266 10.3857 4.40631C10.4027 3.68602 10.5616 2.97616 10.8534 2.3174C11.6717 2.40544 12.4598 2.67654 13.1592 3.11061C13.8586 3.54468 14.4512 4.13059 14.8934 4.8249C14.9834 4.96578 15.1074 5.08182 15.254 5.1624C15.4005 5.24298 15.5649 5.28553 15.7321 5.28615H19.7759C19.9437 5.28615 20.1089 5.24391 20.2561 5.1633C20.4033 5.08269 20.5279 4.96631 20.6184 4.8249C21.0604 4.13053 21.6531 3.54457 22.3524 3.1105C23.0518 2.67642 23.8399 2.40535 24.6583 2.3174C24.9497 2.97633 25.1082 3.68627 25.1247 4.40656C25.1412 5.12684 25.0155 5.84331 24.7546 6.5149C24.6942 6.67209 24.6739 6.84189 24.6958 7.00888C24.7176 7.17588 24.7808 7.33477 24.8796 7.47115C25.4359 8.30581 25.7397 9.28319 25.7546 10.2861V11.2861Z" fill="currentColor" />
          </svg>
        </motion.a>
        <motion.a
          href="#"
          title="Visite meu Linkedin"
          className="inline-flex items-center justify-center w-16 h-16 text-white rounded-full group bg-gray-950/70 backdrop-blur-md"
          initial={{ opacity: 0, translateY: '100%' }}
          animate={{ opacity: 1, translateY: '0%' }}
          transition={{ delay: 0.1 }}
        >
          <svg className="w-auto h-6 transition group-hover:text-lime-500" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 0.286133H2.00002C1.46959 0.286133 0.960882 0.496846 0.585809 0.871919C0.210736 1.24699 2.28882e-05 1.7557 2.28882e-05 2.28613V24.2861C2.28882e-05 24.8166 0.210736 25.3253 0.585809 25.7003C0.960882 26.0754 1.46959 26.2861 2.00002 26.2861H24C24.5305 26.2861 25.0392 26.0754 25.4142 25.7003C25.7893 25.3253 26 24.8166 26 24.2861V2.28613C26 1.7557 25.7893 1.24699 25.4142 0.871919C25.0392 0.496846 24.5305 0.286133 24 0.286133ZM24 24.2861H2.00002V2.28613H24V24.2861ZM9.00002 11.2861V19.2861C9.00002 19.5513 8.89467 19.8057 8.70713 19.9932C8.51959 20.1808 8.26524 20.2861 8.00002 20.2861C7.73481 20.2861 7.48045 20.1808 7.29292 19.9932C7.10538 19.8057 7.00002 19.5513 7.00002 19.2861V11.2861C7.00002 11.0209 7.10538 10.7666 7.29292 10.579C7.48045 10.3915 7.73481 10.2861 8.00002 10.2861C8.26524 10.2861 8.51959 10.3915 8.70713 10.579C8.89467 10.7666 9.00002 11.0209 9.00002 11.2861ZM20 14.7861V19.2861C20 19.5513 19.8947 19.8057 19.7071 19.9932C19.5196 20.1808 19.2652 20.2861 19 20.2861C18.7348 20.2861 18.4805 20.1808 18.2929 19.9932C18.1054 19.8057 18 19.5513 18 19.2861V14.7861C18 14.1231 17.7366 13.4872 17.2678 13.0184C16.7989 12.5495 16.1631 12.2861 15.5 12.2861C14.837 12.2861 14.2011 12.5495 13.7323 13.0184C13.2634 13.4872 13 14.1231 13 14.7861V19.2861C13 19.5513 12.8947 19.8057 12.7071 19.9932C12.5196 20.1808 12.2652 20.2861 12 20.2861C11.7348 20.2861 11.4805 20.1808 11.2929 19.9932C11.1054 19.8057 11 19.5513 11 19.2861V11.2861C11.0013 11.0412 11.0924 10.8052 11.256 10.623C11.4197 10.4408 11.6446 10.3249 11.888 10.2975C12.1314 10.2701 12.3764 10.3329 12.5765 10.4741C12.7767 10.6153 12.918 10.8251 12.9738 11.0636C13.6503 10.6047 14.439 10.3388 15.2552 10.2943C16.0714 10.2498 16.8844 10.4285 17.6067 10.8112C18.3291 11.1939 18.9335 11.7661 19.3552 12.4664C19.7768 13.1667 19.9998 13.9687 20 14.7861ZM9.50002 7.78613C9.50002 8.0828 9.41205 8.37281 9.24723 8.61949C9.08241 8.86616 8.84814 9.05842 8.57405 9.17195C8.29996 9.28548 7.99836 9.31519 7.70739 9.25731C7.41642 9.19943 7.14914 9.05657 6.93936 8.84679C6.72958 8.63701 6.58672 8.36974 6.52884 8.07877C6.47097 7.7878 6.50067 7.4862 6.6142 7.21211C6.72774 6.93802 6.91999 6.70375 7.16667 6.53893C7.41334 6.37411 7.70335 6.28613 8.00002 6.28613C8.39785 6.28613 8.77938 6.44417 9.06068 6.72547C9.34199 7.00678 9.50002 7.38831 9.50002 7.78613Z" fill="currentColor" />
          </svg>
        </motion.a>
        <motion.a
          href="#"
          title="Visite meu Instagram"
          className="inline-flex items-center justify-center w-16 h-16 text-white rounded-full group bg-gray-950/70 backdrop-blur-md"
          initial={{ opacity: 0, translateY: '100%' }}
          animate={{ opacity: 1, translateY: '0%' }}
          transition={{ delay: 0.2 }}
        >
          <svg className="w-auto h-6 transition group-hover:text-lime-500" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2455 7.28613C12.0588 7.28613 10.8987 7.63803 9.91203 8.29732C8.92534 8.9566 8.1563 9.89368 7.70218 10.99C7.24805 12.0864 7.12923 13.2928 7.36074 14.4567C7.59225 15.6206 8.1637 16.6897 9.00281 17.5288C9.84193 18.3679 10.911 18.9393 12.0749 19.1708C13.2388 19.4024 14.4452 19.2835 15.5416 18.8294C16.6379 18.3753 17.575 17.6062 18.2343 16.6196C18.8936 15.6329 19.2455 14.4728 19.2455 13.2861C19.2438 11.6953 18.6111 10.1702 17.4863 9.04532C16.3614 7.92046 14.8362 7.28779 13.2455 7.28613ZM13.2455 17.2861C12.4543 17.2861 11.681 17.0515 11.0232 16.612C10.3654 16.1725 9.85268 15.5478 9.54993 14.8169C9.24718 14.086 9.16797 13.2817 9.32231 12.5058C9.47665 11.7298 9.85762 11.0171 10.417 10.4577C10.9764 9.8983 11.6892 9.51733 12.4651 9.36299C13.241 9.20865 14.0453 9.28786 14.7762 9.59061C15.5071 9.89336 16.1318 10.4061 16.5713 11.0639C17.0109 11.7216 17.2455 12.495 17.2455 13.2861C17.2455 14.347 16.824 15.3644 16.0739 16.1146C15.3237 16.8647 14.3063 17.2861 13.2455 17.2861ZM19.2455 0.286133H7.24545C5.38955 0.288118 3.61022 1.02625 2.2979 2.33858C0.985574 3.6509 0.247438 5.43023 0.245453 7.28613V19.2861C0.247438 21.142 0.985574 22.9214 2.2979 24.2337C3.61022 25.546 5.38955 26.2841 7.24545 26.2861H19.2455C21.1014 26.2841 22.8807 25.546 24.193 24.2337C25.5053 22.9214 26.2435 21.142 26.2455 19.2861V7.28613C26.2435 5.43023 25.5053 3.6509 24.193 2.33858C22.8807 1.02625 21.1014 0.288118 19.2455 0.286133ZM24.2455 19.2861C24.2455 20.6122 23.7187 21.884 22.781 22.8217C21.8433 23.7593 20.5715 24.2861 19.2455 24.2861H7.24545C5.91937 24.2861 4.6476 23.7593 3.70992 22.8217C2.77224 21.884 2.24545 20.6122 2.24545 19.2861V7.28613C2.24545 5.96005 2.77224 4.68828 3.70992 3.7506C4.6476 2.81292 5.91937 2.28613 7.24545 2.28613H19.2455C20.5715 2.28613 21.8433 2.81292 22.781 3.7506C23.7187 4.68828 24.2455 5.96005 24.2455 7.28613V19.2861ZM21.2455 6.78613C21.2455 7.0828 21.1575 7.37281 20.9927 7.61949C20.8278 7.86616 20.5936 8.05842 20.3195 8.17195C20.0454 8.28548 19.7438 8.31519 19.4528 8.25731C19.1618 8.19943 18.8946 8.05657 18.6848 7.84679C18.475 7.63701 18.3322 7.36974 18.2743 7.07877C18.2164 6.7878 18.2461 6.4862 18.3596 6.21211C18.4732 5.93802 18.6654 5.70375 18.9121 5.53893C19.1588 5.37411 19.4488 5.28613 19.7455 5.28613C20.1433 5.28613 20.5248 5.44417 20.8061 5.72547C21.0874 6.00678 21.2455 6.38831 21.2455 6.78613Z" fill="currentColor" />
          </svg>
        </motion.a>
      </nav>
      <section className="-mt-28">
        <Container>
          <header className="flex flex-col items-center gap-4">
            <Title>Entre em Contato</Title>
            <p className="text-center">Apesar de não estar ativamente em busca de novas oportunidades no momento, estou sempre receptivo às mensagens recebidas seja por e-mail ou pelas redes sociais. Caso deseje fazer alguma pergunta ou simplesmente enviar uma saudação, farei questão de responder assim que possível!.</p>
          </header>
        </Container>
      </section>
    </>
  )
}