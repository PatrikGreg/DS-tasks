import Api from "../../Common/api";
import { Offers } from "../../Common/types";

const getOffers = async () => {

    const response = await Api.get<Offers>('/offers')

    return response.data
}

export { getOffers };