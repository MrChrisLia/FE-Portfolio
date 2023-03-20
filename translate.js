const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const navbarBrand = document.querySelector('.navbar-brand');

const skillsLink = document.querySelector('#skills-link');
const experienceLink = document.querySelector('#experience-link');
const certificationsLink = document.querySelector('#certifications-link');
const educationLink = document.querySelector('#education-link');
const contactLink = document.querySelector('#contact-link');

const myName = document.querySelector('#myName');
const myRole = document.querySelector('#myRole');
const description = document.querySelector('#description');

const skills = document.querySelector('#skills');
const pentest = document.querySelector('#pentest');
const webfirewalls = document.querySelector('#webfirewalls');
const vulnscanners = document.querySelector('#vulnscanners');

const experience = document.querySelector('#experience');

const certifications = document.querySelector('#certifications');

const education = document.querySelector('#education');

const contact = document.querySelector('#contact');

const h7button = document.querySelector('#h7Button');
const luantaaButton = document.querySelector('#luantaButton');
const hesssButton = document.querySelector('#hessButton');

toggleSwitch.addEventListener('change', function() {
    const label = document.querySelector('.toggle-switch-label');
    if (this.checked) {
      label.textContent = '中文';
      navbarBrand.textContent = '我的履歷';
      skillsLink.textContent = '技能';
      experienceLink.textContent = '經驗';
      certificationsLink.textContent = '證書';
      educationLink.textContent = '教育';
      contactLink.textContent = '聯絡';
      myName.textContent = '我是Chris,';
      myRole.textContent = '資安工程師。';
      description.textContent = '作為一位資深的攻擊性安全專家，我具備深入了解網路犯罪分子所使用的最新攻擊技術和工具的能力。我擅長進行道德駭客、滲透測試和漏洞評估，以識別和利用計算機系統和網絡中的弱點。';
      skills.textContent = '技能';
      pentest.textContent = '滲透測試';
      webfirewalls.textContent = '網站應用程式防火牆';
      vulnscanners.textContent = '弱點掃描';
      experience.textContent = '經驗';
      certifications.textContent = '證書';
      education.textContent = '教育';
      contact.textContent = '聯絡';
      h7Button.textContent = '了解一下';
      luantaaButton.textContent = '了解一下';
      hesssButton.textContent = '了解一下';
    } else {
      label.textContent = 'EN';
      navbarBrand.textContent = 'My Portfolio';
      skillsLink.textContent = 'Skills';
      experienceLink.textContent = 'Experience';
      certificationsLink.textContent = 'Certifications';
      educationLink.textContent = 'Education';
      contactLink.textContent = 'Contact';
      myName.textContent = "I'm Chris,";
      myRole.textContent = 'a Security Engineer';
      description.textContent = 'As an experienced offensive security professional, I possess a deep understanding of the latest attack techniques and tools used by cybercriminals. I am skilled in performing ethical hacking, penetration testing, and vulnerability assessments to identify and exploit weaknesses in computer systems and networks.'
      skills.textContent = 'Skills';
      pentest.textContent = 'Penetration Testing';
      webfirewalls.textContent = 'Web Application Firewalls';
      vulnscanners.textContent = 'Vulnerability Scanners';
      experience.textContent = 'Experience';
      certifications.textContent = 'Certifications';
      education.textContent = 'Education';
      contact.textContent = "Let's Link Up";
      h7Button.textContent = "Learn About My Role";
      luantaaButton.textContent = "Learn About My Role";
      hesssButton.textContent = 'Learn About My Role';
    }
  });