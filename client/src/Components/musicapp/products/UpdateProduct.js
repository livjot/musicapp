import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, updateProduct, updateInput } from '../../redux/products/productAction';
import { productsFeatureKey } from '../../redux/products/productReducer';

const UpdateProduct = () => {
    let dispatch = useDispatch();
    let productId = useParams().id;
    let navigate = useNavigate();
    
    
    let selectedProductInfo = useSelector((state) =>{
        return state [productsFeatureKey];
        
    })

    let { loading, products, errorMessage } = selectedProductInfo;

    let [submited, setSubmited] = useState(false);

    useEffect(() => {
        dispatch(getProduct(productId));
    },[productId]);


    let handleInput = (event) => {
        dispatch(updateInput(event.target.name, event.target.value));
    };


    let submitProduct = (event) => {
        event.preventDefault();
        dispatch(updateProduct(productId, products));
        setSubmited(true);
    };

    return (
        <>
            {
                submited ? (navigate("/productAdmin")) : (

                    <>
                        <div className='container text-center'>
                            <div className='row'>
                                <div className='col'>
                                    <h1 className='text-dark text-center'>Update Product</h1>
                                    <div className='form-group justify-content-center'>
                                        <form onSubmit={submitProduct} className="border border-dark m-2 bg-light">


                                            <div className='form-group m-3'>
                                                <input name='name' value={products.name} onChange={handleInput} required type='text' className='form-control' placeholder='Name' />
                                            </div>

                                            <div className='form-group m-3'>
                                                <input name='image' value={products.image} onChange={handleInput} required type='text' className='form-control' placeholder='Image Url' />
                                            </div>

                                            <div className='form-group m-3'>
                                                <input name='price' value={products.price} onChange={handleInput} required type='number' className='form-control' placeholder='Price' />
                                            </div>

                                            <div className='form-group m-3'>
                                                <input name='releaseyear' value={products.releaseyear} onChange={handleInput} required type='number' className='form-control' placeholder='Released Year' />
                                            </div>

                                            <div className='form-group m-3'>
                                                <input name='info' value={products.info} onChange={handleInput} required type='text' className='form-control' placeholder='Info' />
                                            </div>

                                            <div className='form-group m-3'>
                                                <input name='name' required type='submit' className='btn btn-success' value='Update Music' />
                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )

            }
        </>
    )
}

export default UpdateProduct;