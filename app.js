
function paragraph_show1() {
    var expanded_para1 = "The introduction to HTML, or Hypertext Markup Language, serves as the foundational gateway into the realm of web development. HTML is the bedrock of web pages, providing a standardized markup system that structures content on the internet. The acronym itself encapsulates the essence of its purpose: zHypertext denotes the interconnected nature of information, where users can navigate seamlessly between documents, and Markup Language emphasizes the utilization of tags to define the structure and presentation of content.The simplicity and versatility of HTML make it accessible to beginners while offering the sophistication necessary for advanced web development.As developers embark on their HTML journey, they encounter the opening tags, such as <!DOCTYPE html >, signaling the document type, and < html >, encapsulating the entire document.These introductory elements set the stage for the intricate choreography of tags and attributes that follows, enabling the creation of visually compelling and functionally dynamic web pages.";
    var nonExpanded_Para1 = "The introduction to HTML, or Hypertext Markup Language, serves as the foundational gateway into the realm of web development. HTML is the bedrock of web pages, providing a standardized markup system that structures content on the internet.";
    if (link1.innerHTML === "See More") {
        document.getElementById("paragraph_show1").innerHTML = expanded_para1;
        document.getElementById("link1").innerHTML = "See Less";
    } else {
        document.getElementById("paragraph_show1").innerHTML = nonExpanded_Para1;
        document.getElementById("link1").innerHTML = "See More";
    }
}
function paragraph_show2() {
    var expanded_para2 = "Cascading Style Sheets, or CSS, forms an integral part of the triad that constitutes modern web development, alongside HTML and JavaScript.introduction to HTML, or Hypertext Markup Language, serves as the foundational gateway into the realm of web development.HTML is the bedrock of web pages, providing a standardized markup system that structures content on the internet. As the visual stylist of the trio, CSS introduces a layer of design and presentation to the web transition from structuring content with HTML to enhancing its visual appeal and layout.CSS operates by defining styles for HTML elements, enabling developers to control aspects like color, font, spacing, and positioning.The concept of cascading emphasizes the hierarchical nature of styles, allowing for a systematic application of rules where styles can be inherited, overridden, or combined.CSS introduces selectors that target specific HTML elements, and declarations that specify the desired styles.This separation of content(HTML) and presentation(CSS) not only promotes cleaner code but also facilitates a more efficient and flexible approach to designing responsive and aesthetically pleasing web interfaces.With the inception of CSS, developers gain the ability to transform raw HTML documents into visually captivating and user - friendly websites.";
    var nonExpanded_Para2 = "Cascading Style Sheets, or CSS, forms an integral part of the triad that constitutes modern web development, alongside HTML and JavaScript.introduction to HTML, or Hypertext Markup Language, serves as the foundational gateway into the realm of web development.HTML is the bedrock of web pages, providing a standardized markup system that structures content on the internet.";
    if (link2.innerHTML === "See More") {
        document.getElementById("paragraph_show2").innerHTML = expanded_para2;
        document.getElementById("link2").innerHTML = "See Less";
    } else {
        document.getElementById("paragraph_show2").innerHTML = nonExpanded_Para2;
        document.getElementById("link2").innerHTML = "See More";
    }
}

function paragraph_show3() {
    var expanded_para3 = "JavaScript, often abbreviated as JS, stands as the dynamic force behind interactivity and client-side functionality on the web. Its introduction marks a pivotal moment in web development, empowering developers to create dynamic, responsive, and user - friendly interfaces.JavaScript is a versatile scripting language that executes in the browser, allowing for the manipulation of HTML and CSS, and facilitating real - time updates without the need for page reloads.Introduced with the tag in HTML, JavaScript integrates seamlessly with web pages, enhancing their functionality by handling events, managing user input, and communicating with servers through AJAX.As a cornerstone of the modern web, JavaScript is instrumental in building interactive web applications, ranging from simple form validations to complex single - page applications.Its adaptability, coupled with extensive libraries and frameworks, makes JavaScript an essential tool for developers seeking to craft engaging and dynamic digital experiences. ";
    var nonExpanded_Para3 = "JavaScript, often abbreviated as JS, stands as the dynamic force behind interactivity and client-side functionality on the web."
    if (link3.innerHTML === "See More") {
        document.getElementById("paragraph_show3").innerHTML = expanded_para3;
        document.getElementById("link3").innerHTML = "See Less";
    } else {
        document.getElementById("paragraph_show3").innerHTML = nonExpanded_Para3;
        document.getElementById("link3").innerHTML = "See More";
    }
}
// HTML POPUP
function htmlDetails() {
    var htmlPopup = `<article>
    <h1>Html Quizz Details</h1>
    <p>The HTML quiz delves into the details of Hypertext Markup Language, testing participants on their knowledge of HTML elements, attributes, and document structure. Participants are challenged with questions that assess their understanding of HTML coding conventions and best practices.</p>
    <ul>
        <li>Time Limit: Ten minutes</li>
        <li>Number of Questions: Ten</li>
        <li>Question Types: Multiple Choice, True/False, Code Snippets</li>
        <li>Passing Marks: Seventy %</li>
        <li>Negative Marking: No</li>
        <li>Difficulty Level: Beginner to Intermediate</li>
        <li>Topics Covered: HTML Elements, Attributes, Document Structure, Forms, Semantic HTML, HTML five Features
        </li>
        <li>Instructions: Read each question carefully. Some questions may have multiple correct answers. Ensure
            your code snippets are accurate.</li>
        <li>Review: Participants can review and change their answers before submitting.</li>
        <li>Submission: Quiz automatically submitted after the time limit expires.</li>
        <li>Feedback: Participants receive instant feedback on their performance.</li>
    </ul>
</article>
    `;
    var hideHtmlPopup = "";
    if (htmlhide.innerHTML === "Show Details") {
        document.getElementById("popup_Html").innerHTML = htmlPopup;
        document.getElementById("htmlhide").innerHTML = "Hide Details"
    }
    else {
        document.getElementById("popup_Html").innerHTML = hideHtmlPopup;
        document.getElementById("htmlhide").innerHTML = "Show Details";
    }
}

// Css POPUP
function cssDetails() {
    var cssPopup = `<article>
    <h1>Css Quizz Details</h1>
    <p>The CSS quiz consists of Ten questions designed to assess participants' knowledge of cascading style sheets, covering topics like selectors, layout models, and responsive design, with a passing mark of Ninty %. Participants have a time limit of ten minutes to complete the quiz.</p>
    <ul>
        <li>Time Limit: Ten minutes</li>
        <li>Number of Questions: Ten</li>
        <li>Question Types: Multiple Choice, True/False, Code Evaluation</li>
        <li>Passing Marks: Ninty %</li>
        <li>Negative Marking: Yes</li>
        <li>Difficulty Level: Beginner to Intermediate</li>
        <li>Topics Covered: Selectors, Box Model, Flexbox, Grid, CSS Transitions, Animations, Responsive Design
        </li>
        <li>Instructions: Read each question carefully. Some questions may have multiple correct answers. Ensure
            your code snippets are accurate.</li>
        <li>Review: Participants can review and change their answers before submitting.</li>
        <li>Submission: Quiz automatically submitted after the time limit expires.</li>
        <li>Feedback: Participants receive instant feedback on their performance.</li>
    </ul>
</article>
    `;
    var hidecssPopup = "";
    if (csshide.innerHTML === "Show Details") {
        document.getElementById("popup_Css").innerHTML = cssPopup;
        document.getElementById("csshide").innerHTML = "Hide Details"
    }
    else {
        document.getElementById("popup_Css").innerHTML = hidecssPopup;
        document.getElementById("csshide").innerHTML = "Show Details";
    }
}
// Js POPUP
function jsDetails() {
    var jsPopup = `<article>
            <h1>JavaScript Quizz Details</h1>
            <p>The JavaScript quiz comprises Ten questions testing participants on topics including variables, functions, DOM manipulation, and asynchronous JavaScript, with a passing mark set at Eighty %. Participants are allotted Ten minutes to complete the quiz and demonstrate their proficiency in JavaScript.</p>
            <ul>
                <li>Time Limit: Ten minutes</li>
                <li>Number of Questions: Ten</li>
                <li>Question Types: Multiple Choice, True/False, Code Evaluation</li>
                <li>Passing Marks: Eighty %</li>
                <li>Negative Marking: Yes</li>
                <li>Difficulty Level: Beginner to Intermediate</li>
                <li>Topics Covered: Variables, Data Types, Operators, Control Structures, Functions, DOM Manipulation,Events, Asynchronous JavaScript</li>
                <li>Instructions: Read each question carefully. Some questions may have multiple correct answers. Ensure
                    your code snippets are accurate.</li>
                <li>Review: Participants can review and change their answers before submitting.</li>
                <li>Submission: Quiz automatically submitted after the time limit expires.</li>
                <li>Feedback: Participants receive instant feedback on their performance.</li>
            </ul>
        </article>`;

    var hidejsPopup = "";
    if (jshide.innerHTML === "Show Details") {
        document.getElementById("popup_Js").innerHTML = jsPopup;
        document.getElementById("jshide").innerHTML = "Hide Details"
    }
    else {
        document.getElementById("popup_Js").innerHTML = hidejsPopup;
        document.getElementById("jshide").innerHTML = "Show Details";
    }
}

//Data Of HTML Quizz

var htmlQuestions = [
    {
        Question: "Who is the father of HTML?",
        Option1: "Rasmus Lerdorf",
        Option2: "Tim Berners-Lee",
        Option3: "Brendan Eich",
        Option4: "Rasmus Lerdorf",
        Answer: "Tim Berners-Lee",
    }, {
        Question: "In HTML, we use the hr tag for?",
        Option1: "horizontal ruler",
        Option2: "new line",
        Option3: "new paragraph",
        Option4: "vertical ruler",
        Answer: "horizontal ruler",
    }, {
        Question: "Which tag is used in HTMLFive for the initialization of the document type?",
        Option1: "Doctype HTML",
        Option2: "Doctype!",
        Option3: "!Doctype",
        Option4: "Doctype html",
        Answer: "!DOCTYPE html",
    }, {
        Question: "Which one is the HTML documents root tag?",
        Option1: "head",
        Option2: "body",
        Option3: "title",
        Option4: "html",
        Answer: "html",
    }, {
        Question: "Which HTML tag do we use for displaying the power in the expression, (x² & y²)?",
        Option1: "p",
        Option2: "sub",
        Option3: "None of the above",
        Option4: "sup",
        Answer: "sup",
    }, {
        Question: "How does the bdo element work?",
        Option1: "changes direction of the ltr text",
        Option2: "override the direction of the rtl text",
        Option3: "stops writing in current direction of text",
        Option4: "override the text direction",
        Answer: "override the text direction",
    }, {
        Question: "What attribute do we use for data binding?",
        Option1: "datasrc",
        Option2: "mayscript",
        Option3: "name",
        Option4: "datafld",
        Answer: "datasrc",
    }, {
        Question: "Which of these entities is not defined in the XML?",
        Option1: "apos",
        Option2: "quot",
        Option3: "copy",
        Option4: "gt",
        Answer: "copy",
    }, {
        Question: "The ____________ entity is used for the arrow.",
        Option1: "&zeta",
        Option2: "&crarr",
        Option3: "&oelig",
        Option4: "&upsih",
        Answer: "&crarr",
    }, {
        Question: "Which of these doesnt support the MPThree format?",
        Option1: "Opera",
        Option2: "Chrome",
        Option3: "Safari",
        Option4: "Firefox",
        Answer: "Opera",
    }
]
var indexhtml = 0;
var scorehtml = 0;

//Start Html Quizz JAVASCRIPT
function startHtmlQuizz() {
    var options = document.getElementsByName("option");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            if (options[i].value === htmlQuestions[indexhtml - 1].Answer) {
                scorehtml++;
            }
        }
    }
    if (!htmlQuestions[indexhtml]) {
        swal("Your Score", scorehtml)
        return;
    }

    var htmlQuestionVariable = document.getElementById("htmlQuestionUi");
    htmlQuestionVariable.innerHTML = `
    <div class="col- questionui">
    <div class="card">
    <div class="card-header">Read Carefully and Give Correct Answer.</div>
        <div class="card-body">
            <p class="question">${htmlQuestions[indexhtml].Question}</p>
            <div><label class="opts"><input type="radio" name="option" value="${htmlQuestions[indexhtml].Option1}"> <span class="opts">${htmlQuestions[indexhtml].Option1}</span></label></div>
            <div><label class="opts"><input type="radio" name="option" value="${htmlQuestions[indexhtml].Option2}"> <span class="opts">${htmlQuestions[indexhtml].Option2}</span></label></div>
            <div><label class="opts"><input type="radio" name="option" value="${htmlQuestions[indexhtml].Option3}"> <span class="opts">${htmlQuestions[indexhtml].Option3}</span></label></div>
            <div><label class="opts"><input type="radio" name="option" value="${htmlQuestions[indexhtml].Option4}"> <span class="opts">${htmlQuestions[indexhtml].Option4}</span></label></div>
            <br>
            <nav>
    <ul>
      <li>
      <span></span><span></span><span></span><span></span>
      <a onclick="startHtmlQuizz()">Next</a>
      </li>
    </ul>
  </nav>
        </div>
    </div>
</div>`;
    indexhtml++;
}
//Data Of Css Quizz

var cssQuestions = [
    {
        Question: "The “color:red” in CSS can be known as _____________:",
        Option1: "Value",
        Option2: "Rule",
        Option3: "Selector",
        Option4: "Declaration",
        Answer: "Declaration",
    }, {
        Question: "Which selector do we use to specify the rule for binding some particular unique element?",
        Option1: "class",
        Option2: "both tag and class",
        Option3: "tag",
        Option4: "id",
        Answer: "id",
    }, {
        Question: "In an HTML page, which of these tags is used for embedding CSS?",
        Option1: "style",
        Option2: "css",
        Option3: "!Doctype",
        Option4: "script",
        Answer: "style",
    }, {
        Question: "Which of these functions would convert the color of an element by the filter property to a grey shade, for use?",
        Option1: "grayscale()",
        Option2: "shade()",
        Option3: "black()",
        Option4: "htmbrightness()l",
        Answer: "grayscale()",
    }, {
        Question: "Which of these functions is the 2D transformation in the matrix format?",
        Option1: "perspective",
        Option2: "matrix Threed()",
        Option3: "matrix Twod()",
        Option4: "matrix()",
        Answer: "matrix()",
    }, {
        Question: "Which one of these is NOT an appropriate value for the font-variant property?",
        Option1: "small-caps",
        Option2: "large-caps",
        Option3: "inherit",
        Option4: "default",
        Answer: "large-caps",
    }, {
        Question: "Which value is a slightly bolder weight than the standard bold in the font attribute?",
        Option1: "dark",
        Option2: "lighter",
        Option3: "light",
        Option4: "emphasize",
        Answer: "dark",
    }, {
        Question: "The CSS property that is equivalent to the align attribute is:",
        Option1: "text-align",
        Option2: "float",
        Option3: "text-align & float",
        Option4: "centre",
        Answer: "float",
    }, {
        Question: "No single, integrated ____________________ specification exists, because it gets split into various separate modules:",
        Option1: "CSS Four",
        Option2: "CSS Three",
        Option3: "CSS Two",
        Option4: "CSS One",
        Answer: "CSS Four",
    }, {
        Question: "The screen media type can be used with: ",
        Option1: "television-type devices",
        Option2: "computer devices",
        Option3: "handheld screens",
        Option4: "all devices",
        Answer: "computer devices",
    }
]


var indexcss = 0;
var scorecss = 0;
function startCssQuizz() {

    var options = document.getElementsByName("option");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            if (options[i].value === cssQuestions[indexcss - 1].Answer) {
                scorecss++;
            }
        }
    }
    if (!cssQuestions[indexcss]) {
        swal("Your Score Is", scorecss)
        return;
    }
    var cssQuestionVariable = document.getElementById("cssQuestionUi");
    cssQuestionVariable.innerHTML = `<div class="col- questionui">
    <div class="card">
    <div class="card-header">Read Carefully and Give Correct Answer.</div>
        <div class="card-body">
            <p class="question">${cssQuestions[indexcss].Question}</p>
            <div><label class="opts"><input type="radio" name="option" value="${cssQuestions[indexcss].Option1}"> <span class="opts">${cssQuestions[indexcss].Option1}</span></label></div>
            <div><label class="opts"><input type="radio" name="option" value="${cssQuestions[indexcss].Option2}"> <span class="opts">${cssQuestions[indexcss].Option2}</span></label></div>
            <div><label class="opts"><input type="radio" name="option" value="${cssQuestions[indexcss].Option3}"> <span class="opts">${cssQuestions[indexcss].Option3}</span></label></div>
            <div><label class="opts"><input type="radio" name="option" value="${cssQuestions[indexcss].Option4}"> <span class="opts">${cssQuestions[indexcss].Option4}</span></label></div>
            <br>
            <nav>
    <ul>
      <li>
      <span></span><span></span><span></span><span></span>
      <a onclick="startCssQuizz()">Next</a>
      </li>
    </ul>
  </nav>
        </div>
    </div>
</div>`;
    indexcss++;
}

//Data Of JavaScript Quizz
var jsQuestions = [
    {
        Question: "What is JavaScript?",
        Option1: "JavaScript is a scripting language used to make the website interactive",
        Option2: "JavaScript is an assembly language used to make the website interactive",
        Option3: "JavaScript is a compiled language used to make the website interactive",
        Option4: "None of the mentioned",
        Answer: "JavaScript is a scripting language used to make the website interactive",
    }, {
        Question: "Which type of JavaScript language is ___",
        Option1: "Object-Oriented",
        Option2: "Object-Based",
        Option3: "Assembly-language",
        Option4: "High-leve",
        Answer: "Object-Oriented",
    }, {
        Question: "Which one of the following also known as Conditional Expression:",
        Option1: "Alternative to if-else",
        Option2: "Switch statement",
        Option3: "If-then-else statement",
        Option4: "immediate if",
        Answer: "immediate if",
    }, {
        Question: "In JavaScript, what is a block of statement?",
        Option1: " Conditional block",
        Option2: "block that contains a single statement",
        Option3: "block that combines a number of statements into a single compound statement",
        Option4: "both conditional block and a single statement",
        Answer: "block that combines a number of statements into a single compound statement",
    }, {
        Question: "When interpreter encounters an empty statements, what it will do:",
        Option1: "Shows a warning",
        Option2: "Prompts to complete the statement",
        Option3: "Throws an error",
        Option4: "Ignores the statements",
        Answer: "Ignores the statements",
    }, {
        Question: "The function and  var are known as:",
        Option1: "Keywords",
        Option2: "Data types",
        Option3: "Declaration statements",
        Option4: "Prototypest",
        Answer: "Declaration statements",
    }, {
        Question: "Which of the following variables takes precedence over the others if the names are the same?",
        Option1: "Global variable",
        Option2: "The local element",
        Option3: "The two of the above",
        Option4: " None of the above",
        Answer: "The local element",
    }, {
        Question: "Which one of the following is the correct way for calling the JavaScript code?",
        Option1: "Preprocessor",
        Option2: " Triggering Event",
        Option3: " RMI",
        Option4: "Function/Methodntre",
        Answer: "Function/Methodntre",
    }, {
        Question: "Which of the following type of a variable is volatile?",
        Option1: "Mutable variable",
        Option2: "Dynamic variable",
        Option3: " Volatile variable",
        Option4: "Immutable variable",
        Answer: "Mutable variable",
    }, {
        Question: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
        Option1: "Prints an exception error",
        Option2: "Prints an overflow error",
        Option3: "Displays Infinity",
        Option4: "Prints the value as such",
        Answer: "Displays Infinity",
    }
]
var indexjs = 0;
var scorejs = 0;
function startJsQuizz() {
    var options = document.getElementsByName("option");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            if (options[i].value === jsQuestions[indexjs - 1].Answer) {
                scorejs++;
            }
        }
    }
    if (!jsQuestions[indexjs]) {
        swal("Your Score Is", scorejs)
        return;
    }
    var cssQuestionVariable = document.getElementById("jsQuestionUi");
    cssQuestionVariable.innerHTML = `<div class="col- questionui">
    <div class="card">
    <div class="card-header">Read Carefully and Give Correct Answer.</div>
        <div class="card-body">
            <p class="question">${jsQuestions[indexjs].Question}</p>
            <div><label class="opts"><input type="radio" name="option" value="${jsQuestions[indexjs].Option1}"> <span class="opts">${jsQuestions[indexjs].Option1}</span></label></div>
            <div><label class="opts"><input type="radio" name="option" value="${jsQuestions[indexjs].Option2}"> <span class="opts">${jsQuestions[indexjs].Option2}</span></label></div>
            <div><label class="opts"><input type="radio" name="option" value="${jsQuestions[indexjs].Option3}"> <span class="opts">${jsQuestions[indexjs].Option3}</span></label></div>
            <div><label class="opts"><input type="radio" name="option" value="${jsQuestions[indexjs].Option4}"> <span class="opts">${jsQuestions[indexjs].Option4}</span></label></div>
            <br>
            <nav>
    <ul>
      <li>
      <span></span><span></span><span></span><span></span>
      <a onclick="startJsQuizz()">Next</a>
      </li>
    </ul>
  </nav>
        </div>
    </div>
</div>`;
    indexjs++;
}

// Js Of Form Actions
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


//SignUp Form
function registerYourSelf() {

    event.preventDefault();
    var nameSignUp = document.getElementById("nameSignUp");
    var emailSignUp = document.getElementById("emailSignUp");
    var passwordSignUp = document.getElementById("passwordSignUp");
    var confirmPasswordSignUp = document.getElementById("cpasswordSignUp");
    if (nameSignUp.value === "") {
        Swal.fire({
            icon: "error",
            title: "Please Write Name.",
        });
    } else if (emailSignUp.value === "") {
        Swal.fire({
            icon: "error",
            title: "Please Write email.",
        });
    } else if (passwordSignUp.value === "") {
        Swal.fire({
            icon: "error",
            title: "Please Write Password.",
        })
    } else if (confirmPasswordSignUp.value === "") {
        Swal.fire({
            icon: "error",
            title: "Please Write Confirm Password.",
        })
    } else if (passwordSignUp.value !== confirmPasswordSignUp.value) {
        Swal.fire({
            icon: "error",
            title: "Please Match Password.",
        });
    } else {
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${nameSignUp.value}have been registered Successfully.`,
            timer: 1500
        });
        var userData = {
            name: nameSignUp.value,
            email: emailSignUp.value,
            password: passwordSignUp.value,
            confirmPassword: confirmPasswordSignUp.value,
        }
        localStorage.setItem("userData", JSON.stringify(userData));
    }
};
function logOut() {
    setTimeout(() => {
        window.location.href = "./login.html"
    }, 1000);
}

//SignIn Form
function signInYourSelf() {
    event.preventDefault();

    var emailSignIn = document.getElementById("emailSignIn");
    var passwordSignIn = document.getElementById("passwordSignIn");
    var localStorageData = JSON.parse(localStorage.getItem("userData"));
    if (!localStorageData) {
        Swal.fire({
            icon: "error",
            title: "Please SignUp First.",
        });
    }
    if (localStorageData.email !== emailSignIn.value) {
        Swal.fire({
            icon: "error",
            title: "Invalid Email.",
        });
    } else if (localStorageData.password !== passwordSignIn.value) {
        Swal.fire({
            icon: "error",
            title: "Invalid Password.",
        });
    } else {
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${localStorageData.name} have been Login Successfully.`,
            timer: 1500
        });
        setTimeout(() => {
            window.location.href = "./website.html";
        }, 1000);
    };
};