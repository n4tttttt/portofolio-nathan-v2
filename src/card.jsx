import {Button, Card} from 'antd'
export default function Cards({showbutton, image, title, description, secretText, link}){
    
    return (
        <>
        <Card title={title} className='card'>{description}<br/><img className='image' src={image} alt='picture'/>
        {showbutton ? (secretText ? (<Button type='primary' onClick={() => alert("You're already here!")}>Click Me!</Button>) : (<Button type='primary' href={link}>Click Me!</Button>)) : (<Button type='disabled'>Website Link Not available</Button>)}</Card>
        </>
    )
}