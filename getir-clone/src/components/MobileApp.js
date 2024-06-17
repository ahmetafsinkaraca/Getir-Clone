export default function MobilApp() {

  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-primary-brand-color text-white md:rounded-lg bg-mobile-app '>
      <div className=' flex flex-col text-center md:text-left gap-y-3 p-10'>
        <h3 className='text-2xl font-bold tracking-tight'>Getir'i indirin!</h3>
        <p className='text-md font-semibold'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
        <nav className='flex gap-2 mt-5 flex-wrap lg:flex-nowrap justify-center'>
          <a href='#' className='transition-all transform hover:scale-105'>
            <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' className='lg:h-auto md:h-8'></img>
          </a>

          <a href='#' className='transition-all transform hover:scale-105'>
            <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' className='lg:h-auto md:h-8'></img>
          </a>

          <a href='#' className='transition-all transform hover:scale-105'>
            <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' className='lg:h-auto md:h-8'></img>
          </a>
        </nav>
      </div>
      <picture  className='hidden md:block pt-6 md:self-end'>
        <img src='https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png'></img>
      </picture>

    </div>
  )
}