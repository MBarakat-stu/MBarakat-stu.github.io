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
    <h2>Education</h2>

    <div class="edu-container">

        <div class="edu-card">
            <h3>High School Diploma</h3>
            <img src="sources/High school diploma.jpg" onclick="openImage(this.src)">
        </div>

        <div class="edu-card">
            <h3>Computer Science Degree</h3>
            <img src="sources/cs degree.jpg" onclick="openImage(this.src)">
        </div>

    </div>
    `;
}


    
      if(page === "certificates"){
    content.innerHTML = `
    <h2>Certificates</h2>

    <div class="edu-container">

        <div class="edu-card">
            <h3>Waterfall Model</h3>
            <img src="sources/Waterfall model certificate.jpg" onclick="openImage(this.src)">
        </div>

        <div class="edu-card">
            <h3>Cisco ITC</h3>
            <img src="sources/cisco,ITC.jpg" onclick="openImage(this.src)">
        </div>

        <div class="edu-card">
            <h3>Flutter & Dart</h3>
            <img src="sources/flutter&dart.jpg" onclick="openImage(this.src)">
        </div>

    </div>
    `;
    }

   

   if(page === "cvs"){
    content.innerHTML = `
    <h2>My CV</h2>

    <div style="margin-top:20px;">
        <a href="sources/Muhammad_Hussain_Barakat_CV.pdf" target="_blank">
            <button style="
                padding:12px 20px;
                border:none;
                border-radius:10px;
                background:#0077b5;
                color:white;
                cursor:pointer;
                font-size:16px;
            ">
                View CV
            </button>
        </a>

        <a href="sources/Muhammad_Hussain_Barakat_CV.pdf" download>
            <button style="
                padding:12px 20px;
                border:none;
                border-radius:10px;
                background:#333;
                color:white;
                cursor:pointer;
                font-size:16px;
                margin-left:10px;
            ">
                Download CV
            </button>
        </a>
    </div>

    <div style="margin-top:30px;">
        <iframe 
            src="sources/Muhammad_Hussain_Barakat_CV.pdf" 
            width="80%" 
            height="500px"
            style="border-radius:10px; box-shadow:0 5px 15px rgba(0,0,0,0.2);">
        </iframe>
    </div>
    `;
}

    if(page === "tests"){
    content.innerHTML = `
    <h2>Test Scores</h2>

    <div class="edu-container">

        <div class="edu-card">
            <h3>STEP</h3>
            <img src="sources/STEP.jpg" onclick="openImage(this.src)">
        </div>

        <div class="edu-card">
            <h3>TOEFL</h3>
            <img src="sources/STEP.jpg" onclick="openImage(this.src)">
        </div>

    </div>
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

    if(page === "social"){
    content.innerHTML = `
    <h2>Social Media</h2>

    <a href="https://www.linkedin.com/in/muhammad-barakat-2b1417307/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm4hKjcbFSxGwXy6JxA%2Ba%2BQ%3D%3D"
       target="_blank"
       class="social-link">

        <img src="sources/linkden.png" class="social-icon" alt="LinkedIn">

    </a>
    `;
}

}

function openImage(src){
    const content = document.querySelector("#content");

    content.innerHTML = `
        <div style="text-align:center;">
            <button onclick="location.reload()" style="
                margin-bottom:20px;
                padding:10px 15px;
                border:none;
                border-radius:8px;
                cursor:pointer;
            ">
                Back
            </button>

            <img src="${src}" style="
                max-width:90%;
                border-radius:10px;
                box-shadow:0 10px 25px rgba(0,0,0,0.3);
            ">
        </div>
    `;
}
