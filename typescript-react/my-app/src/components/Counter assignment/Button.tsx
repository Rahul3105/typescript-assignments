interface ButtonProps {
    label : String,
    onClick : () => void
}
export const Button = ({ label ,   onClick } : ButtonProps)  => {
    return <button onClick={onClick}>{label}</button>
}

