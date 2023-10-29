import {BiEdit} from "react-icons/bi";


export function EditButton(props)
{
    return <a href={'#'} onClick={e => e.preventDefault()}><BiEdit style={{width:'35px',height:'35px'}}/></a>
}