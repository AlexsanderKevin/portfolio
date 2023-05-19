import { ReactComponent as JavascriptSVG } from '../../../../assets/svg/icons/svg-javascript.svg'
import { ReactComponent as NodeSVG } from '../../../../assets/svg/icons/svg-node.svg'
import { ReactComponent as HtmlSVG } from '../../../../assets/svg/icons/svg-html.svg'
import { ReactComponent as CssSVG } from '../../../../assets/svg/icons/svg-css.svg'
import { ReactComponent as GitSVG } from '../../../../assets/svg/icons/svg-git.svg'
import { ReactComponent as ReactSVG } from '../../../../assets/svg/icons/svg-react.svg'
import { ReactComponent as JquerySVG } from '../../../../assets/svg/icons/svg-jquery.svg'
import { ReactComponent as BootstrapSVG } from '../../../../assets/svg/icons/svg-bootstrap.svg'
import { ReactComponent as SassSVG } from '../../../../assets/svg/icons/svg-sass.svg'
import { ReactComponent as FigmaSVG } from '../../../../assets/svg/icons/svg-figma.svg'

const skills = {
  javascript: {
    name: 'JavaScript',
    icon: <JavascriptSVG/>,
    description: "JavaScript is a versatile programming language used for web development. It enables dynamic interactions, enhances user experience, and adds functionality to websites. With its wide adoption and extensive libraries, JavaScript empowers developers to create interactive and responsive web applications efficiently.",
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
  },
  html: {
    name: 'HTML',
    icon: <HtmlSVG/>,
    description: "HTML is the core language for web development. It structures and formats web content, including headings, paragraphs, images, links, and more. It works with CSS for styling and interactivity. HTML is vital for creating modern, accessible websites.",
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
  },
  css: {
    name: 'CSS',
    icon: <CssSVG/>,
    description: "CSS, or Cascading Style Sheets, controls the visual appearance of web pages. It defines colors, fonts, layouts, and design aspects. With CSS, you achieve consistent styling across pages and responsive design for various devices. It's essential for creating appealing and user-friendly websites.",
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
  },
  node: {
    name: 'Node JS',
    icon: <NodeSVG/>,
    description: "Node.js: runtime for running JavaScript outside the browser. Enables scalable server-side apps with event-driven, non-blocking I/O. Handles concurrent connections, real-time apps. Extensive library ecosystem simplifies dev. Ideal for APIs, microservices, full-stack apps. Robust and scalable server-side solutions.",
    url: 'https://nodejs.org/en',
  },
  git: {
    name: 'GIT',
    icon: <GitSVG/>,
    description: "Git is a crucial version control system for software development. It enables efficient collaboration, tracks changes, and manages code repositories. With distributed architecture and branching capabilities, Git simplifies teamwork and streamlines code merging, making it an essential tool for organized and effective development workflows.",
    url: 'https://git-scm.com/',
  },
  figma: {
    name: 'Figma',
    icon: <FigmaSVG/>,
    description: "Figma is a collaborative design and prototyping tool for UX/UI design. It enables real-time collaboration, version control, and interactive prototyping. With its intuitive interface, Figma empowers designers to create and iterate on designs efficiently, making it essential for the design process.",
    url: 'https://www.figma.com/',
  },
  react: {
    name: 'React JS',
    icon: <ReactSVG/>,
    description: "React.js is a JavaScript library for building UI components and managing state. Its virtual DOM and declarative syntax enhance performance and simplify web development. With React.js, developers can create interactive and responsive applications efficiently.",
    url: 'https://react.dev/',
  },
  sass: {
    name: 'SASS',
    icon: <SassSVG/>,
    description: "Sass is a powerful CSS preprocessor that enhances stylesheet development. It introduces variables, nesting, and mixins, making stylesheets modular and maintainable. Sass saves time and effort in front-end development, enabling cleaner and more efficient stylesheets.",
    url: 'https://sass-lang.com/',
  },
  bootstrap: {
    name: 'Bootstrap',
    icon: <BootstrapSVG/>,
    description: "Bootstrap simplifies web development with pre-designed CSS and JavaScript components. Its responsive grid system and extensive library enable developers to create mobile-friendly websites quickly. Bootstrap streamlines the development process, ensuring professional and modern web interfaces.",
    url: 'https://getbootstrap.com/',
  },
  jquery: {
    name: 'Jquery',
    icon: <JquerySVG/>,
    description: "jQuery is a lightweight JavaScript library for HTML manipulation, event handling, and animation. It simplifies web development, providing a concise syntax and wide browser compatibility. With built-in functions and plugins, jQuery enables interactive and dynamic web pages with less code. It's a popular choice for front-end development, streamlining the development process.",
    url: 'https://jquery.com/',
  },
}

export default skills
