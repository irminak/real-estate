import { AboutUs, Header, Navbar, Properties, Agents } from './components';
import './App.css';

export default function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Properties />
            <AboutUs />
            <Agents />
        </div>
    );
}
