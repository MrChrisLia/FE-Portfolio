const h7Button = document.getElementById("h7Button");
const h7Element = document.getElementById("h7Text");
let isH7TextVisible = false;


const luantaButton = document.getElementById("luantaButton");
const luantaElement = document.getElementById("luantaText");
let isLuantaTextVisible = false;


const hessButton = document.getElementById("hessButton");
const hessElement = document.getElementById("hessText");
let isHessTextVisible = false;

h7Button.addEventListener("click", () => {
  if (isH7TextVisible) {
    h7Element.style.display = "none";
    isH7TextVisible = false;
  } else {
    const text = "<ul><li>☑️ Manage a Web Vulnerabilitiy Scanner and confirm potential vulnerabilities. </li><li>☑️ Manage an Web Application Firewall.</li> <li>☑️ Perform web penetration tests to to find potential vulnerabilities.</li><li>☑️ Work with the SOC team during investigations</li></ul>";
    h7Element.innerHTML = text;
    h7Element.style.display = "block";
    isH7TextVisible = true;
  }
});


luantaButton.addEventListener("click", () => {
    if (isLuantaTextVisible) {
        luantaElement.style.display = "none";
        isLuantaTextVisible = false;
    } else {
        const text = "<ul><li>☑️ Monitor server system health. </li><li>☑️ Provide tier 1 investigations on servers.</li> <li>☑️ Act as first line customer and product support.</li><li>☑️ Work in a 24/7 shift schedule.</li></ul>";
        luantaElement.innerHTML = text;
        luantaElement.style.display = "block";
        isLuantaTextVisible = true;
    }
});

hessButton.addEventListener("click", () => {
if (isHessTextVisible) {
    hessElement.style.display = "none";
    isHessTextVisible = false;
} else {
    const text = "<ul><li>☑️ Instruct students aging from 2 to 15 in English language. </li><li>☑️ Plan yearly events.</li> <li>☑️ Prepare students to take English exams for overseas school admission.</li><li>☑️ Manage Teacher-Student-Parent relations.</li></ul>";
    hessElement.innerHTML = text;
    hessElement.style.display = "block";
    isHessTextVisible = true;
}
});
