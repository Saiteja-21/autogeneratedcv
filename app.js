const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
const name = document.getElementById("fname");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const github=document.getElementById("github");
const linkedin=document.getElementById("linkedin");
const college=document.getElementById("college");
const degree=document.getElementById("degree");
const startingyear=document.getElementById("startingyear");
const passingyear=document.getElementById("passingyear");
const cgpa=document.getElementById("cgpa");
const skills=document.getElementById("skills");
const project=document.getElementById("project");
const p_description=document.getElementById("p_description");
const link=document.getElementById("link");
const Designation=document.getElementById("Designation");
const company=document.getElementById("company");
const Duration=document.getElementById("Duration");
const e_description=document.getElementById("e_description");



// import all the fields from the form.
// eg.
// const name = document.getElementById("name");

function handleSubmit(e) {
  e.preventDefault();
  const name_resume = document.getElementById("name_resume");
  name_resume.innerHTML = name.value;
  document.getElementById("fname").value="";
  document.getElementById("email_resume").innerHTML=email.value;
  document.getElementById("email").value="";
  const phone_resume = document.getElementById("phone_resume");
  phone_resume.textContent="| ";
  phone_resume.textContent+=phone.value;
  document.getElementById("phone").value="";
  const github_resume=document.getElementById("github_resume");
  github_resume.textContent="| ";
  github_resume.textContent+=github.value;
  document.getElementById("github").value="";
  const resume_resume=document.getElementById("linkedin_resume");
  resume_resume.textContent="| ";
  resume_resume.textContent+=linkedin.value;
  document.getElementById("linkedin").value="";
  document.getElementById("college_name").innerHTML=college.value;
  document.getElementById("college").value="";
  document.getElementById("degree_resume").innerHTML=degree.value;
  document.getElementById("degree").value="";
  document.getElementById("startingyear_resume").innerHTML=startingyear.value;
  document.getElementById("startingyear").value="";
  const passingyear_resume = document.getElementById("passingyear_resume");
  passingyear_resume.textContent="- ";
  passingyear_resume.textContent+=passingyear.value;
  document.getElementById("passingyear").value="";
  const cgpa_resume=document.getElementById("cgpa_resume");
  cgpa_resume.textContent="CGPA:"
  cgpa_resume.textContent+=cgpa.value;
  document.getElementById("cgpa").value="";
  document.getElementById("skills_resume").innerHTML=skills.value;
  document.getElementById("skills").value="";
  document.getElementById("project_resume").innerHTML=project.value;
  document.getElementById("project").value="";
  document.getElementById("projectdescription_resume").innerHTML=p_description.value;
  document.getElementById("p_description").value="";
  const link_resume=document.getElementById("link_resume");
  link_resume.textContent="Link-";
  link_resume.textContent+=link.value;
  document.getElementById("link").value="";
  document.getElementById("designation_resume").innerHTML=Designation.value;
  document.getElementById("Designation").value="";
  document.getElementById("company_resume").innerHTML=company.value;
  document.getElementById("company").value="";
  document.getElementById("duration_resume").innerHTML=Duration.value;
  document.getElementById("Duration").value="";
  document.getElementById("experiencedescription_resume").innerHTML=e_description.value;
  document.getElementById("e_description").value="";

  




  
  

  //   here get the values from the form and set it to the resume
  // eg.
  //   const name_resume = document.getElementById("name_resume");
  //   name_resume.innerHTML = name.value;
  //   similarly for all the other fields
}

function handleLeft() {
  const left = document.querySelector(".left");
  left.style.display="none";
  const right = document.querySelector(".right");
  right.style.width="1300px";
  const print = document.querySelector(".print");
  print.style.display="block";
  
  
  // write more codes here
}
function handlePrint() {
  const right = document.querySelector(".right");
  right.style.width="";
  const left = document.querySelector(".left");
  left.style.display="block";
  const print = document.querySelector(".print");
  print.style.display="none";
  // write more codes here
}
