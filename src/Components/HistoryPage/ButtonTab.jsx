import "./ButtonTab.css"
import { clsx } from 'clsx';
const Button = ({ type, icon, onClick, className }) => {


    return (

        <button type={type} className={clsx('ButtonTab', className)} onClick={onClick}>
            <img src={icon} alt="Toogle" />
        </button>
    )


}
export default Button;