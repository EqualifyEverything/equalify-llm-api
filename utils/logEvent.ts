export const logEvent = (event) => {
    console.log(JSON.stringify({
        path: event?.rawPath,
        body: event?.body,
        queryStringParameters: event?.queryStringParameters,
        httpMethod: event?.httpMethod,
    }));
}