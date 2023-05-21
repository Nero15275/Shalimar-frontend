import React, { useEffect, useState } from 'react'
import './home.scss'
import ProductCard from '../../components/card/ProductCard'
import { getAllProducts } from '../../services/productService'
const Home = () => {
    const products = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [product, setProduct] = useState<any>([])
    useEffect(() => {
        getAllProducts().then((productData: any) => {
            setProduct(productData)


        }).catch(err => console.log(err));



    }, [])

    return (
        <>
            <div className="rootcontainer">
                <div className={'container'}>
                    {product?.map((ele: any) => {
                        return (

                            <ProductCard key={ele.name} product={ele} styleProp={200} />

                        )
                    })

                    }
                </div>
            </div>
        </>
    )
}

export default Home
