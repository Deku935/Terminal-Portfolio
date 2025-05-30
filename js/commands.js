// COMMANDS

const defaultBanner = [
'<span class="color2">It\'s a terminal based portfolio.  (It\'s not real terminal just a website.) © 2025 [Version 1.0.2] </span><br>',
'                                       _        _           _<br>',
'               __                     / \\   ___| |__ (_)___| |__<br>',
'    _________ |==|                   / _ \\ / __| \'_ \\| / __| \'_ \\<br>',
'    ||     || |= |                  / ___ \\\\__ \\ | | | \\__ \\ | | |<br>',
' _  ||     || |^*| _               /_/__ \\_\\___/_| |_|_|___/_| |_|        _    _<br>',
'|=| o=======o |__||=|              |  _ \\  ___  ___| |__  _ __ ___  _   _| | _| |__ <br>',
'|_|  __|_|__  \\   |_|              | | | |/ _ \\/ __| \'_ \\| \'_ ` _ \\| | | | |/ / \'_ \\ <br>',
'    [:::::::] ()                   | |_| |  __/\\__ \\ | | | | | | | | |_| |   <| | | |<br>',
'Software Engineer                  |____/ \\___||___/_| |_|_| |_| |_|\\__,_|_|\\_\\_| |_|<br>',
'<br>',
'<span class="color1">To see a list of available commands, type <b>\'help\'</b>.  </span><br>',
'<br>'
];

const banner = [
    '                                       _        _           _<br>',
    '               __                     / \\   ___| |__ (_)___| |__<br>',
    '    _________ |==|                   / _ \\ / __| \'_ \\| / __| \'_ \\<br>',
    '    ||     || |= |                  / ___ \\\\__ \\ | | | \\__ \\ | | |<br>',
    ' _  ||     || |^*| _               /_/__ \\_\\___/_| |_|_|___/_| |_|        _    _<br>',
    '|=| o=======o |__||=|              |  _ \\  ___  ___| |__  _ __ ___  _   _| | _| |__ <br>',
    '|_|  __|_|__  \\   |_|              | | | |/ _ \\/ __| \'_ \\| \'_ ` _ \\| | | | |/ / \'_ \\ <br>',
    '    [:::::::] ()                   | |_| |  __/\\__ \\ | | | | | | | | |_| |   <| | | |<br>',
    'Software Developer                 |____/ \\___||___/_| |_|_| |_| |_|\\__,_|_|\\_\\_| |_|<br>',
    '<br>',
];

const help = [
    '<br>',
    '<span class="color1">about          </span>',
    '<span class="color4">Displays information about the developer.</span><br>',
    '<span class="color1">banner         </span>',
    '<span class="color4">Displays the terminal banner.</span><br>',
    '<span class="color1">clear          </span>',
    '<span class="color4">Clears the terminal screen.</span><br>',
    '<span class="color1">contact        </span>',
    '<span class="color4">Redirects to gmail.</span><br>',
    '<span class="color1">date           </span>',
    '<span class="color4">Displays the current date and time.</span><br>',
    '<span class="color1">help           </span>',
    '<span class="color4">Lists all available commands and their descriptions.</span><br>',
    '<span class="color1">info           </span>',
    '<span class="color4">Provides information about the website.</span><br>',
    '<span class="color1">joke           </span>',
    '<span class="color4">Generates a random joke.</span><br>',
    '<span class="color1">projects       </span>',
    '<span class="color4">Lists the projects.</span><br>',
    '<span class="color1">version        </span>',
    '<span class="color4">Display version of the website.</span><br>',
    '<br>'
];


const date = [
    ' (DD-MM-YYYY, HH:MM:SS) <br>',
    '<br>'
];

const blankEntry = [
    '<br>'
];


const defaultCommand = [
    '\"',
    '<span class="color4"> is not recognized as an internal or external command, operable program or batch file.<span><br>',
    '<br>'
];

const version = [
    '[Version 1.0.1]<br>',
    '<br>'
];

const info = [
    '<br>',
    '<span class="color1">Website Information:<span><br>',
    '--------------------<br>',
    '© 2025 [Version 1.0.2] <br>',
    'This terminal-based website is crafted purely using HTML, CSS, and JavaScript, ensuring a lightweight user experience.<br>',
    '<span class="color5">-> HTML ######______________30% <span><br>',
    '<span class="color5">-> CSS  ######______________30% <span><br>',
    '<span class="color5">-> JS   ########____________40% <span><br><br>',
    '<span class="color1">### Inspiration:<span><br>',
    'The concept and design are inspired by Forest Knight, Youtube:',
    '<span class="color5"> https://www.youtube.com/fknight/<span><br><br>',
    '<span class="color1">### Development:<span><br>',
    'This project was developed with the assistance of ChatGPT.<br><br>',
    '<span class="color1">### Additional Information:<span><br>',
    'Mimics a real terminal environment, allowing users to execute various commands.<br>',
    'This website serves as a demonstration of creative web development techniques and offers an engaging way to present content.<br>',
    'Plans for additional commands and features are in the pipeline to further improve the user experience.<br>',
    '<br>',
    '<span class="color1">Thank you for visiting and exploring this unique terminal-based website. We hope you enjoy your experience!<span><br>',
    '<br>'
];

const about = [
    '<br>',
    '<span class="color2">Ashish Deshmukh, Software Engineer.<span><br>',
    '-------------------------------<br>',
    'Hi, I\'m Ashish, a dedicated Software Engineer with a Bachelor\'s degree in Engineering in the field of Computer Science.<br>',
    'Detail-oriented Software Professional with 1.8 years of experience as a Java Developer.<br>',
    'Recent experience as a Manual QA Tester in the gaming industry.<br>',
    'Skilled in backend development, API creation, and manual testing methodologies.<br>',
    'Currently upskilling in automation testing with Java and Selenium.<br>',
    'To transition into a Software QA role that leverages both development and testing expertise. <br><br>',
    '<span class="color1">### Skills and Expertise:<span><br>',
    'Backend/Frameworks:<br>',
    '<span class="color5">-> Java (8), Spring Boot, REST Api, JPA, Spring Security, Selenium.<span><br>',
    'Frontend/Frameworks:<br>',
    '<span class="color5">-> HTML, CSS, JavaScript, TypeScript, Angular.<span><br>',
    'Database:<br>',
    '<span class="color5">-> SQL, MySQL.<span><br>',
    'Version Control:<br>',
    '<span class="color5">-> Git, Perforce.<span><br>',
    'Other Skills/Tools:<br>',
    '<span class="color5">-> JSON, XML, Unix, Jira, Jenkins, Eclipse, VSCode, Agile (Scrum), GitHub.<span><br>',
    '<span class="color5">-> Postman, SoapUI, MantisBT, TestRail, Azure DevOps, Confluence, Jira.<span><br>',
    'Familier Tech:<br>',
    '<span class="color5">-> C, C++, C#, Python.<span><br><br>',
    '<span class="color1">### Personal Interests:<span><br>',
    'Outside of work, I enjoy exploring new technologies, trying out new gen AI tools.<br>',
    'Playing video games, creating plugins, drawing digital art. (Pixel art)<br><br>',
    '<span class="color1">### Contact Information:<span><br>',
    'Feel free to reach out to me via email \'',
    '<span class="color2">ash.contact.dev@gmail.com<span>',
    '\'. (Use \'',
    '<span class="color3">contact<span>',
    '\' command)<br><br>',
    '<span class="color1">### Professional Goals:<span><br>',
    'I see myself as a QA Automation Engineer or SDET.<br>',
    'Contributing to the development of automated testing frameworks.<br>',
    'I also hope to be involved in shaping testing strategies and improving overall software quality.<br>',
    'Contributing to the growth and success of my team and organization.<br>',
    '<br>'
];

const contact = [
    'Redirecting to gmail',
    '.',
    '.',
    '.<br>',
    '<br>'
];

const joke = [
    'Generating Joke',
    '.',
    '.',
    '.'
];

const projects = [
    '<br>',
    '<span class="color1">Clear Skies: Open-Source Research Game (University of Zurich: Department of Psychology):<span><br>',
    'Participated as a QA Tester for Clear Skies, a research-based open-source game.<br>',
    'Conducted functional testing to ensure core game mechanics worked.<br>',
    'Performed regression and usability testing to validate bug fixes and improve user interaction.<br>',
    'Reported bugs clearly with steps to reproduce and collaborated with developers to track fixes.<br>',
    'Ensured that the game aligned with research goals and delivered a smooth user experience.<br>',
    '(Tech/Skill Used:',
    '<span class="color5"> GIT, GitHub, Python, Bug Catching, Reporting<span>',
    ').<br><br>',
    '<span class="color1">Whimside Steam Game:<span><br>',
    'Contributed to QA efforts for Whimside, an indie exploration game mechanics.<br>',
    'Performed manual testing on new builds to identify visual, gameplay, and functional bugs.<br>',
    'Verified performance consistency and provided feedback on UI/UX improvements.<br>',
    'Worked closely with developer, offering suggestions and maintaining strong communication.<br>',
    '(Tech/Skill Used:',
    '<span class="color5"> Bug Catching, Reporting, Game mechanics<span>',
    ').<br><br>',
    '<span class="color1">RPG Indie Game (Long Term):<span><br>',
    'Developing an engaging RPG (Role-Playing Game) using Java and AWT for the graphical user interface. <br>',
    'Utilized object-oriented programming (OOP) principles and Java\'s AWT library to create a smooth interface for players. <br>',
    'Focused on creating immersive game mechanics, including inventory systems, combat scenarios, and a level-up system. <br>',
    '(Tech/Skill Used:',
    '<span class="color5"> Java, AWT, OOP, Multi Threading<span>',
    ').<br><br>',
    '<span class="color1">Music on Emotions:<span><br>',
    'A music player which detects emotions by using facial expression of user and <br>',
    'recommends the songs based on their mood.<br>', 
    '(Tech/Skill Used:',
    '<span class="color5"> Python, CNN, FER 2023 Dataset, HTML, CSS, Django, PostgreSQL<span>',
    ').<br><br>',
    '<span class="color1">Portal for Photography:<span><br>',
    'An application designed for photographers to showcase their skills and help people to <br>',
    'find their ideal photographer for their needs.<br>',
    '(Tech/Skill Used:',
    '<span class="color5"> Java, Spring Boot, HTML, CSS, MySQL<span>',
    ').<br><br>',
    '<span class="color1">Terminal Portfolio:<span><br>',
    'Unique and interactive portfolio showcases my skills and projects in a terminal-like interface, <br>',
    'providing a nostalgic and engaging experience for visitors.<br>',
    '(Tech/Skill Used:',
    '<span class="color5"> HTML, CSS, JavaScript<span>',
    ').<br><br>',
    '<br>'
];


// COMMAND UTILIITIES
