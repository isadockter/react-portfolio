import proj1 from '../assets/p1.png';
import proj2 from '../assets/p2.png';
import proj3 from '../assets/p4.png';
import mproj1 from '../assets/mp1.png';
import mproj2 from '../assets/mp2.png';
import mproj3 from '../assets/mp3.png';

//------------------------------------------------
// NAVITEMS - label, href
//------------------------------------------------
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" }
];

//------------------------------------------------
// ICONS - name, icons
//------------------------------------------------
export const icons = [
  {
    name: 'linkedin',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="#2563eb" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
      <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
    </svg>,
    url: 'https://www.linkedin.com/in/isadockter/'

  },
  {
    name: 'git',
    icon: <svg id="git" xmlns="http://www.w3.org/2000/svg" fill="#2563eb" x="0px" y="0px" width="50" height="50" viewBox="0 0 64 64">
      <path d="M32,10c12.15,0,22,9.85,22,22c0,9.768-6.369,18.045-15.179,20.916c0.002-0.008,0.006-0.021,0.006-0.021	s-1.485-0.696-1.453-1.938c0.035-1.367,0-4.556,0-5.727c0-2.01-1.272-3.434-1.272-3.434s9.977,0.112,9.977-10.533	c0-4.107-2.147-6.245-2.147-6.245s1.128-4.385-0.39-6.245c-1.701-0.184-4.749,1.626-6.05,2.472c0,0-2.062-0.846-5.492-0.846	c-3.43,0-5.492,0.846-5.492,0.846c-1.301-0.846-4.348-2.656-6.05-2.472c-1.518,1.86-0.39,6.245-0.39,6.245s-2.147,2.137-2.147,6.245	c0,10.645,9.977,10.533,9.977,10.533s-1.005,1.136-1.225,2.806c-0.696,0.236-1.721,0.528-2.549,0.528	c-2.165,0-3.812-2.105-4.416-3.078c-0.595-0.96-1.815-1.766-2.953-1.766c-0.749,0-1.115,0.375-1.115,0.803s1.05,0.727,1.743,1.521	c1.461,1.674,1.435,5.438,6.641,5.438c0.565,0,1.719-0.139,2.588-0.256c-0.005,1.185-0.007,2.436,0.012,3.167	c0.031,1.242-1.453,1.938-1.453,1.938s0.004,0.012,0.006,0.021C16.369,50.045,10,41.768,10,32C10,19.85,19.85,10,32,10z"></path>
    </svg>,
    url: 'https://github.com/isadockter/'

  },
]

//------------------------------------------------
// SKILLS - name, icons
//------------------------------------------------
export const skills = [
  {
    name: 'html',
    icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 48 48">
      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
    </svg>
  },
  {
    name: 'css',
    icon: <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 48 48">
      <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
    </svg>
  },
  {
    name: 'tailwind',
    icon: <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 48 48">
      <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
    </svg>
  },
  {
    name: 'bootstrap',
    icon: <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 48 48">
      <path fill="#6c19ff" d="M6.391,10.671c-0.085-2.448,1.822-4.706,4.401-4.706h26.42c2.578,0,4.486,2.258,4.401,4.706	c-0.082,2.352,0.024,5.398,0.791,7.882c0.769,2.492,2.066,4.067,4.19,4.269v2.295c-2.124,0.202-3.421,1.777-4.19,4.269	c-0.767,2.484-0.873,5.53-0.791,7.882c0.085,2.448-1.822,4.706-4.401,4.706h-26.42c-2.578,0-4.486-2.258-4.4-4.706	c0.082-2.352-0.025-5.398-0.791-7.882c-0.769-2.492-2.069-4.067-4.194-4.269v-2.295c2.124-0.202,3.425-1.777,4.194-4.269	C6.367,16.07,6.473,13.023,6.391,10.671z"></path><linearGradient id="Is-EGaxKcc0Cic9QMqyzGa_EzPCiQUqWWEa_gr1" x1="17.846" x2="27.078" y1="-147.541" y2="-163.153" gradientTransform="matrix(1 0 0 -1 0 -132)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#f1e5fc"></stop></linearGradient><path fill="url(#Is-EGaxKcc0Cic9QMqyzGa_EzPCiQUqWWEa_gr1)" d="M25.042,34.016c4.366,0,6.997-2.138,6.997-5.664c0-2.665-1.877-4.595-4.665-4.9v-0.111	c2.048-0.333,3.655-2.235,3.655-4.359c0-3.026-2.389-4.997-6.03-4.997h-8.192v20.031H25.042z M19.994,16.525h4.238	c2.304,0,3.612,1.027,3.612,2.887c0,1.985-1.522,3.096-4.281,3.096h-3.57V16.525z M19.994,31.475v-6.594h4.21	c3.015,0,4.579,1.11,4.579,3.276c0,2.165-1.522,3.318-4.394,3.318H19.994z"></path>
    </svg>
  },
  {
    name: 'javascript',
    icon: <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 48 48">
      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
    </svg>
  },
  {
    name: 'react',
    icon: <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 48 48">
      <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
    </svg>
  },
  {
    name: 'python',
    icon: <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 48 48">
      <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
    </svg>
  },
  {
    name: 'php',
    icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 64 64">
      <path fill="#b5c4e0" d="M32 14A31 18.174 0 1 0 32 50.348A31 18.174 0 1 0 32 14Z"></path><path fill="#ced9ed" d="M32,14C14.879,14,1,22.137,1,32.174s13.879,18.174,31,18.174s31-8.137,31-18.174S49.121,14,32,14z M32,45.348c-15.322,0-26-6.942-26-13.174C6,25.943,16.678,19,32,19s26,6.943,26,13.174C58,38.405,47.322,45.348,32,45.348z"></path><path fill="#8d6c9e" d="M42.435 26.435l-2.733 14.826h3.566l.71-4.043h2.219c4.645 0 7.172-1.076 8.117-5.062.813-3.425-1.264-5.72-4.69-5.72H42.435zM46.786 34.522h-2.305l1.018-5.391h2.778c2.302 0 2.786 1.038 2.666 2.193C50.634 34.297 48.78 34.522 46.786 34.522zM14.13 26.435l-2.733 14.826h3.566l.71-4.043h2.219c4.645 0 7.172-1.076 8.117-5.062.813-3.425-1.264-5.72-4.69-5.72H14.13zM18.481 34.522h-2.305l1.018-5.391h2.778c2.302 0 2.786 1.038 2.666 2.193C22.329 34.297 20.476 34.522 18.481 34.522zM39.311 27.415c-.762-.698-2.104-.98-4.105-.98h-3.153l1.124-5.391H29.64l-3.379 16.174h3.538l1.706-8.087h2.828c.902 0 1.497.151 1.775.449.276.301.337.867.177 1.686l-1.291 5.952h3.593l1.399-6.44C40.286 29.234 40.059 28.102 39.311 27.415z"></path><path fill="#8d6c9f" d="M32 51.348c-17.645 0-32-8.602-32-19.174S14.355 13 32 13c17.645 0 32 8.602 32 19.174S49.645 51.348 32 51.348zM32 15C15.458 15 2 22.704 2 32.174s13.458 17.174 30 17.174 30-7.704 30-17.174S48.542 15 32 15zM58.693 50.667c-.33 0-.653-.163-.845-.463l-1.074-1.687c-.297-.466-.159-1.084.307-1.381.464-.296 1.083-.16 1.381.307l1.074 1.687c.297.466.159 1.084-.307 1.381C59.063 50.616 58.877 50.667 58.693 50.667zM54.446 53.004c-.375 0-.734-.212-.905-.573l-.854-1.809c-.235-.499-.021-1.096.478-1.331.501-.237 1.095-.021 1.331.478l.854 1.809c.235.499.021 1.096-.478 1.331C54.734 52.974 54.589 53.004 54.446 53.004zM49.969 54.817c-.414 0-.802-.26-.945-.673l-.654-1.891c-.181-.522.097-1.092.618-1.272s1.091.097 1.272.618l.654 1.891c.181.522-.097 1.092-.618 1.272C50.188 54.8 50.077 54.817 49.969 54.817zM45.344 56.171c-.451 0-.86-.308-.971-.766l-.47-1.944c-.13-.536.2-1.077.737-1.206.529-.131 1.076.2 1.206.737l.47 1.944c.13.536-.2 1.077-.737 1.206C45.501 56.162 45.422 56.171 45.344 56.171zM40.621 57.093c-.487 0-.914-.356-.988-.853l-.296-1.979c-.081-.546.295-1.055.842-1.137.552-.074 1.056.296 1.137.842l.296 1.979c.081.546-.295 1.055-.842 1.137C40.72 57.089 40.67 57.093 40.621 57.093zM35.841 57.596c-.522 0-.963-.406-.997-.936l-.129-1.996c-.035-.551.383-1.026.934-1.063.544-.027 1.027.383 1.063.934l.129 1.996c.035.551-.383 1.026-.934 1.063C35.885 57.595 35.862 57.596 35.841 57.596z"></path><g><path fill="#8d6c9f" d="M21.862,21.161c-0.448,0-0.856-0.304-0.97-0.759c-0.133-0.536,0.194-1.079,0.729-1.212 c1.345-0.334,2.766-0.618,4.224-0.845c0.547-0.084,1.057,0.289,1.142,0.834c0.085,0.546-0.289,1.057-0.834,1.142 c-1.4,0.218-2.762,0.49-4.049,0.81C22.023,21.152,21.942,21.161,21.862,21.161z"></path></g><g><path fill="#8d6c9f" d="M6.999,29.997c-0.163,0-0.328-0.04-0.481-0.124c-0.481-0.266-0.659-0.869-0.396-1.352 c0.109-0.2,2.767-4.925,11.424-8.091c0.516-0.191,1.092,0.077,1.282,0.596c0.19,0.519-0.077,1.093-0.596,1.282 c-7.884,2.883-10.334,7.133-10.357,7.175C7.692,29.812,7.35,29.997,6.999,29.997z"></path></g>
    </svg>
  },
]

//------------------------------------------------
// PROJECTS - title, category, description, technologies, projectImg, codeLink, demoLink, otherLink
//------------------------------------------------
export const projects = [
  {
    title: "HealthyBytes",
    category: "FullStack",
    description: "Senior capstone project where we are building an information system from scratch, this requires effective project management by implementing SCRUM methodologies. My group chose to look into the problem of college students health being impacted by busy schedules, strict budgets, limited nutritional education, etc.After spending the 1st semester conducting various research methods and preparing for the build process of our system.",
    technologies: ["HTML", "Bootstrap", "PHP", "MySQL"],
    projectImg: proj1,
    codeLink: "https://github.iu.edu/info-capstone-2024/team-36",
    demoLink: "https://cgi.luddy.indiana.edu/~team36/index.php",
    otherLink: "https://zion.luddy.indiana.edu/info-capstone-2024/healthy-bytes",

  },
  {
    title: "Outdoor Adventures",
    category: "FullStack",
    description: "A trip management application that enables users to seamlessly add, edit, and delete trips, as well as manage members. I gained a solid foundation of web development with this project, especially with routing and working with frameworks",
    technologies: ["HTML", "Bootstrap", "Python", "Flask", "MySQL"],
    projectImg: proj2,
    codeLink: "https://github.iu.edu/idockter/I211_project",
    demoLink: "https://cgi.luddy.indiana.edu/~idockter/I211_project.cgi/",
  },
  {
    title: "EcoU",
    category: "UI/UX",
    description: "EcoU is designed to address the critical issue of recycling accessibility and education. We simply recycling by providing city regulations, comphrensive recycling information, and a map feature showcasing nearby recycling centers and bins.",
    technologies: ["Figma", "Miro", "DataScraper"],
    projectImg: proj3,
    otherLink: "https://zion.luddy.indiana.edu/info-i370-fa23/Sathvica-Group%2004",
  },
];

//------------------------------------------------
// MINI PROJECTS - title, technologies, projectImg, demoLink
//------------------------------------------------
export const minis = [
  {
    title: "Writing Motivation",
    technologies: ["HTML", "CSS", "JavaScript", "APIs"],
    projectImg: mproj1,
    demoLink: "https://isadockter.github.io/writing-motivation/"
  },
  {
    title: "Interact.net",
    technologies: ["HTML", "CSS", "JavaScript"],
    projectImg: mproj2,
    demoLink: "https://isadockter.github.io/final-art-project/"
  },
  {
    title: "Random Number Game",
    technologies: ["HTML", "CSS", "JavaScript"],
    projectImg: mproj3,
    demoLink: "https://isadockter.github.io/random-num/"
  }
];