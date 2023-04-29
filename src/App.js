import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes/>
      <Footer />
    </div>
  );
}

export default App;
