import React, { useState } from 'react';
import { Offer, Offers } from '../../Common/types';
import OfferRow from '../OfferRow/OfferRow';
import { ClosePopupButton, Header, HeroTitle, OffersContainer, Popup, PopupShade, RoundIcon, Title, YourCartHero, ImageContainer, Footer, SubmitButton, TotalPrice } from './AddToCartPopup.styles';

/** Define component prop types */
type AddToCartPopupProps = {
    offers?: Offers;
    closePopup: () => void;
}

const AddToCartPopup =  ({offers, closePopup}: AddToCartPopupProps) =>{

    //State variable which stores the total price of added items
    const [totalPrice, setTotalPrice] = useState<number>(offers?.offers[0].discounted_price || 0);
    //State variable array which holds all selected items
    const [selectedOffers, setSelectedOffers] = useState<Array<Offer | undefined>>([offers?.offers[0]]);


    /** Function for adding price of selected offer to total price */
    const addTotalPrice = (offer:Offer) => {
        (offer.discounted_price == null) ? 
                setTotalPrice(totalPrice + offer.original_price)
            :
                setTotalPrice(totalPrice + offer.discounted_price)
    }

    /** Function for deducting price of unselected offer to total price */
    const deductTotalPrice = (offer:Offer) => {
        var newValue: number;
        (offer.discounted_price == null) ? 
                newValue = totalPrice - offer.original_price
            :
                newValue = totalPrice - offer.discounted_price
        setTotalPrice(Number(parseFloat(String(newValue)).toFixed(2)));
    }

    /** Function for adding selected offer to the selectedOffers state variable */
    const addOffer = (offer:Offer) => {
        selectedOffers.push(offer)
        addTotalPrice(offer)
        setSelectedOffers(selectedOffers)
    }

    /** Function for removing unselected offer from the selectedOffers state variable */
    const removeOffer = (offer:Offer) => {
        var index = selectedOffers.indexOf(offer);
        if (index !== -1) {
            selectedOffers.splice(index, 1);
            deductTotalPrice(offer)
            setSelectedOffers(selectedOffers)
        }
    }

    /** Function for sending an alert with the list of selected offers upon clicking the checkout button */
    const alertOffers = () => {
        closePopup()
        let stringifiedOffers = ""
        for(let offer of selectedOffers){
            stringifiedOffers += offer?.title + "\n"
        }
        stringifiedOffers += "Total price: " + totalPrice
        alert(stringifiedOffers);
    }


    /** Header decomposition */
    const renderHeader = () => { 
        return(
            <Header>
                <Title>Wait, don't miss our deals, today only!</Title>
                <ClosePopupButton onClick={closePopup}>X</ClosePopupButton>
            </Header>
        )
    }

    /** Hero decomposition */
    const renderHero = () => {
        return(
            <YourCartHero>
                <ImageContainer><RoundIcon src={'https://image.flaticon.com/icons/png/512/2121/2121815.png'}/></ImageContainer>
                <HeroTitle>Your cart</HeroTitle>
                <TotalPrice>{totalPrice}{offers?.currency}</TotalPrice>
            </YourCartHero>
        )
    }

    /** Offers container decomposition */
    const renderOffersContainer = (offers: Offers | undefined) => {
        return(
            <OffersContainer>
                {   //Fill container with offers retrieved from the API
                    offers?.offers.map((offer:Offer, index) => {
                        return (
                            <OfferRow 
                                key = {index}
                                currency= {offers?.currency}
                                offer = {offer}
                                addOffer = {addOffer.bind(this)}
                                removeOffer = {removeOffer.bind(this)}
                            />
                        )
                    })
                }
            </OffersContainer>
        )
    }

    /** Footer decomposition */
    const renderFooter = () => {

        return(
            <Footer>
                <SubmitButton onClick={alertOffers}>Continue to checkout &gt;</SubmitButton>
            </Footer>
        )
    }

    return (
        <PopupShade>
            <Popup>
                {renderHeader()}
                {renderHero()}
                {renderOffersContainer(offers)}
                {renderFooter()}
            </Popup>
        </PopupShade>
    );
}

export default AddToCartPopup;