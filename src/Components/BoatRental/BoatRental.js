import './boat.css'
import boatDeck from '../../Images/Boats/boat-deck.jpg'

const BoatRental = () => {
    return (
        <div className="boat-container">
            <div className="boat-title">
                <h2>Boat Rentals</h2>
            </div>
            <div className="separator"> </div>
            <div className="boat-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod, reiciendis velit ex rerum aliquid provident. Optio, reprehenderit harum distinctio, deleniti omnis dolorem quod quidem dolore a eligendi autem illo.</p>
            </div>
            <div className="boat-promo-img">
                <img src={boatDeck} alt="boat deck for rental promo"/>
            </div>
        </div>
    )
}

export default BoatRental
