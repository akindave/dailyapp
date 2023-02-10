import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const allMiddayPrayerUrl = "https://daotechnology.onrender.com/api/v1/get/all/midday/prayer/midday_prayer";
const getAllMiddayPrayer  = async () => {
    const response = await axios.get(allMiddayPrayerUrl);
    response.data.data.unshift({"first":"banner"});
    return response.data;
}

export const UseGetAllMiddayPrayer = () => {
    const {isLoading, data} = useQuery(['getAllMiddayPrayer'],getAllMiddayPrayer);
    return {data,isLoading};
}