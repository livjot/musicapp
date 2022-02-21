import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getAllProducts,deleteProduct } from '../../redux/products/productAction';
import { productsFeatureKey } from '../../redux/products/productReducer';


const ProductAdmin = () => {
    let dispatch = useDispatch();

  let productInfo = useSelector((state)=>{
    return state[productsFeatureKey];
  });

  let { loading,products, errorMessage } = productInfo;

 useEffect(()=>{
    dispatch(getAllProducts());
  },[]);

      const handleDeleteProduct = (productId) =>{
          dispatch(deleteProduct(productId));
      }



    return (
        <>
            <div className='container text-center'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='text-center text-dark'>Manage Music Artists</h1>

                        <div className='border border-dark p-2'><p>This page is manged by the Admin</p>
                            <Link to='/addproduct' className='btn btn-success'>
                                Add Music
                            </Link>
                        </div>
                    </div>

                </div>
                <pre>{JSON.stringify(products)}</pre>
                <div className='row mt-3'>
                    <div className='col'>
                        <table class="table table-dark table-striped text-center ">
                            <thead>
                                <tr>
                                    <th>Serial Number</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Release Year</th>
                                    <th>Info</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <thead>
                            {
                                products.map((product)=>{
                                    return(
                                        <tr key={product._id}>
                                            <td>{product._id.substr(product._id.length-5)}</td>
                                            <td>{product.name}</td>
                                            <td><img className='img-fluid img-thumbnail' width='80' height='80' src={product.image}/></td>
                                            <td>{product.price}</td>
                                            <td>{product.releaseyear}</td>
                                            <td>{product.info}</td>
                                            <td>
                                            <Link to={`/updateproduct/${product._id}`} className='btn btn-success btn-sm m-2'>Update</Link>
                                            <button onClick={handleDeleteProduct.bind(this,product._id)} className='btn btn-danger btn-sm m-2'>Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                            </thead>
                        </table>

                    </div>

                </div>

            </div>

        </>
    )

}

export default ProductAdmin;