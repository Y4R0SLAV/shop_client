import style from "./cartOrder.module.css"
import {CheckCircleOutlined} from "@ant-design/icons"

export const SuccessBlock: React.FC<{title: string, params: Array<string>}> = ({title, params}) => {
  return <div className={style.success}>
  <CheckCircleOutlined className={style.succIcon}/>
  <div className={style.succBlock}>

    <div className={style.succTitle}>
      {title}
    </div>
    
    <div className={style.succInfo}>
      {params.map(item => <div> {item} </div> )}
    </div>
    <span className={style.succChange}>Изменить адрес почты</span>
  </div>
</div>
}