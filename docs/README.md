# Pandabot

> An awesome buddy to answer every question about <a href='#'>Rungta College of Engineering</a>

### Intoduction

Its a simple Chatbot built on JavaScript and ReactJS which can answer many question about the <a href='#'>Rungta College of Engineering</a>. It can provide FAQs regarding to Admission in College , Campus Life , Placements etc.

### Technologies Used

The Project is built on React.JS which is a JavaScript framework. However the code also uses other Markup language such :

- HTML5
- CCS3
- Javascript

### File Structure of Repo

```sh
    Pandabot
        ./public
         |
        ./src
          |
          ./src/components
            |
            ./src/components/chatbot
              |
              ./src/components/chatbot/chatbot.js
```

### How to run

You can run this chatbot in your local mmachine by using this command given below:

```sh
      npm install
      npm run start
```

### Working Of Code

In Chatbot.js , we have defined an array of objects as const regexes.

```js
const regexes = [
  {
    pattern: /hello|hi|hey/i,
    response: "Hello! How can I help you today?",
  },
  {
    pattern: /whats up|what are you doing|whats going on/i,
    response: "Nothing much, just trying to respond to your messages.",
  },
  {
    pattern: /how are you|how's it going/i,
    response: "I'm doing well, thank you for asking. How about you?",
  },
  {
    pattern: /i am fine|yeah...fine|i am good|i'm good/i,
    response: "I'm glad to hear that!",
  },
];
```

Then , we have our main function `function chatbot()` in which we have `generate_response()` which searches for expression in const regexs. If any of the expression matches then it selects an appropriate response. If it can't find a response then the code gives the default response

```js
function Chatbot() {
  const [messages, setMessages] = useState([]);

  function generateResponse(input) {
    let response = "Currently, I don't have any information about that. You can contact this number: 1714173314, for more information.";
    for (const regex of regexes) {
      if (input.match(regex.pattern)) {
        response = regex.response;
        break;
      }
    }
    return response;
  }
```

Finally we have a function named `handle_submit()` which handles the submit event and gives the response.

```Js
  function handleSubmit(event) {
   event.preventDefault();
   const userInput = event.target.elements.input.value.toLowerCase().replace('?', '');
   event.target.elements.input.value = '';
   const botResponse = generateResponse(userInput);
   setMessages([...messages, { text: userInput, user: true }, { text: botResponse, user: false }]);

 }
```

And then , we are rendering a block of HTML code that makes a simple UI of this chatbot :

```js
   return (
    <div className="chatbot-container">
      <div className="chatbot-header">
      <h1 className="chatbot-title">  PANDABOT    <img src='panda.svg' alt='icon'/></h1>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chatbot-message ${message.user ? 'user-message' : 'bot-message'}`}>
            <span>{message.user ? 'User Said : ' : 'PandaBot : '}{message.text}</span>
          </div>
        ))}
      </div>
      <form className="chatbot-form" onSubmit={handleSubmit}>
        <input type="text" name="input" placeholder="Enter your query" />
        <button type="submit"><span class="material-symbols-outlined">
          send
        </span></button>
      </form>
    </div>
  );
}

export default Chatbot;

```
