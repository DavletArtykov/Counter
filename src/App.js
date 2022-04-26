

import './App.css';

import { ExpenseItem } from './components/ExpenseItem';





function App() {

  const expenses =[
    {
      id: '1',
      title: 'Hello',
      img: 'https://images.pexels.com/photos/5029929/pexels-photo-5029929.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      zag:'lorem',
      side: 'https://www.youtube.com/'

    },
    {
      id: '2',
      title: 'Hi',
      img: 'https://images.pexels.com/photos/8210512/pexels-photo-8210512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ',
      zag:'lorem',
      side: 'https://www.google.com/'

    },
    {
      id: '3',
      title: 'My ',
      img: ' https://images.pexels.com/photos/7544626/pexels-photo-7544626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      zag:'lorem',
      side: 'https://www.facebook.com/'

    },
    {
      id: '4',
      title: 'Hello',
      img: 'https://images.pexels.com/photos/9035242/pexels-photo-9035242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      zag:'lorem',
      side: 'https://www.instagram.com/'

    },

  ]
  console.log(expenses);

  return (
    <div className='App' >
      <ExpenseItem expenses = {expenses} />
     

     </div>
  );
}

export default App;
