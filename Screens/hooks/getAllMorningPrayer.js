import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const allMorningPrayerUrl = "https://daotechnology.onrender.com/api/v1/get/all/morning/prayer/morning_prayer";
const getAllMorningPrayer  = async () => {
    const arr = [];
    const response = await axios.get(allMorningPrayerUrl);
    response.data.data.unshift({"first":"banner"});
    return response.data;
}

export const UseGetAllMorningPrayer = () => {
    const {isLoading, data} = useQuery(['getAllMorningPrayer'],getAllMorningPrayer);
    return {data,isLoading};
}