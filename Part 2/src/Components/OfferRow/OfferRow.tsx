import React, {useState} from 'react';
import { Offer } from '../../Common/types';
import { OfferRowContainer, AddRemoveOfferButton, OfferPrice, OfferPrices , OfferImage, OfferContent, OfferInfo, OfferName, OfferDescription } from './OfferRow.styles';

type OfferRowProps = {
    currency: string;
    offer: Offer;
    addOffer: (offer:Offer)=>void;
    removeOffer: (offer:Offer)=>void;
}


const OfferRow =  ({currency, offer, addOffer, removeOffer}: OfferRowProps) =>{

    const [ isSelected, setIsSelected] = useState<boolean>(offer.title === "Bulb" ? true : false);

    const handleAddRemove = () => {
        (isSelected) ?
            removeOffer(offer)
        :
            addOffer(offer);
        setIsSelected(!isSelected)
    }

    const renderPrice = (original_price: number, discounted_price: number, currency: string) => {
        return (
            <OfferPrices>                
            {(discounted_price == null)?
                    <OfferPrice $isOriginal={true} $isMain={true} >{original_price}{currency}</OfferPrice>
                :
                    <>
                    <OfferPrice $isOriginal={true} $isMain={false} >{original_price}{currency}</OfferPrice>
                    <OfferPrice $isOriginal={false} $isMain={true} >{discounted_price}{currency}</OfferPrice>
                    </>
            }
            </OfferPrices>
        )
    }

    const renderAddRemoveButton = () => {
        return (
            <>
            {
                (isSelected) ?
                        <AddRemoveOfferButton onClick={handleAddRemove}> - Remove </AddRemoveOfferButton>                        
                    :
                        <AddRemoveOfferButton onClick={handleAddRemove}> + Add </AddRemoveOfferButton>
            }
            </>
        )
    }

    return (
        <OfferRowContainer>
            <OfferImage src={offer.image}/>
            <OfferContent>
                <OfferInfo>
                    <OfferName>{offer.title}</OfferName>
                    {renderPrice(offer.original_price, offer.discounted_price, currency)}
                </OfferInfo>
                <OfferDescription>
                    {offer.short_description}
                </OfferDescription>
            </OfferContent>
            {renderAddRemoveButton()}
        </OfferRowContainer>
    )

}

export default OfferRow;
