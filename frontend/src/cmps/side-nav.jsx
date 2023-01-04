import logoImg from '../assets/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHome, faTelevision, faClapperboard, faStar } from '@fortawesome/free-solid-svg-icons'
import { utilService } from "../services/util.service"
import { Link } from 'react-router-dom'

export const SideNav = () => {

    const sideNavIcons = [faMagnifyingGlass, faHome]
    // const sideNavIcons = [faMagnifyingGlass, faHome, faTelevision, faClapperboard, faStar]
    const sideNavBackdrop = ['Search', 'Home']
    // const sideNavBackdrop = ['Search', 'Home', 'Series', 'Movies', 'Originals']

    return (
        <section className="aside-nav">
            <div className="logo">
                <Link to={`/`}>
                    <img src={logoImg} alt="logo" />
                </Link>
            </div>
            {/* <div className="side-nav nav-backdrop">
                {sideNavBackdrop.map(category => <span key={utilService.makeId()}>{category}</span>)}
            </div> */}
            <div className="side-nav">
                {sideNavIcons.map((icon, idx) =>
                    <Link to={`/${sideNavBackdrop[idx].toLowerCase()}`} key={utilService.makeId()}>
                        <span key={utilService.makeId()}>
                            {<FontAwesomeIcon icon={icon} />}
                        </span>
                    </Link>)}
            </div>
        </section>
    )
}