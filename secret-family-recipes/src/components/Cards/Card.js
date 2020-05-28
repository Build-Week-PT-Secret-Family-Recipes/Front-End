import React from 'react';
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/Card.css';

const useStyles = makeStyles((theme) => ({
	root: {
		width: "23%",
		margin: "2%",
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
}));

function RecipeCard(props) {
	// const [isOpen, setIsOpen] = useState(false);
	// const toggle = () => setIsOpen(!isOpen);
	const classes = useStyles();

	return (
			<Card className={classes.root} variant='outlined'>
				<CardMedia
					className={classes.media}
					image='https://via.placeholder.com/150'
					title={props.recipeData.title}
				/>
				<CardHeader className='card' title={props.recipeData.title} />
				<CardContent>
					<Typography variant='body2' color='textSecondary' component='p'>
						{props.recipeData.description}
					</Typography>
				</CardContent>
				<p>{props.recipeData.category_name}</p>
			</Card>

	);
}
export default RecipeCard;
