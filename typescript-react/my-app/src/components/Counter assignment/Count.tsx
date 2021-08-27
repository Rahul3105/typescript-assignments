interface countProp {
    value: number
    
}

const Count = ({ value }: countProp) => {
    return <h3>{ value }</h3>
}
export { Count };