export function DeleteButton(props)
{
    return <a href={'#'} onClick={e => e.preventDefault()}><img className={'icon'} src={'/icons/delete_icon.png'}/></a>
}
