import boat from "./CardData";
import { Link } from 'react-router-dom'
import './card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faRuler, faUser, faBed } from '@fortawesome/free-solid-svg-icons'

const Card = ({title}) => {
  return (
    <div>
      <div className="card-container">
        <h1 className='featured-boat-title'>{title}</h1>
          {boat.map((boat) => {
            return (
              <div key={boat.id}>
                <Link to={`/boats/${boat.id}`}>
                <div className="boats-item">
                  <div className="boats-item-top">
                    <img
                      src={boat.img}
                      alt="boat-item-thumbnail"
                      />
                  </div>
                  <div className="boats-item-middle">
                    <div className="boat-title">
                      <h4>{boat.name}</h4>
                    </div>
                    <div className="boat-location">
                      <p><FontAwesomeIcon className='icon' icon={faMapMarkerAlt}/>{boat.location}</p>
                    </div>
                  </div>
                  <div className="boats-item-bottom">
                    <div className="boat-size"><FontAwesomeIcon className='icon' size='xs' icon={faRuler}/>{boat.size}</div>
                    <div className="boat-crew"><FontAwesomeIcon className='icon' size='xs' icon={faUser}/>{boat.crew}</div>
                    <div className="boat-capacity"><FontAwesomeIcon className='icon' size='xs'icon={faBed}/>{boat.capacity}</div>
                  </div>
                </div>
          </Link>
              </div>
            );
          })}
          <Link to='/boats'>
          <button className='view-all-boats-btn'>VIEW ALL BOATS</button>
          </Link>
        
      </div>
    </div>
  );
};

export default Card;
