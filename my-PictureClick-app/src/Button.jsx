

function Button(){

    const handleClick = () => console.log('OUCH!')

    const handleClick2 = (name) => console.log('${name} Stop Clicking me')

    return(<button onclick={() =>handleClick2(Bro)}>Click me</button>)

}

export default Button