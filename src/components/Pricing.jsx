import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'

const Pricing = () => {
  return (
   <Section className='overflow-hidden' id='pricing'>
<div className='z-2 relative container'>
<div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
<img src={smallSphere} width={255} height={255} alt='sphere' className='relative z-1'/>

<div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
    <img src={stars}  className='w-full' height={400} width={950}/>
</div>
</div>
<Heading tag='Get started with Brainwave' title='Pay once, use forever' />
<div className='relative'>

</div>
</div>
   </Section>
  )
}

export default Pricing