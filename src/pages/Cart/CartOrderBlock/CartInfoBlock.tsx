import style from "./cartOrder.module.css"

export const CartInfoBlock: React.FC<{title: string, subtitle: string}> = ({title, subtitle}) => {
  return <div style={{margin: "10px 0"}}>
    <div style={{color: "#333333"}}>{title}</div>
    <div style={{color: "#9f9f9f"}}>{subtitle}</div>
  </div>
}