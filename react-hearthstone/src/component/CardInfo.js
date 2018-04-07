import React, {Component} from 'react';
class CardInfo extends Component{
render(){
    return(<React.Fragment>

{this.props.cards.map((card, index)=>(
<div class='cardContainer-style'>
 <img class="mainImg-style" src={card.cardImg}/>

<div>{card.name}</div>

</div>
))}



    </React.Fragment>)







}
}
export default CardInfo;