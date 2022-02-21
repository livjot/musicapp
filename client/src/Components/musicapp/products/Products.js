import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getAllProducts } from '../../redux/products/productAction'; 
import { productsFeatureKey } from '../../redux/products/productReducer';



const Products = () => {
    let dispatch = useDispatch ();
    let productInfo = useSelector((state) =>{
        return state [productsFeatureKey];
    })
let {products } = productInfo;



    useEffect(() => {
        dispatch(getAllProducts())
        
    
    }, [])

    return (
        <>
            <div className='container text-center'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='text-center text-dark'>Music Artists</h1>

                        <div className='border border-dark lead p-2'><p>Here are some selected famous music artists from the world.</p>

                        </div>
                    </div>

                </div>
            </div>

            <div className='container text-center'>
                <pre>{JSON.stringify(products)}</pre>
                <div className='row mt-3'>


                    {products.length > 0 ? (
                        <>
                            {
                                products.map((product) => {
                                    return (
                                        <div className='col-md-3'>
                                            <div className="card">
                                                <div className='card-header'>

                                                    <img className='img-fluid img-thumbnail' width='200' src={product.image} />
                                                </div>

                                                <div className="card-body">
                                                    <ul className='list-group'>
                                                        <li className='list-group-item text-dark'>Name:
                                                            <span className='text-primary'> {product.name}</span>
                                                        </li>

                                                        <li className='list-group-item text-dark'>Price:
                                                            <span className='text-dark'> {product.price}</span>
                                                        </li>

                                                        <li className='list-group-item text-dark'>Released in Year:
                                                            <span className='text-dark'> {product.releaseyear}</span>
                                                        </li>

                                                        <li className='list-group-item text-dark'>Info:
                                                            <span className='text-dark'> {product.info}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }


                        </>
                    ) : null}
                </div>








            </div>

        </>
    )

}

export default Products;