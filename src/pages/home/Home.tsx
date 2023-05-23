import React, { useEffect, useState } from 'react'
import './home.scss'
import ProductCard from '../../components/card/ProductCard'
import { getAllProducts } from '../../services/productService'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const offersCarousel = [
        { src: 'https://totalfoods.in/static/uploads/category/image/1667040427.jpg' },
        { src: 'https://totalfoods.in/static/uploads/category/image/1683546589.jpg' },
        { src: 'https://totalfoods.in/static/uploads/category/image/1651141434.jpg' },
        { src: 'https://totalfoods.in/static/uploads/category/image/1682872969.jpg' },
        { src: 'https://totalfoods.in/static/uploads/category/image/1679295782.jpg' },
        { src: 'https://totalfoods.in/static/uploads/category/image/1651140300.jpg' },


    ]
    const [product, setProduct] = useState<any>([])
    const navigate = useNavigate()
    useEffect(() => {
        getAllProducts().then((productData: any) => {
            setProduct(productData)


        }).catch(err => console.log(err));



    }, [])
    const handleClickOffer = () => {
        navigate('/offer')
    }

    return (
        <>
            <div className="rootcontainer">
                <div className="carousel">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active" onClick={handleClickOffer}>
                                <img className="d-block w-100" src="https://totalfoods.in/static/uploads/category/image/1684423822.jpg" alt="First slide" />
                            </div>
                            {

                                offersCarousel.map((item, index) => {
                                    return (
                                        <div className="carousel-item" key={index} onClick={handleClickOffer}>
                                            <img className="d-block w-100" src={item.src} alt="First slide" />
                                        </div>
                                    )
                                })
                            }


                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className={'container'}>
                    {product?.map((ele: any) => {
                        return (

                            <ProductCard key={ele._id} product={ele} styleProp={250} />

                        )
                    })

                    }
                </div>
            </div>
        </>
    )
}

export default Home
