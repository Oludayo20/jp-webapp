import React, { useEffect } from 'react';
import StarRating from './Rating';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  addProductToCart,
  cartState,
  resetState
} from '../../redux/slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/slice/authSlice';

const ProductCard = ({ product }) => {
  const { isLoading, isSuccess, isError, message } = useSelector(cartState);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addToCart = () => {
    try {
      if (user) {
        dispatch(
          addProductToCart({
            userId: user.uid,
            productId: product.id,
            productName: product.productName,
            productImage: product.productImage,
            price: product.price,
            deliveryFee: product.deliveryFee ? product.deliveryFee : 0,
            category: product.category,
            quantity: 1
          })
        );

        isSuccess && toast.success(message);
        dispatch(resetState());
      } else {
        toast.error('Please login');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      toast.error(message);
    }
  };

  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      <Link to={`/productDetails/${product.id}`}>
        <div className="relative h-40">
          <div className="flex items-center justify-center ">
            <img
              src={product.productImage}
              alt="product Image"
              className="h-40 w-40 md:w-60"
            />
          </div>

          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <div
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.5 4a6.5 6.5 0 0 1 6.5 6.5c0 1.62-.59 3.1-1.57 4.23l5.65 5.65l-.71.71l-5.65-5.65A6.469 6.469 0 0 1 9.5 17A6.5 6.5 0 0 1 3 10.5A6.5 6.5 0 0 1 9.5 4m0 1A5.5 5.5 0 0 0 4 10.5A5.5 5.5 0 0 0 9.5 16a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 9.5 5M7 10h2V8h1v2h2v1h-2v2H9v-2H7v-1Z"
                />
              </svg>
            </div>
            <div
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-1 px-4">
          <h4 className="line-clamp-2 text-sm text-gray-800 hover:text-gray-900 transition">
            {product.productName}
          </h4>
          <div className="flex items-baseline space-x-2">
            <p className="text-sm text-primary">#{product.price}</p>
            <p className="text-xs text-gray-400 line-through">
              #{product.price + 20000}
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex gap-1 text-xl text-yellow-400">
              <StarRating rating={+product.productStar} />
            </div>
            <div className="text-xs text-gray-500 ml-3">(150)</div>
          </div>
        </div>
      </Link>
      <button
        onClick={addToCart}
        className="block w-full py-1.5 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        {isLoading ? (
          <>
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-6 h-6 mr-3 text-primary animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>Add to cart</>
        )}
      </button>
    </div>
  );
};

export default ProductCard;
