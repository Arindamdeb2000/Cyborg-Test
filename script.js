const prompts = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["how are you", "how is life", "how are things"],
    ["what do you do", "what's your role", "what is up"],
    ["how many hours gte supports the north american executive team"],
    ["What does Lesten do"],
    ["What does Mahek do"],
    ["What does Ari do"],
    ["What does Pooja do"],
    ["What does Anushree do"],
    ["who created you", "who made you"],
];

const replies = [
    ["Hello! - I am GTE Cyborg", "Hi! - I am GTE Cyborg", "Hey! - I am GTE Cyborg", "Hi there! - I am GTE Cyborg", "Howdy - I am GTE Cyborg"],
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    [
        "The GTE team, led by individuals like Arindam Deb (ARI), Pooja Saxena, Mahek Mann, Lesten D’Souza, and Anushree Kulkarni, is primarily responsible for Global Executive Hiring. Their key areas of expertise and focus include executing GTE KPIs, sourcing leadership, program management, global intelligence, innovation initiatives, talent communities, executive market intelligence, as well as design and execution of strategic initiatives. Additionally, they play vital roles in managing data, dashboards, and reporting for effective decision-making within the organization.",
        "I answer all your questions associated with GTE Executive Hiring",
        "Can you guess?",
        "I don't know actually"
    ],
    ["72 Hours... precisely"],
    ["Global Executive Hiring,Exec Market Intelligence,Innovation Initiatives"],
    ["Global Executive Hiring,Exec Market Intelligence,Innovation Initiatives,Talent Communities,Global Intelligence,Design & Execution"],
    ["Global Executive Hiring,GTE KPI Execution,Sourcing Leadership,Program Management,Global Intelligence,Innovation Initiatives,Talent Communities,Exec Market Intelligence,Design & Execution,Data, Dashboard & Reporting"],
    ["Global Executive Hiring,Exec Market Intelligence,Data, Dashboard & Reporting"],
    ["Global Executive Hiring,Exec Market Intelligence,Talent Communities,Global Intelligence,Design & Execution"],
    ["The one true God, JavaScript"],
];

const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

function sendMessage() {
    const userMessage = userInput.value.toLowerCase();
    const index = prompts.findIndex(prompts => prompts.includes(userMessage));
    const response = index !== -1 ? replies[index][Math.floor(Math.random() * replies[index].length)] : "Arindam Deb (ARI) leads Global Executive Hiring, GTE KPI Execution, and more. Pooja Saxena focuses on Global Executive Hiring, Exec Market Intelligence, and Dashboard Reporting. Mahek Mann excels in Global Executive Hiring and Innovation Initiatives. Lesten D’Souza specializes in Global Executive Hiring and Innovation Initiatives. Anushree Kulkarni contributes to Global Executive Hiring and Talent Communities with a focus on intelligence and execution.";

    appendMessage('user', userMessage);
    appendMessage('bot', response);

    userInput.value = '';
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(`${sender}-message`);
    messageDiv.innerHTML = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}
