import { createSelector } from 'reselect';

const selectCard = state => state.card
const selectUser = state => state.user

export const selectCardItems = createSelector(
    [selectCard],
    (card) => card.cardItems
)

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

export const selectCardItemsCount = createSelector(
    [selectCardItems],
    cardItems => cardItems.reduce((accumolatedQuantity , cardItem) => accumolatedQuantity + cardItem.quantity , 0)
)

export const selectCardHidden = createSelector(
    [selectCard],
    card => card.hidden
)

export const selectCardTotal = createSelector(
    [selectCardItems],
    cardItems => cardItems.reduce((accumolatedQuantity , cardItem) => accumolatedQuantity + cardItem.quantity * cardItem.price , 0 ) 
)