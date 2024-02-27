import {
    AboutUs,
    Header,
    Navbar,
    Properties,
    Agents,
    Mobile,
    Footer,
} from './components';
import './App.css';

export default function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Properties />
            <AboutUs />
            <Agents />
            <Mobile />
            <Footer />
        </div>
    );
}
