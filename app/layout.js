 
import Banner from '@/pages/Components/Banner/Banner'
import Bestfull from '@/pages/Components/Bestfull/Bestfull'
import RespponsiveBestfull from '@/pages/Components/Bestfull/RespponsiveBestfull'
import Header from '@/pages/Components/Header/Header'
import HealthySide from '@/pages/Components/Midpart/HealthySide'
import SectionThree from '@/pages/Components/SectionThree/SectionThree'
import './globals.css'

export default function RootLayout({ children }) {
  return (
     <div>
      <div className='lg:w-[1440px] lg:h-[4919px] mx-auto w-[100%] h-[6623px]'>
      <Header/>
       <Banner/>
       <HealthySide/>
       <SectionThree/>
       <Bestfull/>
       <RespponsiveBestfull/>

      </div>
     </div>
  )
}
