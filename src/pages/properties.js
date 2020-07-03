import React from 'react';
import {Link} from 'gatsby';
import Layout from "../components/layout";
import './properties.css';
import data from '../data';


const Properties = () => {
  const property = data.properties.filter((x) => x.type === 'house')
  console.log('p',property)
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
    {data.properties.map((prop, id) =>
      <div className="Prop-Section">
      <img className="Center" src={prop.image} alt="nice-house"/>
        <div className="Prop-Details">
          <div className="Prop-Details-Top">
          <p>{prop.title}</p>
          <p>${prop.price}</p>
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
      <p>Lands at amazing<br/>
      prices.</p>
      </div>
    </div>
    <div className="Prop-Title">
    <h3>Lands</h3>
    <p>Valuable lands you can buy with trust</p>
    </div>

    <div className="Prop-Container">
    <div className="Prop-Section">
    <img className="Center" src={require('../images/land1.jpg')} alt="nice-house"/>
      <div className="Prop-Details">
        <div className="Prop-Details-Top">
        <p>1 Acre</p>
        <p>$ 100,000</p>
        </div>
        <div className="Prop-Details-Bottom">
        <p>Coastal Spintex, Accra Ghana</p>
        <h4> For Sale</h4>
        </div>
      </div>
    </div>

      <div className="Prop-Section">
      <img className="Center" src={require('../images/land2.jpg')} alt="nice-house"/>
        <div className="Prop-Details">
          <div className="Prop-Details-Top">
          <p>10 Plots</p>
          <p>$ 200,000</p>
          </div>
          <div className="Prop-Details-Bottom">
          <p>Coastal Spintex, Accra Ghana</p>
          <h4> For Sale</h4>
          </div>
        </div>
      </div>

      <div className="Prop-Section">
      <img className="Center" src={require('../images/land3.jpg')} alt="nice-house"/>
        <div className="Prop-Details">
          <div className="Prop-Details-Top">
          <p>2 Acres</p>
          <p>$ 5,000</p>
          </div>
          <div className="Prop-Details-Bottom">
          <p>Coastal Spintex, Accra Ghana</p>
          <h4> For Sale</h4>
          </div>
        </div>
      </div>

      <div className="Prop-Section">
      <img className="Center" src={require('../images/land4.jpg')} alt="nice-house"/>
        <div className="Prop-Details">
          <div className="Prop-Details-Top">
          <p>10 Plots</p>
          <p>$ 5,000</p>
          </div>
          <div className="Prop-Details-Bottom">
          <p>Coastal Spintex, Accra Ghana</p>
          <h4> For Rent</h4>
          </div>
        </div>
      </div>
    </div>

  </div>
  </Layout>
)
}

export default Properties;
