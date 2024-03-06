import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import { SettingsDataType } from '@/pages/api/getSettingsData'
import { MenuDataType } from '@/pages/api/getMenuData'
import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPolicy() {
  return (
    <section className="relative py-20 bg-light-base dark:bg-jacarta-800 lg:py-32">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
      </picture>
      <div className="container">
        <div className="lg:flex lg:items-center lg:justify-between gap-6">

          <div className="lg:w-full">
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">Quem somos</h2>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">O endereço do nosso site é: <a href="https://resumodolivro.com">https://resumodolivro.com</a>.</p>
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">Comentários</h2>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Quando os visitantes deixam comentários no site, coletamos os dados mostrados no formulário de comentários, além do endereço de IP e de dados do navegador do visitante, para auxiliar na detecção de spam.</p>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Uma sequência anonimizada de caracteres criada a partir do seu e-mail (também chamada de hash) poderá ser enviada para o Gravatar para verificar se você usa o serviço. A política de privacidade do Gravatar está disponível <a href="https://automattic.com/privacy/">aqui</a>. Depois da aprovação do seu comentário, a foto do seu perfil fica visível publicamente junto de seu comentário.</p>
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">Mídia</h2>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Se você envia imagens para o site, evite enviar as que contenham dados de localização incorporados (EXIF GPS). Visitantes podem baixar estas imagens do site e extrair delas seus dados de localização.</p>
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">Cookies</h2>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Ao deixar um comentário no site, você poderá optar por salvar seu nome, e-mail e site nos cookies. Isso visa seu conforto, assim você não precisará preencher seus dados novamente quando fizer outro comentário. Estes cookies duram um ano.</p>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Se você tem uma conta e acessa este site, um cookie temporário será criado para determinar se seu navegador aceita cookies. Ele não contém nenhum dado pessoal e será descartado quando você fechar seu navegador.</p>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Quando você acessa sua conta no site, também criamos vários cookies para salvar os dados da sua conta e suas escolhas de exibição de tela. Cookies de login são mantidos por dois dias e cookies de opções de tela por um ano. Se você selecionar “Lembrar-me”, seu acesso será mantido por duas semanas. Se você se desconectar da sua conta, os cookies de login serão removidos.</p>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Se você editar ou publicar um artigo, um cookie adicional será salvo no seu navegador. Este cookie não inclui nenhum dado pessoal e simplesmente indica o ID do post referente ao artigo que você acabou de editar. Ele expira depois de 1 dia.</p>
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">Com quem compartilhamos seus dados</h2>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Se você solicitar uma redefinição de senha, seu endereço de IP será incluído no e-mail de redefinição de senha.</p>
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">Por quanto tempo mantemos os seus dados</h2>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Se você deixar um comentário, o comentário e os seus metadados são conservados indefinidamente. Fazemos isso para que seja possível reconhecer e aprovar automaticamente qualquer comentário posterior ao invés de retê-lo para moderação.</p>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Para usuários que se registram no nosso site (se houver), também guardamos as informações pessoais que fornecem no seu perfil de usuário. Todos os usuários podem ver, editar ou excluir suas informações pessoais a qualquer momento (só não é possível alterar o seu username). Os administradores de sites também podem ver e editar estas informações.</p>
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">Quais os seus direitos sobre seus dados</h2>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Se você tiver uma conta neste site ou se tiver deixado comentários, pode solicitar um arquivo exportado dos dados pessoais que mantemos sobre você, inclusive quaisquer dados que nos tenha fornecido. Também pode solicitar que removamos qualquer dado pessoal que mantemos sobre você. Isto não inclui nenhuns dados que somos obrigados a manter para propósitos administrativos, legais ou de segurança.</p>
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">Para onde seus dados são enviados</h2>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Comentários de visitantes podem ser marcados por um serviço automático de detecção de spam.</p>


          </div>
          </div>
        </div>
    </section>
  )
}
