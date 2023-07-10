import React from 'react';
import { Container, TextField } from '@mui/material';
import Carousel from './Carousel';

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

      const handleChange = (e) =>{
        setWord(e.target.value);
      }


    return ( 
        <Container>
          <h1 className="large-word-heading" style={fontStyles}>{word? word: "START bY TYpInG a WORd.."}</h1>
            <form onSubmit={handleSubmit} className="input-form">
        
                <TextField id="outlined-basic" label="Enter a word" variant="outlined" name="word" onChange={handleChange} /><br /><br />
                <button>Search</button>

            </form>
            
            {displaySubheading && 
            <Container id="meaning-display">
              <h2 style={fontStyles} className="definitions-heading"> Here are some definitions</h2>
                <div className="meanings">
                  <Carousel definitions = {definitions} darkMode = {darkMode}/>
                </div>
               
            </Container>
}
      </Container>
     );
}
 
export default Content;