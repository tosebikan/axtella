import React from 'react';
import {Link} from 'gatsby';
import Layout from "../components/layout";
import './properties.css';
import data from '../data';


const Properties = () => {
  const property = data.properties.filter((x) => x.type === 'house')
  const lands = data.properties.filter((x) => x.type === "land")
  console.log('p',lands)
  return(
  <Layout>
  <div className="Prop-Hero">
    <div className="Prop-Banner">
      <div className="Prop-Hero-Text">
      <p>We find the best<br/>
    houses for you.</p>
      </div>
    </div>
    <div className="Prop-Title">
    <h3>Houses</h3>
    <p>Quality houses in premium neighbourhoods</p>
    </div>


    <div className="Prop-Container">
    {property.map((prop, id) =>
      <div className="Prop-Section" key={id}>
      <Link to={`/app/property-details/${prop.id}`}><img className="Center" src={prop.image} alt="nice-house"/></Link>
        <div className="Prop-Details">
          <div className="Prop-Details-Top">
          <p>{prop.title}</p>
          <p>{prop.price}</p>
          </div>
          <div className="Prop-Details-Bottom">
          <p>{prop.address}</p>
          <h4>{prop.tag}</h4>
          </div>
        </div>
      </div>
    )}
</div>

    <div className="Land-Banner">
      <div className="Prop-Hero-Text">
      <p>Lands at amazing prices.</p>
      </div>
    </div>
    <div className="Prop-Title">
    <h3>Lands</h3>
    <p>Valuable lands you can buy with trust</p>
    </div>

    <div className="Prop-Container">
      {lands.map((land, id) =>
        <div className="Prop-Section" key={land.id}>
        <Link to={`/app/property-details/${land.id}`}><img className="Center" src={land.image} alt="nice-house"/></Link>
          <div className="Prop-Details">
            <div className="Prop-Details-Top">
            <p>{land.title}</p>
            <p>{land.price}</p>
            </div>
            <div className="Prop-Details-Bottom">
            <p>{land.address}</p>
            <h4>{land.tag}</h4>
            </div>
          </div>
        </div>
      )}
    </div>

  </div>
  </Layout>
)
}

export default Properties;
