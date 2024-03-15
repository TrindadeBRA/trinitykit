import Image from 'next/image'
import Link from 'next/link'

interface BookData {
  nome_do_livro: string;
  autor_do_livro: string;
  capa_do_livro: string;
  link_afiliado: string;
}

export default function BlogBookComponent({ post }: any) {
  const book_component: BookData = post?.book_component;

  const isBookComponentValid = book_component && 
  book_component.nome_do_livro &&
  book_component.autor_do_livro &&
  book_component.capa_do_livro &&
  book_component.link_afiliado;
  if (!isBookComponentValid) {
    return null;
  }

  return (
      <div className="border-t border-jacarta-200 dark:border-jacarta-600 bg-gradient-to-b from-light-base to-white dark:from-jacarta-800 dark:to-jacarta-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-jacarta-700 dark:text-white">Quer saber Mais? Leia o livro!</h2>
          </div>
        <div className="flex flex-col sm:flex-row max-w-3xl mx-auto items-center gap-8">
          <Link href={book_component?.link_afiliado} className='mx-auto max-w-60 sm:max-w-full' target='_blank'>
            <Image
              src={book_component?.capa_do_livro}
              width={700}
              height={200}
              alt={`Imagem de capa de: ${book_component?.nome_do_livro}`}
              className='max-w-[220px]'
            />
          </Link>
          <div className='flex-col'>
            <p className='mb-8 text-jacarta-500 dark:text-jacarta-300 text-center sm:text-left'>{`Ao adquirir "${book_component?.nome_do_livro}" através do link abaixo, você não só expande sua biblioteca, mas também apoia o nosso blog! Cada compra contribui diretamente para mantermos nosso conteúdo vivo e gratuito. Obrigado pelo seu apoio!`}</p>
            <Link href={book_component?.link_afiliado} className='' target='_blank'>
              <p className='font-bold text-lg text-jacarta-700 dark:text-white text-center sm:text-left'>{book_component?.nome_do_livro}, Escrito por {book_component?.autor_do_livro}</p>
            </Link>
            <Link href={book_component?.link_afiliado} className='w-full flex justify-center sm:justify-start' target='_blank'>
              <div className='flex gap-4 bg-[#fe9900] hover:bg-[#fec400] w-fit px-6 py-2 mt-3 border-0 rounded-lg'>
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="25px" height="25px" viewBox="0 0 35.418 35.418"
                  xmlSpace="preserve">
                  <g>
                    <path d="M20.948,9.891c-0.857,0.068-1.847,0.136-2.837,0.269c-1.516,0.195-3.032,0.461-4.284,1.053
		c-2.439,0.994-4.088,3.105-4.088,6.209c0,3.898,2.506,5.875,5.669,5.875c1.057,0,1.913-0.129,2.703-0.328
		c1.255-0.396,2.31-1.123,3.562-2.441c0.727,0.99,0.923,1.453,2.177,2.509c0.329,0.133,0.658,0.133,0.922-0.066
		c0.791-0.659,2.174-1.848,2.901-2.508c0.328-0.267,0.263-0.66,0.066-0.992c-0.727-0.924-1.45-1.718-1.45-3.498v-5.943
		c0-2.513,0.195-4.822-1.647-6.537c-1.518-1.391-3.891-1.916-5.735-1.916c-0.264,0-0.527,0-0.792,0
		c-3.362,0.197-6.921,1.647-7.714,5.811c-0.13,0.525,0.267,0.726,0.53,0.793l3.691,0.464c0.396-0.07,0.593-0.398,0.658-0.73
		c0.333-1.449,1.518-2.176,2.836-2.309c0.067,0,0.133,0,0.265,0c0.79,0,1.646,0.332,2.109,0.987
		c0.523,0.795,0.461,1.853,0.461,2.775L20.948,9.891L20.948,9.891z M20.223,17.749c-0.461,0.925-1.253,1.519-2.11,1.718
		c-0.131,0-0.327,0.068-0.526,0.068c-1.45,0-2.31-1.123-2.31-2.775c0-2.11,1.254-3.104,2.836-3.565
		c0.857-0.197,1.847-0.265,2.836-0.265v0.793C20.948,15.243,21.01,16.43,20.223,17.749z M35.418,26.918v0.215
		c-0.035,1.291-0.716,3.768-2.328,5.131c-0.322,0.25-0.645,0.107-0.503-0.254c0.469-1.145,1.541-3.803,1.04-4.412
		c-0.355-0.465-1.826-0.43-3.079-0.322c-0.572,0.072-1.075,0.105-1.469,0.183c-0.357,0.033-0.431-0.287-0.071-0.537
		c0.466-0.323,0.969-0.573,1.541-0.756c2.039-0.608,4.406-0.25,4.729,0.146C35.348,26.414,35.418,26.629,35.418,26.918z
		 M32.016,29.428c-0.466,0.357-0.965,0.682-1.468,0.973c-3.761,2.261-8.631,3.441-12.856,3.441c-6.807,0-12.895-2.512-17.514-6.709
		c-0.396-0.324-0.073-0.789,0.393-0.539C5.549,29.5,11.709,31.26,18.084,31.26c4.013,0,8.342-0.754,12.463-2.371
		c0.285-0.104,0.608-0.252,0.895-0.356C32.087,28.242,32.661,28.965,32.016,29.428z"/>
                  </g>
                </svg>
                <span className='text-[#000] font-medium'>Adquira agora na Amazon!</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

}








