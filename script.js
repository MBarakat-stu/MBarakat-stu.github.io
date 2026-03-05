const cards = [
    {title:"Educations", id:"educations"},
    {title:"Certificates", id:"certificates"},
    {title:"Social Media", id:"social"},
    {title:"CVs", id:"cvs"},
    {title:"Test Scores", id:"tests"},
    {title:"Experience", id:"experience"},
    {title:"Related Gov Documents", id:"gov"}
];

const container = document.querySelector("#cards-container");

cards.forEach(card => {

    const div = document.createElement("div");
    div.className = "card";
    div.innerText = card.title;

    div.onclick = () => loadPage(card.id);

    container.appendChild(div);

});


function loadPage(page){

    const content = document.querySelector("#content");

    if(page === "educations"){
        content.innerHTML = `
        <h2>Educations</h2>
        <p>Your university or courses.</p>
        `;
    }

    if(page === "certificates"){
        content.innerHTML = `
        <h2>Certificates</h2>
        <p>CS50 Web Programming</p>
        `;
    }

    if(page === "social"){
        content.innerHTML = `
        <h2>Social Media</h2>
        <p>GitHub, LinkedIn, etc.</p>
        `;
    }

    if(page === "cvs"){
        content.innerHTML = `
        <h2>CVs</h2>
        <p>Download different CV versions.</p>
        `;
    }

    if(page === "tests"){
        content.innerHTML = `
        <h2>Test Scores</h2>
        <p>IELTS, TOEFL, etc.</p>
        `;
    }

    if(page === "experience"){
        content.innerHTML = `
        <h2>Experience</h2>
        <p>Your work experience.</p>
        `;
    }

    if(page === "gov"){
        content.innerHTML = `
        <h2>Government Documents</h2>
        <p>Any official documents.</p>
        `;
    }

}
