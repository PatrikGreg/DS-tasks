export interface Offer {
    title: string;
    short_description: string;
    original_price: number;
    discounted_price: number;
    image: string;
}

export interface Offers {
    currency: string;
    offers: Offer[];
}