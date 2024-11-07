import reactLogo from "../assets/react.svg";

const now = new Date()

export default function Header() {
    return (
        <header>
            <img src={reactLogo} alt="React logo"/>
            <h3>HEADER: {now.toLocaleTimeString()}</h3>
        </header>
    )
}


