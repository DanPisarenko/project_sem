import logo from './logo.svg';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="ggg" logo="DanWorld" bgc="cyan" txt_color='black'>
        <a href='https://www.youtube.com/'>Видево</a>
        <a href='https://andyuz27.github.io/aaa_blog/'>блог</a>
        <a href='https://aaa-account.vercel.app/users/635bcfb01aad8451105b085c'>Дезигн</a>
      </Header>
    </div>
  );
}

export default App;
