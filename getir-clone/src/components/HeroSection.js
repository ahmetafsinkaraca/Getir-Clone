import React, { useState } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import Slider from "react-slick";
import { FaFacebook } from 'react-icons/fa'
import ReactFlagsSelect from 'react-flags-select';



export default function HeroSection() {

  const [selected, setSelected] = useState('TR');

  const windowWidth = useWindowWidth()

  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15'
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {windowWidth >= 768 && <Slider {...settings}>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://foto.sondakika.com/haber/2023/10/11/mona-lisa-tablosunun-hikayesi-nedir-mona-lisa-16418950_6307_amp.jpg" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://foto.sondakika.com/haber/2023/10/11/mona-lisa-tablosunun-hikayesi-nedir-mona-lisa-16418950_6307_amp.jpg" />
        </div>
      </Slider>}
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="text-4xl mt-8 font-semibold text-white">
            Dakikalar içinde <br /> kapınızda <br />
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
          <div className="grid gap-y-3">
            <div className='flex gap-x-2'>
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={code => setSelected(code)}
                selected={selected}
                className='flag-select'
              />
              <label className='flex-1 group relative block cursor-pointer '>
                <input required className='h-14 w-full px-4 border-2 border-gray-200 rounded transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color peer text-sm pt-2 outline-none '></input>
                <span className='absolute h-full px-4 top-0 left-0 flex items-center text-sm text-gray-500 transition-all peer-focus:text-primary-brand-color peer-focus:text-xs peer-focus:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs peer-valid:h-7'>Telefon Numarası</span>
              </label>
            </div>
            <button className='bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow flex h-12 items-center justify-center text-xs rounded w-full font-semibold '>
            Telefon numarası ile devam et
            </button>
            <hr className='h-[1px] bg-gray-300 my-2'/>
            <button className='text-xs px-4 font-semibold rounded-md bg-blue-700 bg-opacity-10 text-blue-700 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white h-12 flex items-center w-full'>
            <FaFacebook size={24} />
            <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}