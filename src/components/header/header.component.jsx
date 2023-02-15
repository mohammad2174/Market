import React from 'react';
import {HeaderContainer , LogoContainer , OptionContainer , OptionLink } from './header.styles'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { deleteCurrentUser } from '../../redux/user/user.action';
import { connect } from 'react-redux';
import CardIcon from '../card-icon/card-icon.component';
import CardDropDown from '../card-dropdown/card-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCardHidden } from '../../redux/card/card.selectors'
import { selectCurrentUser } from '../../redux/user/user.selecrors'


class Header extends React.Component {
    render() {
        const {currentUser , hidden} = this.props
        return (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'></Logo>
        </LogoContainer>
        <OptionContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser
                ? <OptionLink as='div' onClick={() => {this.props.deleteCurrentUser({currentUser:null})}}>SIGN OUT</OptionLink>
                : <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CardIcon />
        </OptionContainer>
        {
            hidden ? null : <CardDropDown />
        }
    </HeaderContainer>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCardHidden
})

const mapDispatchToProps = dispatch => ({
    deleteCurrentUser: user => dispatch(deleteCurrentUser(user))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Header)
