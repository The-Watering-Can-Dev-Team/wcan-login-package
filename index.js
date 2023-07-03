const axios = require("axios");

function useStaffPortalLogin(apiKey) {

    const baseUrl = "https://portal.thewateringcan.ca/wp-content/plugins/wcan-staff-portal/api/?action=authorize";

    return function (email, password) {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl,
                {
                    email: email,
                    password: password,
                    env: process.env.NODE_ENV
                },
                {
                    headers: {
                        'STAFF-PORTAL-KEY': apiKey
                    }
                }
            )
                .then(resolve)
                .catch(reject);
        });
    }
}

module.exports = useStaffPortalLogin;