import React, { useEffect, useState } from 'react'
import './cart.scss'
import { deleteItemFromCart, getAllcart } from '../../services/cartService'
import { Button, Card, CardActions, CardContent, CardMedia, Typography, dividerClasses } from '@mui/material'
import { log } from 'console'
import PriceComponent from '../../components/price/PriceComponent'

const Cart = () => {
    const [cartItem, setcartItem] = useState<any>([])
    const [trigger, setTrigger] = useState(false)
    useEffect(() => {
        console.log('called', cartItem)
        getAllcart().then((item) => {
            setcartItem(item)
        }).catch((err) => {
            console.log(err)
        })

    }, [trigger])
    const handleDelete = (id: any) => {
        deleteItemFromCart(id)
        setTimeout(() => {
            setTrigger(!trigger)
        }, 1000);

        console.log(trigger)
    }



    return (<>
        {
            cartItem.length ? <div className="cart-root-container">
                <div className='cart-container'>
                    {
                        cartItem?.map((item: any) => {


                            return (
                                <Card className='cart-card' key={item._id}>
                                    <div className="imgcont">
                                        <div className="imgs">
                                            <img src={item.productid.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" className='desc'>
                                                {item.productid.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" className='desc'>
                                                {item.productid.description}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Price: {item.productid.price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>

                                            <Button size="small" color='warning' onClick={() => handleDelete(item._id)}>Delete</Button>
                                        </CardActions>
                                    </div>
                                </Card>
                            )
                        })
                    }

                </div>
                <div className="price-container">
                    <PriceComponent cartItems={cartItem} />
                </div>

            </div> : <div className='empty-cart'>
                <img src="/empty-cart.png" alt="" className='center' />
            </div>
        }
    </>


    )
}

export default Cart
