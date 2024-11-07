import Header from "./components/Header.jsx";
import WayToTeach from "./components/WayToTeach.jsx";
import { ways, differences } from "./data.js";
import Button from "./components/Button/Button.jsx";
import {useState} from "react";


export default function App() {
    const [content, setContent] = useState('Нажми на кнопку')

    function handleClick(type) {
        setContent(type)
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
                    <Button onClick={() => handleClick('way')}>Подход</Button>
                    <Button onClick={() => handleClick('easy')}>Доступность</Button>
                    <Button onClick={() => handleClick('program')}>Крнцентрация</Button>

                    <p>{differences[content]}</p>
                </section>
            </main>
        </div>
    )
}

