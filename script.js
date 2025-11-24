axios.get("https://boolean-teachers.github.io/mock/api/members/").then(risposta => {
  const dataServer = risposta.data;
  let listHtml = "";
  dataServer.forEach(membro => {
    const serverName = membro.name;
    const serverRole = membro.role;
    const serverEmail = membro.email;
    const serverImage = membro.img;
    console.log(serverImage);
    listHtml += `
    <div class="col-md-4"> 
        <div class="card h-100 bg-dark text-white shadow-sm"> 
            <div class="row g-0 align-items-center">
                <div class="col-4">
                   <img src="${serverImage}" alt="${serverName}" class="img-fluid rounded-start">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${serverName}</h5>
                        <p class="card-text text-light small">${serverRole}</p>
                        <a href="mailto:${serverEmail}" class="text-info text-decoration-none">${serverEmail}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
  });
  const container = document.getElementById("team-container");
  container.innerHTML = listHtml;
});






