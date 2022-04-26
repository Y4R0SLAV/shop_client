import { useState } from "react"
import { UserEmail } from './UserEmail'
import { ContactInfo } from './ContactInfo'
import { DeliveryInfo } from './DeliveryInfo'
import { PayBlock } from './PayBlock'
import style from './cartOrder.module.css'

export const CartOrderBlock = () => {
  const [currentStage, setCurrentStage] = useState(0)

  const [userEmail, setUserEmail] = useState('')
  const [mailing, setMailing] = useState(false)

  const [userFullName, setUserFullName] = useState('')
  const [userTel, setUserTel] = useState('') // мб как number сделать хз

  const [userCountry, setUserCountry] = useState('')
  const [userAddress, setUserAddress] = useState('')

  const [userCity, setUserCity] = useState('')
  const [userIndex, setUserIndex] = useState('')
  
  // 0 - ввод емаила и соглашение с правилами
  // 1 - доставка / самовывоз + форма для заполнения
  // 2 - просто блок информации и форма без выбора
  // 3 - оплата с выбором банков + форма для платежного адреса

  return <div className={style.cartOrderBlock}> 
    {/* <div onClick={() => alert(userEmail)}> ПОКАЗАТЬ ИМАИЛ</div> */}
    <UserEmail  n={0} currentStage={currentStage}
                setCurrentStage={setCurrentStage}
                email={userEmail} setEmail={setUserEmail}
                mailing={mailing} setMailing={setMailing}/>

    <ContactInfo  n={1} currentStage={currentStage} setCurrentStage={setCurrentStage}
                  fullname={userFullName} setFullname={setUserFullName}
                  tel = {userTel} setTel={setUserTel}
                  country = {userCountry} setCountry={setUserCountry}
                  address = {userAddress} setAddress={setUserAddress}
                  city={userCity} setCity={setUserCity}
                  index={userIndex} setIndex={setUserIndex}
    />    

    <DeliveryInfo n={2} currentStage={currentStage} setCurrentStage={setCurrentStage}/>
    <PayBlock n={3} currentStage={currentStage} setCurrentStage={setCurrentStage}/>
  </div>
}