// components/Testimonials.js

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

SwiperCore.use([Pagination]);

export default function Testimonials() {

  const testimonialsData: any = {
    "testimonials": [
      {
        "message": "Se não fosse pelo seu blog, eu não teria descoberto tantos livros incríveis. Obrigado por compartilhar suas recomendações!",
        "name": "Ana Silva",
        "profession": "Estudante Universitária",
        "image": "/img/testimonials/ana-silva.webp"
      },
      {
        "message": "Seus resumos de livros são sempre tão bem escritos e úteis. Eles me ajudaram a economizar tempo e a escolher minhas próximas leituras com mais confiança.",
        "name": "Carlos Oliveira",
        "profession": "Analista de Marketing",
        "image": "/img/testimonials/carlos-oliveira.webp"
      },
      {
        "message": "Adoro as listas de livros temáticas do seu blog. Elas me deram ótimas ideias para montar minha lista de leitura para o ano.",
        "name": "Isabella Santos",
        "profession": "Designer Gráfico",
        "image": "/img/testimonials/isabella-santos.webp"
      },
      {
        "message": "Seu blog me inspira a ler mais e explorar diferentes gêneros literários. Adoro como você diversifica suas recomendações.",
        "name": "Lucas Costa",
        "profession": "Engenheiro de Software",
        "image": "/img/testimonials/lucas-costa.webp"
      }
    ]
  }
  
  return (
    <section className="bg-light-base py-24 dark:bg-jacarta-900">
      <div className="container relative overflow-hidden">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            O que dizem sobre nós
          </h2>
          <p className="text-lg text-jacarta-500 dark:text-jacarta-300">Descubra o impacto do nosso blog através das palavras calorosas de nossos leitores. Leia o que eles têm a dizer sobre nossas recomendações, resumos e listas de leitura, e junte-se à comunidade literária que valoriza a paixão pelos livros.</p>
        </div>

        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true, el: '.testimonials-pagination' }}
          spaceBetween={15}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2 // Para telas menores que 768px, mostra apenas 1 slide por tela
          }}}
          className="flex"
        >
          {testimonialsData.testimonials.map((testimonial: any, index: any) => (
            <SwiperSlide key={index} className='h-auto border border-jacarta-100 dark:border-jacarta-600 rounded-2xl'>
              <div className="flex flex-wrap gap-5 rounded-2.5xl bg-white p-12 dark:bg-jacarta-700 lg:flex-nowrap">
                <Image
                  width={170}
                  height={170}
                  src={testimonial.image}
                  alt=""
                  className="w-28 self-start rounded-2.5xl"
                />
                <div className="-ml-14 -mt-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-accent dark:border-jacarta-700 md:mb-0 md:w-16">
                  <svg width="22" height="19" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                    <path
                      d="M6.027 18.096c-.997 0-1.813-.204-2.448-.612a5.147 5.147 0 01-1.564-1.564 5.729 5.729 0 01-.952-2.38C.927 12.679.86 11.976.86 11.432c0-2.221.567-4.239 1.7-6.052C3.693 3.567 5.461 2.093 7.863.96l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224zm11.56 0c-.997 0-1.813-.204-2.448-.612a5.148 5.148 0 01-1.564-1.564 5.73 5.73 0 01-.952-2.38c-.136-.861-.204-1.564-.204-2.108 0-2.221.567-4.239 1.7-6.052 1.134-1.813 2.902-3.287 5.304-4.42l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224z"
                    />
                  </svg>
                </div>
                <div className="mb-4 md:mb-0">
                  <div className="-ml-1 mb-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-5 w-5 fill-orange"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-5 w-5 fill-orange"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-5 w-5 fill-orange"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-5 w-5 fill-orange"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-5 w-5 fill-orange"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-normal text-jacarta-700 dark:text-white">{testimonial.message}</p>
                  <span className="mt-6 block font-display text-sm font-medium text-jacarta-700 dark:text-white">{testimonial.name}</span>
                  <span className="text-2xs font-medium tracking-tight text-jacarta-500 dark:text-jacarta-400">{testimonial.profession}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
        <div className="testimonials-pagination flex justify-center mt-8"></div>
      </div>
    </section>
  );
};