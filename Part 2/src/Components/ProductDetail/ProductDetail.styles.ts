import styled from 'styled-components';


/**
 * Container holding all elements belonging to the detailed view
 */
export const DetailCard = styled.div`
    display: flex;
    flex-direction: row;
`


/**
 * Product Image
 */
export const DetailImage = styled.img`
    flex: 1;
`


/**
 * Container holding textual information
 * (Title, Price, Description)
 */
export const DetailInfoContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: top;
    padding: 2em 0;
`


/**
 * Title
 */
export const DetailTitle = styled.span`
    text-align: center;
    font-size: 3em;
    flex: 3;
`


/**
 * Price
 */
//Container holding the prices
export const PriceContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex: 2;
    font-size: 2em;
`
//"Price:" label
export const PriceLabel = styled.span`
    margin: 0 1em;
`
//Price styling
export const DetailPrice = styled.span`
    text-align: center;
    margin: 0 1em;
`
//Styling to cross out original price
export const OriginalPrice = styled(DetailPrice)`
    text-decoration: line-through;
`


/**
 * Product description
 */
export const DetailDescription = styled.span`
    flex: 3;
    font-size: 1.5em;
`


/**
 * Add to cart
 */
export const AddToCartButton = styled.button`
    flex: 1;
    align-self: center;
    font-size: 1.5em;
    min-width: 30%;
`