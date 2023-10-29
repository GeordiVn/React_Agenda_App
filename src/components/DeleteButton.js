import {TiDelete} from "react-icons/ti";

export function DeleteButton(props)
{
    return <a href={'#'} onClick={e => e.preventDefault()}><TiDelete style={{width:'35px',height:'35px'}}/></a>
}
