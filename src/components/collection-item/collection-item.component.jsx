import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux'
import { addItem } from '../../redux/card/card.action'
 
const CollectionItem = ({item , addItem}) => {
    const { name , price , imageUrl } = item;
    return (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton className='custom-button' inverted onClick={() => addItem(item)}>ADD TO CARD</CustomButton>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null , mapDispatchToProps)(CollectionItem)