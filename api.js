// API Integration Example

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        console.log("API Data:", data);

        if (data.length > 0) {
            document.getElementById("apiData").innerText = data[0].title;
        }
    } catch (error) {
        console.error("Error fetching API data:", error);
    }
}
