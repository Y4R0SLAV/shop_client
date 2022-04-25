import { useState } from "react"
import { UserEmail } from './UserEmail'
import { ContactInfo } from './ContactInfo'
import { DeliveryInfo } from './DeliveryInfo'
import { PayBlock } from './PayBlock'
import style from './cartOrder.module.css'

export const CartOrderBlock = () => {
  const [currentStage, setCurrentStage] = useState(0)

  // должна быть юзер дата, минимум - эмаил, телефон, имя, адрес и доставка/самовывоз
  
  // 0 - ввод емаила и соглашение с правилами
  // 1 - доставка / самовывоз + форма для заполнения
  // 2 - просто блок информации и форма без выбора
  // 3 - оплата с выбором банков + форма для платежного адреса

  return <div className={style.cartOrderBlock}> 
    <UserEmail n={0} currentStage={currentStage} setCurrentStage={setCurrentStage}/>
    <ContactInfo n={1} currentStage={currentStage} setCurrentStage={setCurrentStage}/>
    <DeliveryInfo n={2} currentStage={currentStage} setCurrentStage={setCurrentStage}/>
    <PayBlock n={3} currentStage={currentStage} setCurrentStage={setCurrentStage}/>
  </div>
}


const ChooseCountry = ( ) => {
  return <select>
  <option disabled selected hidden> Пожалуйта, выберите страну</option>
  <option value="Armenia">Armenia</option>
  <option value="Australia">Australia</option>
  <option value="Austria">Austria</option>
  <option value="Azerbaijan">Azerbaijan</option>
  <option value="Bahamas">Bahamas</option>
  <option value="Bangladesh">Bangladesh</option>
  <option value="Belarus">Belarus</option>
  <option value="Belgium">Belgium</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Bulgaria">Bulgaria</option>
  <option value="Cameroon">Cameroon</option>
  <option value="Canada">Canada</option>
  <option value="Central African Republic">Central African Republic</option>
  <option value="Chile">Chile</option>
  <option value="China">China</option>
  <option value="Colombia">Colombia</option>
  <option value="Congo">Congo</option>
  <option value="Congo">Congo, the Democratic Republic of the</option>
  <option value="Costa Rica">Costa Rica</option>
  <option value="Cuba">Cuba</option>
  <option value="Czech Republic">Czech Republic</option>
  <option value="Denmark">Denmark</option>
  <option value="Dominican Republic">Dominican Republic</option>
  <option value="Egypt">Egypt</option>
  <option value="Estonia">Estonia</option>
  <option value="Finland">Finland</option>
  <option value="France">France</option>
  <option value="Germany">Germany</option>
  <option value="Greece">Greece</option>
  <option value="Greenland">Greenland</option>
  <option value="Iceland">Iceland</option>
  <option value="India">India</option>
  <option value="Indonesia">Indonesia</option>
  <option value="Ireland">Ireland</option>
  <option value="Israel">Israel</option>
  <option value="Italy">Italy</option>
  <option value="Japan">Japan</option>
  <option value="Kazakhstan">Kazakhstan</option>
  <option value="Kyrgyzstan">Kyrgyzstan</option>
  <option value="Latvia">Latvia</option>
  <option value="Luxembourg">Luxembourg</option>
  <option value="Mexico">Mexico</option>
  <option value="Mongolia">Mongolia</option>
  <option value="Netherlands">Netherlands</option>
  <option value="Netherlands Antilles">Netherlands Antilles</option>
  <option value="Pakistan">Pakistan</option>
  <option value="Peru">Peru</option>
  <option value="Poland">Poland</option>
  <option value="Portugal">Portugal</option>
  <option value="Romania">Romania</option>
  <option value="Russia">Russian Federation</option>
  <option value="Slovakia">Slovakia (Slovak Republic)</option>
  <option value="Slovenia">Slovenia</option>
  <option value="Somalia">Somalia</option>
  <option value="Span">Spain</option>
  <option value="Sweden">Sweden</option>
  <option value="Switzerland">Switzerland</option>
  <option value="Tajikistan">Tajikistan</option>
  <option value="Thailand">Thailand</option>
  <option value="Turkey">Turkey</option>
  <option value="Turkmenistan">Turkmenistan</option>
  <option value="Turks and Caicos">Turks and Caicos Islands</option>
  <option value="Ukraine">Ukraine</option>
  <option value="United Kingdom">United Kingdom</option>
  <option value="United States">United States</option>
  <option value="Uzbekistan">Uzbekistan</option>
</select> 
}