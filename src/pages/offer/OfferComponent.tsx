import React, { useEffect, useState } from 'react'
import './offercomonent.scss'
import { getAllProducts } from '../../services/productService'
import ProductCard from '../../components/card/ProductCard'

const OfferComponent = () => {
    const [product, setProduct] = useState<any>([])
    useEffect(() => {
        getAllProducts().then((productData: any) => {
            setProduct(productData)


        }).catch(err => console.log(err));



    }, [])
    return (
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
    )
}

export default OfferComponent
