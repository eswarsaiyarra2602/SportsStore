import {React, useContext} from 'react'
import './CSS/WishList.css';
import { UserContext } from '../context/UserContext';
import { ShopContext } from '../context/ShopContext';
import { WishListItem } from '../components/WishListItem/WishListItem';
import Navbar from '../components/Navbar/Navbar';
export const Wishlist = () => {
    const { user } = useContext(UserContext);
    const { all_products } = useContext(ShopContext);

    const wishlistItems = user.wishlist.map((wishlistItem) => {
        const product = all_products.find(p => p.productId === wishlistItem);
        return product ? { ...product } : null;
    }).filter(item => item);
  return (
    <>
        <Navbar></Navbar>
        <div className='container' style={{marginTop: '75px'}}>
        <div className="wishlist-title text-center fw-bold " 
            style={{fontSize:'1.8rem'}}>My Wishlist
        </div>
        <div className='wishlist-products-container mt-3 mb-5'>
            {wishlistItems.length > 0 ? (
                        wishlistItems.map((item) => (
                            <WishListItem
                                key={item.productId}
                                productId={item.productId}
                                imageUrl={item.imageUrls[0]}
                                title={item.title}
                                weight={item.weight}
                                price={item.new_price}
                                originalPrice={item.old_price}
                                discount={item.old_price - item.new_price}
                                rating={item.rating}
                                rating_count={item.rating_count}
                            />
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
            )}
        </div>
    </div>
    </>
  )
}
