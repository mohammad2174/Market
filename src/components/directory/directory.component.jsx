import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'

const Directory = ({sections}) => {
        return (
            <div className='directory-menu'>
                {sections.map(({id , imageUrl , title , size , linkUrl}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                ))}
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(Directory)