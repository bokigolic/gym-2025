import axios from "axios";

const API_URL = "https://exercisedb.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
};

// Preuzimanje svih vežbi
export const fetchExercises = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/exercises`, { headers });
    return data;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return [];
  }
};

// Preuzimanje delova tela
export const fetchBodyParts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/exercises/bodyPartList`, {
      headers,
    });
    return data;
  } catch (error) {
    console.error("Error fetching body parts:", error);
    return [];
  }
};
