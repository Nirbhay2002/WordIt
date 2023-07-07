import React from 'react';
import { Container, TextField, Divider } from '@mui/material';

const Content = ({darkMode}) => {

  const [dictionaryData, setDictionaryData] = React.useState({});
  const [word, setWord] = React.useState('');
  const [meanings, setMeanings] = React.useState([]);
  const [phoneticsData, setPhoneticsData] = React.useState([]);
  const [displaySubheading, setDisplaySubheading] = React.useState(false);
  

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch(url)
      .then(res => res.json())
      .then(data => setDictionaryData(data[0]))

      fetch(url)
      .then(res => res.json())
      .then(data => setMeanings(data[0].meanings))

      fetch(url)
      .then(res => res.json())
      .then(data => setPhoneticsData(data[0].phonetics))

      setDisplaySubheading(true)
  }

  console.log(dictionaryData);

  const fontStyles = {
    color: darkMode? "white" : "black"
  }

// HANDLING DEFINITIONS

  const definitions = meanings.map(meaning =>{
    return meaning.definitions.map(definition =>{
      return definition.definition;
    });
  })
  console.log(definitions);

    const renderDefinitions = definitions.map(definition =>{
        return <div>
          <p style={fontStyles}>{definition}</p>
          <Divider />
          </div>
      })
        

      const handleChange = (e) =>{
        setWord(e.target.value);
      }

      

    return ( 
        <Container>
          <h1 className="large-word-heading" style={fontStyles}>{word}</h1>
            <form onSubmit={handleSubmit} className="input-form">
        
                <TextField id="outlined-basic" label="Enter a word" variant="outlined" name="word" onChange={handleChange} /><br /><br />
                <button>Search</button>

            </form>
            {displaySubheading && 
            <Container id="meaning-display">
              <h2 style={fontStyles}> Here are some definitions:</h2>
                <div className="meanings">
                  {renderDefinitions}
                </div>
               
            </Container>
}
      </Container>
     );
}
 
export default Content;