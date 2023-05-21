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
        price: product.price
    }


    await axios.post(`${baseUrl}/cart/addtocart`, body).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })

}
export const deleteItemFromCart = async (id: any) => {

    await axios.delete(`${baseUrl}/cart/delete/${id}`).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })

}