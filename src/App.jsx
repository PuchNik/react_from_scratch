import Header from "./components/Header.jsx";
import WayToTeach from "./components/WayToTeach.jsx";
import { ways } from "./data.js";
import Button from "./components/Button/Button.jsx";


export default function App() {
    function handleClick() {
        console.log('BUTTON')
    }

    return (
        <div>
            <Header/>
            <main>
                <section>
                    <h3>Наш подход к обучению: </h3>
                    <ul>
                        <WayToTeach {...ways[0]}/>
                        <WayToTeach {...ways[1]}/>
                        <WayToTeach {...ways[2]}/>
                        <WayToTeach {...ways[3]}/>
                    </ul>
                </section>

                <section>
                    <h3>Чем мы отличаемся от других: </h3>
                    <Button onClick={handleClick}>Подход</Button>
                    <Button onClick={handleClick}>Доступность</Button>
                    <Button onClick={handleClick}>Крнцентрация</Button>
                </section>
            </main>
        </div>
    )
}
