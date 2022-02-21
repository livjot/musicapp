import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux'; 
import { productsFeatureKey } from '../../redux/products/productReducer';
import { createProduct } from '../../redux/products/productAction';


const AddProduct = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [product, setProduct] = useState({
        name: "",
        image: "",
        price: "",
        releaseyear: "",
        info : ""
    });
    let productinfo = useSelector((state) =>{
        return state [productsFeatureKey];
    })

    let [submit, setSubmit] = useState(false);
    
    let submitProduct = (event) => {
        event.preventDefault();
        dispatch(createProduct(product));
        setSubmit(true);
    };


    let updateInput = (event) =>{
        setProduct({...product,[event.target.name]:event.target.value})
    }

    return (
        <>
        {
            submit ? (navigate("/productAdmin")) :(

                <>
                <div className='container text-center'>
                    <div className='row'>
                        <div className='col'>
                            <h1 className='text-dark text-center'>Add Product</h1>
                            <div className='form-group justify-content-center'>
                            <form onSubmit={submitProduct}className="border border-dark m-2 bg-light">
                            
                            
                            <div className='form-group m-3'>
                            <input name='name' value={product.name} onChange={updateInput} required type='text' className='form-control' placeholder='Name'/>
                            </div>

                            <div className='form-group m-3'>
                            <input name='image' value={product.image} onChange={updateInput} required type='text' className='form-control' placeholder='Image Url'/>
                            </div>

                            <div className='form-group m-3'>
                            <input name='price' value={product.price} onChange={updateInput} required type='number' className='form-control' placeholder='Price'/>
                            </div>

                            <div className='form-group m-3'>
                            <input name='releaseyear' value={product.releaseyear} onChange={updateInput} required type='number' className='form-control' placeholder='Released Year'/>
                            </div>

                            <div className='form-group m-3'>
                            <input name='info' value={product.info} onChange={updateInput} required type='text' className='form-control' placeholder='Info'/>
                            </div>

                            <div className='form-group m-3'>
                            <input name='name' required type='submit' className='btn btn-success' value='Add Music'/>
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

export default AddProduct;