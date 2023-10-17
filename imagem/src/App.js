import './App.css';
import minhaImagem from './img/imagem.png'
import NoticiaComponente from './components/NoticiaComponentes'
function App() {
  return (
    <div className="App">
  <h1> Olha só que legal</h1>
  <NoticiaComponente 
  titulo="Estefani Felix"
  imagem={minhaImagem}
  alt="Cachorrinho muito triste."
  descricao="Era uma casa muiot engraçada não tinha teto"
  categoria="Tristeza"
  />
    </div>
  );
}

export default App;
