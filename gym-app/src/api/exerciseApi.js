import axios from "axios";

const API_URL = "https://exercisedb.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
};

export const fetchExercises = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/exercises`, { headers });
    return data;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return [];
  }
};
