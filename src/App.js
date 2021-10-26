import React, {useState, useEffect} from 'react';

const useSemiPersistance = (key, intialState) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) || intialState
  );

useEffect(() => {
  localStorage.setItem(key, value);
   },[value, key]);

   return [value, setValue];
  };


const App = () => {
const stories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];


const [searchTerm, setSearchTerm] = useSemiPersistance("search", "React");

 console.log(searchTerm);
  
 const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

   const searchedStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
   );

  return (
      <>
      <h1>React & Redux Stories</h1>

      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />
      <List list={searchedStories} />
      </>
    );
  };

      const InputWithLabel = ({
        id, 
        value, 
        type = "text", 
        onInputChange,
        isFocused,
        children
      }) => {
        const inputRef = React.useRef(); 
        
        useEffect(() => {
          if (isFocused) {
            inputRef.current.focus();
          }
        }, [isFocused]);
          
        return (
          <div>           
            <label htmlFor={id}>{children}:</label>
            &nbsp;
            <input ref={inputRef} id={id} type={type} 
            value={value} onChange={onInputChange} />
          </div>
    );
        };
   
      const List = ({list}) =>
         list.map(item => <Item key ={item.objectID} item={item}/>);

         const Item =({item}) => (
           <div>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments} </span>
            <span>{item.points} </span>
          </div>
        );
     
     
  
export default App;
