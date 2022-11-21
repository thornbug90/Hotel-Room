import axios from 'lib/scripts/axios';
import config from "../config";

// ceae0d77-2fd6-dbe3-0f33-61c355c106ff
const apis = {
    getRoomInfoByRoomIds: async (room_id: string): Promise<any> => {
        const response = await axios.get(`${config.API_URL}`, {
            params: {
                room_id: room_id
            }
        });
        return response.data;
    },//4c0ad727-1652-3b6e-4adb-61c21a17a4b1
    getRoomIds: (username: string, password: string): Promise<any> => {
        // return fetch("https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=ceae0d77-2fd6-dbe3-0f33-61c355c106ff", {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': config.API_KEY || "",
        //         'Content-Type': 'application/json'
        //     }
        // });

        return fetch('https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=ceae0d77-2fd6-dbe3-0f33-61c355c106ff', {
            method: "GET",
            headers: {
              "X-Auth-Token": "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA=="
            }
          })
        // .then( response => response.json() )
        // .then( data => console.log("fdewqgeA", data) )
        // .catch(err => console.log("err", err))

        // const response = await axios({
        //     url: "https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
        //     // params: {
        //     //     username: username,
        //     //     password: password,
        //     // },
        //     // headers: {
        //     //     Authentication: config.API_KEY
        //     // }
        //     headers: {
        //         'Authorization': config.API_KEY,
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // });
        // return response.data;

    },
};

export default apis;
