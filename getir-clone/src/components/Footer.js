import React from 'react'
import Menu from './ui/Menu'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BiGlobe } from 'react-icons/bi'


function Footer() {

  const menus = [
    {
      title: 'Getir\'i Keşfedin',
      items: [
        {
          title: 'Hakkımızda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'İletişim'
        },
        {
          title: 'COVID-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    },
    {
      title: 'Yardıma mı ihtiyacınız var?',
      items: [
        {
          title: 'Hakkımızda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'İletişim'
        },
        {
          title: 'COVID-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    },
    {
      title: 'İş Ortağımız Olun',
      items: [
        {
          title: 'Hakkımızda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'İletişim'
        },
        {
          title: 'COVID-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    }
  ]

  return (
    <div className='bg-white mt-10'>
      <div className='container mx-auto px-4'>
        <div className='gap-y-6 grid md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10'>
          <section>
            <h3 className='text-lg mb-4 text-primary-brand-color'>Getir'i indirin!</h3>
            <nav className='grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-2 '>
              <a href='#' className='mb-4'>
                <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'></img>
              </a>
              <a href='#' className='mb-4'>
                <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'></img>
              </a>
              <a href='#' className=''>
                <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'></img>
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => <Menu key={index} {...menu} />)}
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-y-4 border-t border-gray-100 py-8 mt-6 '>
          <div className='text-xs text-gray-700 flex gap-x-8'>
            &copy; 2024 Getir
            <a href='#' className='text-primary-brand-color relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full'>
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className='flex flex-row '>
            <a href='#' className='text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center rounded-lg px-2 py-2 border border-gray-100' >
              <FaFacebook size={23} />
            </a>
            <a href='#' className='text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center rounded-lg px-2 py-2 border border-gray-100' >
              <FaTwitter size={23} />
            </a>
            <a href='#' className='text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center rounded-lg px-2 py-2 border border-gray-100' >
              <FaInstagram size={23} />
            </a>
            <a href='#' className='text-gray-700 transition-colors flex items-center justify-center gap-1 hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color px-2 py-2 border border-gray-200 rounded-lg '>
              <BiGlobe size={20} className='ml-2'/>
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer
