import React, { useEffect } from 'react'

const Item=  {id:1 ,title:"Delineado Dermopigmentación", description: "Sesión de Delineado Dermopigmentación",pitureURL: "",price:"3000" }
{id:2 ,title:"Cejas", description: "Sesión de Microblading Láser y Dermopigmentación",pictureURL:"",price:"2500"}

{id:3 ,title:"Labios", description: "Sesión de Labios Micropigmentación",pictureURL:"",price:"3500"}

{id:4 ,title:"Remoción", description:"Sesión de remoción",pictureURL:"",price:"2000"}


const ItemDetail = () => {
const [item,setItem] = useState({})

useEffect(() => {
    getItemDetail ().then( res => {
    setItem(res)
})
}, [])

const getItemDetail= () => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(ItemDetail)
    },2000);
    })
}
    
    return (
    <div>
        <h1>Detalles del Producto</h1>
        <li>{item.title}</li>
        <li>{item.description}</li>
        <li>{price}</li>
        <Count stock ={item.stock}/>
    </div>
  )
}

export default ItemDetail