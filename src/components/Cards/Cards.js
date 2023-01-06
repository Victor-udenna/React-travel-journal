import React, {Fragment} from 'react';
import {Cardcomponent} from "../../components";
import { cardData } from '../../data';

 const Cards = () => {
  return (
<Fragment>
<div className=''>
<div className='px-3'>
{}
</div>
{ cardData.map((items)=>{
  return (<Cardcomponent
  key={items.id}
  country={items.country}
  location= {items.location}
  date= {items.date }
  details= {items.details}
  displayimage= {items.displayimage}
  />)
})}
</div>
</Fragment>
  )
}

export default Cards;
