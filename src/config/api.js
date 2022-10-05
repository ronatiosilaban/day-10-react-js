// import axios from 'axios';

// export const API = axios.create({
//     baseURL:'https://api.unsplash.com',
//     headers:{
//         Authorization:
//         'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296'
//     }
// })

import axios from 'axios';
const KEY ='AIzaSyBsVTtuy_ymdFd2jHrOC62EC-LeIgU4dHc'


export const API = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        type: "video",
        maxResults: 6,
        key: KEY,
    },
})