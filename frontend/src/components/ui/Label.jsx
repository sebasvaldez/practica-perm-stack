
export const Label = ({children, htmlFor}) => {
  return (
    <label 
    htmlFor={htmlFor}
    className='block text-sm font-bold text-gray-700'
    >{children}</label>
  )
}
