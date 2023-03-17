import Header from './Components/Header';
import './App.css';
import Form from './Components/Form';
function App() {

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }

  return (
    <div className="App">
      <Header className="ggg" logo="DanWorld" bgc="cyan" txt_color='black' phone="" account="floppa" lnk1="https://www.youtube.com/" lnk1_name="Видево" lnk2="https://andyuz27.github.io/aaa_blog/" lnk2_name="блог" lnk3="https://aaa-account.vercel.app/users/635bcfb01aad8451105b085c" lnk3_name="Дизайнер">
        {/* <a href='https://www.youtube.com/'>Видево</a>
        <a href='https://andyuz27.github.io/aaa_blog/'>блог</a>
        <a href='https://aaa-account.vercel.app/users/635bcfb01aad8451105b085c'>Дезигн</a>*/}
      </Header>
      <Form date1_inp_dsp="none" submit_txt="hello world" action={handleSubmit}/>
    </div>
  );
}

export default App;
