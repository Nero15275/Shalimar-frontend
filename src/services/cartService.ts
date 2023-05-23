import axios from 'axios';
const baseUrl = 'https://shalimarbackend.onrender.com'



export const getAllcart = async () => {
    let cartItems
    await axios.get(`${baseUrl}/cart/getall`).then((response) => {
        cartItems = response.data
    }).catch((error) => {
        console.log(error);

    })
    return cartItems
}

export const addToCart = async (product: any) => {
    let body = {
        productid: product._id,
        quantity: 1,
        price: product.price,
        discount: product.discount
    }


    await axios.post(`${baseUrl}/cart/addtocart`, body).then((response) => {

    }).catch((error) => {
        console.log(error);
    })

}
export const deleteItemFromCart = async (id: any) => {

    await axios.delete(`${baseUrl}/cart/delete/${id}`).then((response) => {

    }).catch((error) => {
        console.log(error);
    })

}

export const updateCartItem = async (product: any) => {
    let body = {
        quantity: product.quantity + 1
    }
    await axios.put(`${baseUrl}/cart/update/${product._id}`, body).then((response) => {

    }).catch((error) => {
        console.log(error);
    })

}