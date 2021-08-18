import React, {useEffect, useState} from 'react';
import {getOffers} from './productDetailApi'
import { Offer, Offers } from '../../Common/types'
import AddToCartPopup from '../AddToCartPopup/AddToCartPopup';
import { DetailCard, DetailImage, DetailTitle, DetailInfoContainer, DetailPrice, DetailDescription, AddToCartButton, OriginalPrice, PriceContainer, PriceLabel} from './ProductDetail.styles';
import { RouteComponentProps } from '@reach/router';

interface ProductDetailProps extends RouteComponentProps {}

const ProductDetail = ({}:ProductDetailProps) => {

    const [ offers, setOffers ] = useState<Offers | undefined>(undefined)  //All Offers retrieved from the API
    const [ detailOffer, setDetailOffer ] = useState<Offer | undefined>(undefined) //Offer displayed in this detail view
    const [ showPopup, setShowPopup] = useState<boolean>(false); //Boolean based off which the popup is displayed or not

    /** Function for toggling the showPopup state variable*/
    const togglePopup = () => {
        setShowPopup(!showPopup) 
    }

    /** API call for retrieving all offers */
    useEffect(() => {
        const fetchOffers = async () => { 
            const responseOffers = await getOffers()
            setOffers(responseOffers) //set offers state variable
            setDetailOffer(responseOffers.offers[0]) //set detailOffer state variable
        }
        fetchOffers()
    }, [])

    return (
        <>
        <DetailCard>
            <DetailImage src={detailOffer?.image}/>
            <DetailInfoContainer>
                <DetailTitle>{detailOffer?.title}</DetailTitle>
                <PriceContainer>
                    <PriceLabel>Price: </PriceLabel>
                    <OriginalPrice>{detailOffer?.original_price}</OriginalPrice>
                    <DetailPrice>{detailOffer?.discounted_price}</DetailPrice>
                </PriceContainer>
                <DetailDescription>Product description: {detailOffer?.short_description}</DetailDescription>
                <AddToCartButton onClick={togglePopup} >Add to Cart</AddToCartButton>
            </DetailInfoContainer>
        </DetailCard>

        {showPopup ? //if showPopup is true, display the popup, otherwise don't
            <AddToCartPopup
                offers={offers}
                closePopup={togglePopup.bind(this)}
            />
            : null
        }
        </>
    );
}

export default ProductDetail;