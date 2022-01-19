const action = (type, payload) => ({ type, payload });

const HttpClient = () => {
    return {
        getAsync: (url, token = null) => {
            let options = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${token}`
                },
            }
            return http(url, options)
        },
        postAsync: (url, body, token = null) => {
            const options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${token}`
                },
                body: JSON.stringify(body),
            };
            return httpCall(url, options)
        }
    };
}

const httpCall = async (url, options) => {
    return fetch(url, options)
        .then(response => {
            if (response.status == 200) {
                try {
                    return response.json()
                }
                catch (error) {
                    return Promise.reject(error);
                }
            }
            else {

            }
        })
        .then(result => {
            return Promise.resolve(result);
        })
        .catch(error => {
            if (error) {
                return Promise.reject(error);
            }
        });
};
