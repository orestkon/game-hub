import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d3c721c2973e437ab685be17b3e7f0d8"
    }
})