import classes from './CartButton.module.css';
import { cartListActions } from '../../store/slices/cartList';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
	const { cartProduct } = useSelector((state) => state.cartList);
	const dispatch = useDispatch();

	const toggleHandler = () => {
		dispatch(cartListActions.toggle());
	};

	return (
		<button className={classes.button} onClick={toggleHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartProduct}</span>
		</button>
	);
};

export default CartButton;
