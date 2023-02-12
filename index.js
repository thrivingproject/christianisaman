fetchFiles()

async function fetchFiles() {
    try {
        const response = await axios.get("index.txt");
        const files = response.data.split("\n");
        for (const file of files) {
            const link = document.createElement("a");
            link.classList.add("file_link");
            link.setAttribute("data-file", `static/${file}`);
            link.innerText = file;
            link.addEventListener("click", async () => {
                try {
                    const fileResponse = await axios.get(`static/${file}`);
                    const html = marked(fileResponse.data);
                    document.querySelector("#file_content").innerHTML = html;
                } catch (error) {
                    console.error(error);
                }
            });
            const listItem = document.createElement("li");
            listItem.appendChild(link);
            document.querySelector("#file_list").appendChild(listItem);
        }
    } catch (error) {
        console.error(error);
    }
}