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
        src="https://scontent.fstu5-1.fna.fbcdn.net/v/t1.18169-9/15621801_220283545047617_1606788210209498198_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeG6d8btH2y_aDJIFOBBQNtkq2S8RpiJYDKrZLxGmIlgMvtRzqzwxySS4M9BCGWVUBw-20iGFY5fWRBmdo6Q0YD4&_nc_ohc=mJWpQgHpCfoAX-oZZuV&_nc_ht=scontent.fstu5-1.fna&oh=00_AT_1EX3Ecn910DMHxE38hb_LNlK91D8YAPxBQx3NlTIobQ&oe=620866D2"
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
        <p>Email: Albertophott@hotmail.com</p>
        </footer>
  </div>
  );
}

export default App;
