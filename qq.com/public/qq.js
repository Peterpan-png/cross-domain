const request = new XMLHttpRequest();
request.open("GET", "/perter.json")
request.onreadystatechange = () => {
    if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
            const array = JSON.parse(request.response)
            console.log(array)
        }
    }
}
request.send()