import Offer from "./Offer";

interface Cart {
    currency: String;
    items: Array<[Offer, Number]>;
}

export default Cart;