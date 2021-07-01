// test apis
export async function getImages() {
    try {
        let response = await fetch('http://192.168.1.48:8000/app/api/v1/factor/shop/Khatun/completed/', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'sessionid=w4rg2uh4so07b8a9mgwo36po3q9jf28t;',
                // 'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include'
        });
        return response;
    } catch (error) {
        console.log("error", error);
    }
}