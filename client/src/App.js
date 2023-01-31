import './App.css';
import Header from './components/Header';
import CardCollection from './components/CardCollection';

function App() {
    return (
        <div className='application'>
            <Header title="Smocking hot application about washing machines" />
            <div>
                <CardCollection />
            </div>
        </div>
    );
}

export default App;
