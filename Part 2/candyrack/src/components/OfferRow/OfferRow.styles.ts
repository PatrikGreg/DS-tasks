import styled from 'styled-components';


/**
 * Container holding the offer data
 */
export const OfferRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    border: 1px black solid;
    margin-left: 5em;
    align-items: center;
    padding-inline: 1em;
`

/**
 * Image of the offer
 */
export const OfferImage = styled.img`
    flex: 1;
    max-width: auto;
    height: 5em;
`

/**
 * OfferContent is the container holidng OfferInfo and OfferDescription
 */
export const OfferContent = styled.div`
    flex: 10;
    display: flex;
    flex-direction: column;
`

/**
 * OfferInfo which holds the name and prices of the offer
 */
export const OfferInfo = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
`

export const OfferName = styled.span`
    flex: 2;
`
//container holding the 2 possible prices of the offer
export const OfferPrices = styled.div`
    display: flex;
    flex-direction: row;
    flex: 10;
`
//price component
export const OfferPrice = styled.span<{ $isOriginal?: boolean, $isMain?: boolean }>`
    text-decoration: ${props => props.$isMain ? 'none' : 'line-through'};
    flex: ${props => props.$isOriginal ?  1 : 7};
    font-weight: ${props => props.$isMain ?  900 : 400};
`

/**
 * Offer Description
 */
export const OfferDescription = styled.span`
    flex: 1;
`

/**
 * Button for adding or removing the offer
 */
export const AddRemoveOfferButton = styled.button`
    height: 3em;
    max-width: 7em;
    align-self: center;
    flex: 10;
`