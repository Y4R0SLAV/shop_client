import style from "./productInfo.module.css"
import {FC, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'

type hiddenBlockProps = {
  title: string, 
  DataComponent: () => JSX.Element,
  blockId: number,
  choosenBlockId: number,
  setChoosenBlockNumber: (x: number) => void 
}
const HiddenBlock: FC<hiddenBlockProps> = ({title, DataComponent, blockId, choosenBlockId, setChoosenBlockNumber}) => {
  let cn = style.hiddenInfo

  if (choosenBlockId === blockId) {
    cn += " " + style.active

  } 
  return  <div className={style.infoBlock} onClick={() => {blockId === choosenBlockId 
                                                                      ? setChoosenBlockNumber(-1) 
                                                                      : setChoosenBlockNumber(blockId) }}>
            <div className={style.infoBlockTitle}>
              <h6 className={choosenBlockId === blockId ? style.active : ""}>{ title }</h6>
              <DownOutlined className={style.icon}/>
            </div>

            <div className={cn}>
              <DataComponent />
            </div>
          </div>
} 

const DataComponent1 = () => {
  return <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, recusandae ipsum eligendi, aliquid ipsa doloribus incidunt perferendis maxime excepturi a dignissimos consectetur voluptas eos laborum, odio deleniti corrupti rem itaque hic esse amet? Fugiat aliquid cumque facilis natus dignissimos magni quasi quod possimus eos excepturi blanditiis, dicta voluptas voluptate! Enim explicabo placeat corporis iusto id similique quam, temporibus distinctio dolore in consequuntur cum commodi culpa nam repellendus ab eius fugit. </div>
}

const DataComponent2 = () => {
  return <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium.</div>
}

const DataComponent3 = () => {
  return <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt, quidem obcaecati eos exercitationem sit vitae, harum incidunt consequatur quibusdam animi earum temporibus voluptatibus nobis? Est perspiciatis ipsum quasi ipsa corporis voluptas dolores, cupiditate quibusdam, assumenda nemo vitae similique. Voluptate?</div>
}

export const InfoBlock = () => {
  const [choosenBlockNumber, setChoosenBlockNumber] = useState(-1);

  return <div className={style.mainInfoBlock}> 
    <div className={style.infoBlockTitle}> Информация о товаре </div>

    <HiddenBlock title={"О товаре"} 
                  DataComponent={DataComponent1} 
                  blockId={0} 
                  choosenBlockId={choosenBlockNumber}
                  setChoosenBlockNumber={setChoosenBlockNumber}/>

    <HiddenBlock  title={"Рекомендации по уходу"} DataComponent={DataComponent2}
                  blockId={1} choosenBlockId={choosenBlockNumber} setChoosenBlockNumber={setChoosenBlockNumber}/>

    <HiddenBlock title={"Размерная сетка"} DataComponent={DataComponent3} blockId={2} choosenBlockId={choosenBlockNumber} setChoosenBlockNumber={setChoosenBlockNumber} />
  </div>
} 