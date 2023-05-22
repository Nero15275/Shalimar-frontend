import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './productcard.scss'
import { addToCart } from '../../services/cartService';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = (props: any) => {
    const { styleProp, product } = props
    const navigate = useNavigate();
    const handelAddToCart = (productItem: any) => {
        addToCart(productItem)
        toast('Item Added to Cart')
        setTimeout(() => {
            navigate('/cart')
        }, 1000);

    }

    return (
        <Card sx={{ maxWidth: styleProp }} className='card'>
            <CardMedia
                sx={{ height: 200 }}
                image={product.img}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='desc'>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='desc'>
                    {product.description}

                </Typography>
                {product.hasOffer ? <div>
                    <s> <Typography variant="h6" color="text.danger" >
                        Price: ₹ {product.price}

                    </Typography></s>
                    <Typography variant="h6" color="text.danger" >
                        Offer Price: ₹ {product.price - product.discount}

                    </Typography>
                    <Typography variant="body2" color="text.danger" >
                        You save: ₹ {product.discount}

                    </Typography>
                </div> : <Typography variant="h6" color="text.danger" >
                    Price: ₹ {product.price}

                </Typography>}

            </CardContent>
            <CardActions>
                <Button size="small">Buy</Button>
                <Button size="small" onClick={() => handelAddToCart(product)}>Add to cart</Button>
            </CardActions>
        </Card>
    );
}
export default ProductCard
