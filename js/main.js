const mainContainer = document.getElementById("mainContainer");
const generatedContainer = document.getElementById("generatedContainer");
// Global variables to store joke setup and punchline
let jokeSetup = '';
let jokePunchline = '';

// Function to parse array to HTML and display rendering animation 
function parseToHTML(command, container){
    // Process each element of the array
    command.forEach((element, index) => {
        let delay = 50;
        document.createAttribute("style");
        

        if(element.charAt(0) === "<"){
            const indexOfSymbol = element.indexOf('>');
            const hasSpaceBefore = element.substring(0, indexOfSymbol).includes(' ');
            
            if(hasSpaceBefore){
                let nonChangedElementpart = element.substring(0,indexOfSymbol+1);
                element = element.substring(element.indexOf('>')+1, element.length); 
                let changedPart = element.replace(/ /g, "&nbsp;");
                
                setTimeout(() => {
                    container.innerHTML += nonChangedElementpart+changedPart;
                }, index * delay);
            }else{
                setTimeout(() => {
                    container.innerHTML += element.replace(/ /g, "&nbsp;");
                }, index * delay);
            }
        }else{
            setTimeout(() => {
                container.innerHTML += element.replace(/ /g, "&nbsp;");
            }, index * delay);
        }
        scrollToBottomForTwoSeconds();
    });    
}

// Calling default banner.
parseToHTML(defaultBanner,mainContainer);


// Method to generate content based on input.
function addCommand(command) {
    generatedContainer.innerHTML += '<span> anonymous@ad.com:~$ '+command+'</span><br>';
    switch (command) {
        case '':
            parseToHTML(blankEntry,generatedContainer);
            break;
        case 'about':
            parseToHTML(about,generatedContainer);
            break;
        case 'banner':
            parseToHTML(banner,generatedContainer);
            break;
        case 'clear':
            generatedContainer.innerHTML = '';
            break;
        case 'contact':
            parseToHTML(contact,generatedContainer);
            setTimeout(function() {
                redirectToGmail("ash.contact.dev@gmail.com");
            }, 1000);
            break;
        case 'date':
            generatedContainer.innerHTML += getTimeAndDate();
            parseToHTML(date,generatedContainer);
            break;
        case 'help':
            parseToHTML(help,generatedContainer);
            break;
        case 'info':
            parseToHTML(info,generatedContainer);
            break;
        case 'joke':
            parseToHTML(joke,generatedContainer);
            // Example usage:
            fetchAndAssignJoke().then(joke => {
                const jokeArray = [
                    '<br>',
                    jokeSetup+'<br>',
                    jokePunchline+'<br>',
                    '<br>'
                ];
                parseToHTML(jokeArray,generatedContainer);
            });
            break;
        case 'projects':
            parseToHTML(projects,generatedContainer);
            break;
        case 'version':
            parseToHTML(version,generatedContainer);
            break;
        default:
            generatedContainer.innerHTML += '\"<span class="color3">'+command+'<span>';
            parseToHTML(defaultCommand,generatedContainer);
            break;
    }
}

// Function to redirect to mail
function redirectToGmail(email) {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(url, '_blank');
}

// Function to get date and time in string format
function getTimeAndDate() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDate = `${day}-${month}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return `${formattedDate}, ${formattedTime}`;
}

// Function to scroll to the bottom of the page
function scrollToBottomForTwoSeconds() {
    const duration = 2000; // 2 seconds
    const step = 10; // Step interval in milliseconds

    let elapsed = 0;
    const intervalId = setInterval(() => {
        window.scrollBy(0, 100); // Scroll by 100 pixels
        elapsed += step;
        if (elapsed >= duration) {
            clearInterval(intervalId);
        }
    }, step);
}

// INPUT HANDLER

// Event to tigger after enter key is pressed
document.getElementById('inputArea').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleInput();
    }
    // Prevent the default action
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp') {
        event.preventDefault(); 
    }
});

function handleInput(){
    const inputArea = document.getElementById('inputArea');
    const inputValue = inputArea.value;
    console.log('Input entered: ', inputValue);
    addCommand(inputValue);
    // Clear the input field
    inputArea.value = '';
    inputArea.style.width = '10px';
}

// Input area work
document.addEventListener('DOMContentLoaded', function() {
    var inputArea = document.getElementById('inputArea');
    inputArea.focus(); // Focus input area when page loads

    // Maximum input length 100px 
    inputArea.addEventListener('input', function() {
        if (this.value.length >= 100) {
            this.blur(); // Remove focus from input field
        }
        this.style.width = '10px'; // Reset width to original to recalculate based on new content
        this.style.width = (this.scrollWidth + 2) + 'px'; // Set width based on scrollWidth
    });
});


// Joke Api 
async function fetchAndAssignJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await response.json();
        jokeSetup = joke.setup;
        jokePunchline = joke.punchline;
        return `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
        console.error('Error fetching joke:', error);
        return 'Sorry, could not fetch a joke at this time.';
    }
}







