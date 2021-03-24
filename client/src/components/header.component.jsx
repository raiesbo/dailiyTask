import { Link } from 'react-router-dom';
import './header.styles.css';

export function Header() {

    const menu = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Calendar",
            url: "/calendar"
        },
        {
            name: "Contact",
            url: "/contact"
        }
    ]

    return (
        <header className='mainHeader'>

            <div>
                Logo
            </div>

            <nav>
                <ul>
                    {
                        menu.map((item, id) => {

                            return (
                                <li key={id}>
                                    <Link to={item.url}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>

        </header>
    )
}