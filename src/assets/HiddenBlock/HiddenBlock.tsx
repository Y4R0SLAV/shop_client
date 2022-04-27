import style from './hiddenBlock.module.css'
import { FC } from 'react'
import { DownOutlined } from '@ant-design/icons'
import cn from 'classnames'

type hiddenBlockProps = {
  title: string, 
  DataComponent: () => JSX.Element,
  blockId: number,
  choosenBlockId?: number,
  setChoosenBlockId?: (x: number) => void 

  choosenBlocksId?: Array<number>,
  setChoosenBlocksId?: (x: Array<number>) => void 
}

export const HiddenBlock: FC<hiddenBlockProps> = ({ title, DataComponent, blockId, choosenBlockId,
                                                    setChoosenBlockId, choosenBlocksId, setChoosenBlocksId}) => {
  if (choosenBlockId && setChoosenBlockId) {

    const eq = blockId === choosenBlockId 

    return  <div className={style.infoBlock} onClick={() => {eq 
                                                                        ? setChoosenBlockId(-1) 
                                                                        : setChoosenBlockId(blockId) }}>
              <div className={style.infoBlockTitle}>
                <h6 className={cn({[style.active]: eq})}>{ title }</h6>
                {
                  eq
                    ? <DownOutlined className={style.icon} rotate={180}/>
                    : <DownOutlined className={style.icon} />
                }
                
              </div>

              <div className={cn(style.hiddenInfo, {[style.active]: eq})} onClick={(e) => e.stopPropagation()}>
                <DataComponent />
              </div>
            </div>
  } else if (choosenBlocksId && setChoosenBlocksId) {

    const showBlock = (x: number) => {
      setChoosenBlocksId([...choosenBlocksId, x])
    }

    const hideBlock = (x: number) => {
      setChoosenBlocksId(choosenBlocksId.filter(item => item !== x))
    }

    const contains = choosenBlocksId.includes(blockId) 

    return <div className={style.infoBlock} onClick={() => {choosenBlocksId.includes(blockId) 
                                                              ? hideBlock(blockId) 
                                                              : showBlock(blockId) }}>
            <div className={style.infoBlockTitle}>
              <h6 className={cn({[style.active]: contains})}>{ title }</h6>
                {
                  contains
                  ? <DownOutlined className={style.icon} rotate={180}/>
                  : <DownOutlined className={style.icon} />
                }
            </div>

            <div className={cn(style.hiddenInfo, {[style.active]: contains})} onClick={(e) => e.stopPropagation()}>
              <DataComponent />
            </div>
</div>
  } else {
    return <div className=""> АШИБКА </div>
  }
} 
