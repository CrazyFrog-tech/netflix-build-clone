import { $CombinedState } from '@reduxjs/toolkit';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db from '../firebase';
import './PlansScreen.css'

function PlansScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    useEffect(() => {
        db.collection('products')
            .where('active', '==', true)
            .get().then((querySnapshot) => {
                const products = {};
                querySnapshot.forEach(async productDoc => {
                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc.ref.collection('prices').get();
                    priceSnap.docs.forEach((price) => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data(),
                        };
                    });

                });
                setProducts(products);

            });
    }, []);
    console.log(products);
    const loadCheckout = async (priceId) => {
        const docRef = await db.collection('customers')
        .doc(user.uid).collection("checkout_sessions")
        .add({
            price: priceId, 
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

        docRef.onSnapshot(async(snap) => {
            const { error, sessionId} = snap.data();
            if(error) {
                alert(`An error occured:  ${error.message}`);

            }

            if(sessionId) {
                const stripe = await loadStripe('pk_test_51Ko4rxI5TKy53VFneXAyfjG2TEEB6iOKzTfZmmCrBqpsyHG6lN1rH7dx7QaGTkesCesqrdb6E0aKD9ksgVowkkpS00lgYifDY2');
                stripe.redirectToCheckout({sessionId});
                
            }
        })



    };

    return (
        <div className='planScreen'>
            {Object.entries(products).map(([productId, productData]) => {
                //TODO: add some logic
                return (
                    <div className='plansScreen__plan'>
                        <div className='plansScreen__info'>
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>
                    </div>
                );
            })}


        </div>
    )
}

export default PlansScreen