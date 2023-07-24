import React from 'react'
import logoMAM from '../images/Logo footer.png'
const Footer = () => {
  return (
    <>
    <section className='Footer'>
        <img className='Footer__logo' src={logoMAM} alt='Logo Music and Music'/>
        <p className='Footer__copyright'>@ 2023 Music and Music | Design by ElAlegria</p>
    </section>
    </>
  )
}

export default Footer