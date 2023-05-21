import React, { useEffect, useState } from 'react'
import './cart.scss'
import { deleteItemFromCart, getAllcart } from '../../services/cartService'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { log } from 'console'

const Cart = () => {
    const [cartItem, setcartItem] = useState<any>([])
    const [trigger, setTrigger] = useState(false)
    useEffect(() => {
        console.log('called')
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



    return (
        <div className='cart-container'>
            {
                cartItem?.map((item: any) => {


                    return (
                        <Card sx={{ Width: 345 }} className='cart-card' key={item._id}>

                            <CardMedia
                                sx={{ height: 140 }}
                                image={item.productid.img}
                                title="green iguana"
                            />
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
                                    <Button size="small">Buy</Button>
                                    <Button size="small" color='warning' onClick={() => handleDelete(item._id)}>Delete</Button>
                                </CardActions>
                            </div>
                        </Card>
                    )
                })
            }

        </div>
    )
}

export default Cart
