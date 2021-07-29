import classes from './CartItem.module.css';
import { cartListActions } from '../../store/slices/cartList';
import { useDispatch, useSelector } from 'react-redux';

const CartItem = () => {
	const { productQuantity, totalPrice } = useSelector(
		(state) => state.cartList
	);

	const dispatch = useDispatch();

	const removeHandler = () => {
		dispatch(cartListActions.removeItem());
	};
	const addHandler = () => {
		dispatch(cartListActions.addItem());
	};
	return (
		<li className={classes.item}>
			<header>
				<h3>Dildo</h3>
				<div className={classes.price}>
					${totalPrice.toFixed(2)}{' '}
					<span className={classes.itemprice}>($6/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{productQuantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={removeHandler}>-</button>
					<button onClick={addHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
