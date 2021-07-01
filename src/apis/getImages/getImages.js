// test apis
export async function getImages() {
    try {
        let response = await fetch('https://nakhll.com/api/v1/product-page/details/jbl-wireless-headphones-model-450bt/', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            }
        });
        return response;
    } catch (error) {
        console.log("error", error);
    }
}