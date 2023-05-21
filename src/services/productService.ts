import axios from 'axios';
import { log } from 'console';
const baseUrl = 'https://shalimarbackend.onrender.com'

export const getAllProducts = async () => {
    let products
    await axios.get(`${baseUrl}/product/viewall`).then((res) => {

        products = res.data

    }).catch((error) => {

        throw error

    })
    return products
}