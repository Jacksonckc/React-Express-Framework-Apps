import personIMG from '../images/person.png';
import info from '../info.json'

export function Card() {

    return (
        <div className='card-container'>
            <button className='card-button'>Status</button>
            <img src={personIMG} alt="person-img" className='card-person-img border-radius-5px box-sizing-border-box'/>
            <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

console.log(info)