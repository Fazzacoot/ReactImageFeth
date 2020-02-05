import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 8c1f4ccc8d03bfbac6c5489114e00bea6201cd252f993d2830869dd883092951"
  }
});
