import { useState } from 'react'
import style from './search.module.css'
import { HiddenBlock } from './../../assets/HiddenBlock/HiddenBlock'
import { Formik, Form, Field } from 'formik'
import { SearchOutlined } from '@ant-design/icons'

type FilterType = {
  term?: string
  onSale?: boolean
  priceFrom?: number
  priceTo?: number
  category?: "Clothets" | "Accessories" 
}

const DataComponent1 = () => {
  return <Formik
          initialValues={{ term: "" }}

          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={style.form}>
              <Field type="text" name="term" className={style.input} placeholder="ключевое слово"/>
              <button type="submit" disabled={isSubmitting} className={style.searchButton} >
                <SearchOutlined rotate={90}/>
              </button>
            </Form>
          )}
        </Formik>
}

const DataComponent2 = () => {
  return  <Formik
            initialValues={{ onSale: false }}

            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, values, submitForm }) => (
              <Form className={style.form}>

                <label className={style.label}>
                  
                    <Field type="checkbox" name="onSale"  onClick={() => submitForm()}/>
                  
                  <span> </span>
                  <div className={ style.conditionsSuccess }>
                    Со скидкой
                  </div>
                </label>

                
              </Form>
            )}
    </Formik>
}

const DataComponent3 = () => {
  const minPrice = 100
  const maxPrice = 4210
  return  <Formik
  initialValues={{ priceFrom: minPrice, priceTo: maxPrice } }

  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }}
  >
  {({ isSubmitting, values }) => (
    <Form className={style.form}>

      <p className={style.filterPrice}>
        <label>
          <Field  type="range" name="priceFrom" min={minPrice} max={maxPrice}/>
        </label>  

        <label>
          <Field  type="range" name="priceTo" min={minPrice} max={maxPrice}/>
        </label>
      </p>
      <button type="submit"> КНОПКА </button>
    </Form>
  )}
</Formik>
}

const Search = () => {
  const [choosenBlocksNumber, setChoosenBlocksNumber] = useState([] as Array<number>)

  const [filters, setFilters] = useState({} as FilterType)

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.leftSide}>
            <HiddenBlock  title={"Поиск по товарам"} 
                  DataComponent={DataComponent1} 
                  blockId={0} 
                  choosenBlocksId={choosenBlocksNumber}
                  setChoosenBlocksId={setChoosenBlocksNumber}/>

            <HiddenBlock  title={"Скидки и акции"} DataComponent={DataComponent2}
                          blockId={1} choosenBlocksId={choosenBlocksNumber}
                          setChoosenBlocksId={setChoosenBlocksNumber}/>

            <HiddenBlock  title={"Цена"} DataComponent={DataComponent3} 
                          blockId={2} choosenBlocksId={choosenBlocksNumber}
                          setChoosenBlocksId={setChoosenBlocksNumber}/> 

            <HiddenBlock  title={"Категория"} DataComponent={DataComponent2}
                                    blockId={3} choosenBlocksId={choosenBlocksNumber}
                                    setChoosenBlocksId={setChoosenBlocksNumber}/>

            <HiddenBlock  title={"Сортировка"} DataComponent={DataComponent3} 
                          blockId={4}choosenBlocksId={choosenBlocksNumber}
                          setChoosenBlocksId={setChoosenBlocksNumber}/> 
          </div>
          <div className={style.rightSide}>
            ТОВАРЫ
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
