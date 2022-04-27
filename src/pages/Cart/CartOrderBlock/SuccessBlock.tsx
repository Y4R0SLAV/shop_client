import style from "./cartOrder.module.css"
import {CheckCircleOutlined} from "@ant-design/icons"

type SuccProps = {
  title: string
  params: Array<string>
  setStage: (x: number) => void
  stage: number
  change: string
}

export const SuccessBlock: React.FC<SuccProps> = ({title, params, setStage, stage, change}) => {
  return <div className={style.success} onClick={() => setStage(stage)}>
  <CheckCircleOutlined className={style.succIcon}/>
  <div className={style.succBlock}>

    <div className={style.succTitle}>
      {title}
    </div>
    
    <div className={style.succInfo}>
      {params.map(item => <div> {item} </div> )}
    </div>
    <span className={style.succChange}>{change}</span>
  </div>
</div>
}