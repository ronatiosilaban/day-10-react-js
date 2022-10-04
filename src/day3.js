
import './App.css';
import {faker} from "@faker-js/faker"


function App() {
  const data =[
    {
      name:"ronatio",
      date:"Today at 8:00PM",
      comment:"wuihhhh Keren sekali yaa",
      avatar:faker.image.avatar()
    },
    {
      name:"Dani",
      date:"Today at 8:10PM",
      comment:"Iyaa dong Keren banget woyy",
      avatar:faker.image.avatar()
    },
    {
      name:"Adrian",
      date:"Today at 8:30PM",
      comment:"Mantapppp",
      avatar:faker.image.avatar()
    },
  ]

  console.log(data);
  return (
    <div className='ui container comments'>
       {
        
          data?.map((item, index) => (
      <div className='comment' key={index}>
        <a href='/' className='avatar'>
          <img alt='avatar' src={item.avatar}/>
        </a>
        <div className='content'>
          <a href='/' className='author'>
           {item.name}
          </a>
          <div className='metadata'>
            <span className='date'>{item.date}</span>
          </div>
          <div className='text'>{item.comment}</div>
        </div>

      </div>    
         ))
        }
       </div>
  );
}

export default App;

