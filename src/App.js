import './App.css';
import Header from './components/Header';
import pegaUrlYt from './servicos/funções';

function App() {
  return (
    <div className="App">
        <Header />
        <iframe
          className="video-banner"
          data-testid="video"
          width="100%"
          height="758"
          title="video"
          src={ `//www.youtube.com/embed/${pegaUrlYt('https://www.youtube.com/watch?v=46v2mc2ypMw&ab_channel=BetoHott')}?autoplay=1&loop=1&autopause=0&muted=1` }
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
          webkitallowfullscreen mozallowfullscreen 
        />
        <div 
        className="contact">
        <img 
        src="https://scontent.fstu5-1.fna.fbcdn.net/v/t1.6435-9/97759782_1105211346513907_7357123019195547648_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE4V801Iaptfz3vrPW4fnb6h7iC-heX7kuHuIL6F5fuS-S-vI5hu3ZVSHPEese0VBVbLumNyC3XUAKmFV7wtX2m&_nc_ohc=ZXGBrMuvmWYAX_ShSXy&_nc_oc=AQmVEBpKjmYwL3qAEi2KLzjD4PMadQmPaISHyc9PIZiqM7xvwQ6RmdT7Vcu0bjTu5fs&_nc_ht=scontent.fstu5-1.fna&oh=00_AT-0S5H1Yob0FM9OCw8ni2J5AcvrdHq4TjTJw5z6kH0GDw&oe=61E1029E"
        alt="fb"
        className="image-contact"
        > 
        </img>
          <div
          id="co">
            <h3>"Beto Hott é natural de Volta Redonda e atua há 15 anos no cenário musical do Sul Fluminense e da Costa Verde. Um dos artistas vencedores do II Concurso de Música do Parque Arqueológico e Ambiental de São João Marcos"</h3>
          </div>
        </div>
        <footer 
        className="footer"
        >
        <h2>Contatos</h2>
        <p>Telefone: (24)99823-6271</p>
        <p>Email: </p>
        </footer>
  </div>
  );
}

export default App;
