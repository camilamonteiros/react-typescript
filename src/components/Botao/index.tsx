import style from './Botao.module.scss'
interface Props{
    children?:React.ReactNode
}
function Botao({children}:Props){
    return(
        <button className={style.botao}>{children}</button>
    )
}
export default Botao