function navegar(page){

    fetch(`modulos/${page}`)
    .then ((respnse) => {

        if (!respnse.ok) {
            
            throw new Error(`Error loading page: ${respnse.statusText} `);
        }

        return respnse.text()
    })
    .then ((html)=>{

        document.getElementById("main").innerHTML = html
    })

    .catch((error) => {
        console.error(error);
        document.getElementById('content').innerHTML = 
        `
                <h2>Error</h2>
                <p>Sorry, the requested page could not be loaded.</p>
            `;
    })
}


document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
        
        let selectedId = li.id;
        navegar(selectedId);
    });
});
