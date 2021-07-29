import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartListActions } from '../../store/slices/cartList';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
	const { title, description } = props;

	const dispatch = useDispatch();

	const addHandler = () => {
		dispatch(cartListActions.addItem());
	};

	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>$6</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<button onClick={addHandler}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
