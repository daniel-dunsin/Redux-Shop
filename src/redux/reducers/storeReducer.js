import data from '../../data';
import { SEARCH_ITEMS, UPDATE_SEARCH_INPUT, ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_QUANTITY, GET_TOTALS } from '../actions';

const storeState = {
    items: data,
    cart: [],
    cartTotal: 0,
    cartAmount: 0,
    searchInput: '',
};

const storeReducer = (state = storeState, action) => {
    if (action.type === UPDATE_SEARCH_INPUT) {
        return { ...state, searchInput: action.payload.text }
    }
    if (action.type === SEARCH_ITEMS) {
        // filter items by searching
        // if input is empty, display all items
        if (state.searchInput === '') {
            return { ...state, items: [...data] };
        } else {
            // else display based on search input and item's name
            const tempItems = [...data].filter(item => item.name.includes(state.searchInput));
            return { ...state, items: tempItems };
        }
    }
    if (action.type === ADD_TO_CART) {
        const tempCart = [...state.cart];

        // update the amount and total of the item when added to the cart
        const tempItems = [...state.items].map(item => {
            if (item.id === action.payload.id) {
                item.amount = 1;
                item.total = item.price;
                tempCart.unshift(item);
            }
            return item;
        })
        return { ...state, cart: tempCart, items: tempItems };
    }
    if (action.type === REMOVE_FROM_CART) {
        // remove the items from state.cart
        const tempCart = [...state.cart].filter(item => item.id != action.payload.id);
        //  set the items amount and total back to 0
        const tempItems = [...state.items].map(item => {
            if (item.id === action.payload.id) {
                item.amount = 0;
                item.total = 0;
            };
            return item;
        });

        return { ...state, cart: tempCart, items: tempItems };
    }
    if (action.type === TOGGLE_QUANTITY) {
        const { behaviour, id } = action.payload;
        // edit the amounts and total in the items array
        const tempCart = [...state.cart].map(item => {
            if (item.id === id) {
                if (behaviour === 'inc') {
                    item.amount += 1;
                } else if (behaviour === 'dec') {
                    item.amount -= 1;
                }
                item.total = item.amount * item.price;
            };
            return item;
        });

        return { ...state, cart: tempCart };
    }
    if (action.type === GET_TOTALS) {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            // get the amount and total of the item and add it to cartTotal
            const { total, amount } = cartItem;
            cartTotal.total += total;
            cartTotal.amount += amount;
            return cartTotal;
        }, { total: 0, amount: 0 });
        // max of two decimal places
        total = parseFloat(total.toFixed(2));
        return { ...state, cartTotal: total, cartAmount: amount };
    }


    return state;
}

export default storeReducer;