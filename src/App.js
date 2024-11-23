import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {activeId: languageGreetingsList[0].id}

  onClickLanguage = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeId} = this.state
    const activeLanguage = languageGreetingsList.find(
      item => item.id === activeId,
    )

    return (
      <div className="app-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="language-list">
          {languageGreetingsList.map(eachLanguage => (
            <li key={eachLanguage.id} className="language-item">
              <button
                type="button"
                className={`language-button ${
                  activeId === eachLanguage.id ? 'active-button' : ''
                }`}
                onClick={() => this.onClickLanguage(eachLanguage.id)}
              >
                {eachLanguage.buttonText}
              </button>
            </li>
          ))}
        </ul>
        <div className="image-container">
          <img
            src={activeLanguage.imageUrl}
            alt={activeLanguage.imageAltText}
            className="greeting-image"
          />
        </div>
      </div>
    )
  }
}

export default App
