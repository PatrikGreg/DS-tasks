import styled from 'styled-components';


/**
 * Container div which also servees as the dark opaque background
 */
export const PopupShade = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.75);
`

/**
 * Container for the main popup card
 */
export const Popup = styled.div`
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    background: white;
    display: flex;
    flex-direction: column;
`


/**
 * Header containing title and the close popup button
 */
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 1em;
    border: 1px black solid;
`

export const Title = styled.span`
    flex: 1;
    text-align: center;
    font-size: 1.5em;
`

export const ClosePopupButton = styled.button`
    position: absolute;
    right: 0;
    margin-right: 1em;
`

/**
 * Hero section displaying total price
 */
export const YourCartHero = styled.div`
    padding: 0.5%;
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    border: 1px black solid;
`
// Image container for the shopping cart round icon
export const ImageContainer = styled.div`
    flex: 1;
    width: 1em;
`
// Shopping cart round icon
export const RoundIcon = styled.img`
    border-radius: 20%;
    background-color: #f0f0f0;
    width: 3.2em;
    height: auto;

`

export const HeroTitle = styled.span`
    font-weight: 900;
    font-size: 1.2em;
    flex:8;
`

export const TotalPrice = styled.span`
    font-weight: 900;
    font-size: 1.2em;
    flex:1;
`

/** 
 * Container holding all offers retrieved from API
 */
export const OffersContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 8;
`

/**
 * Footer containing title and the close popup button
 */
export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 1em;
    border: 1px black solid;
`

export const SubmitButton = styled.button`
    flex: 1;
    max-width: 15em;
    margin-left: auto;
`
