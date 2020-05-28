import React from 'react';
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Typography,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import '../../css/Card.css';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

function RecipeCard(props) {
	// const [isOpen, setIsOpen] = useState(false);
	// const toggle = () => setIsOpen(!isOpen);
	const classes = useStyles();

	return (
		<Grid
			container
			direction='row'
			justify='space-around'
			alignItems='flex-start'>
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
		</Grid>
	);
}
export default RecipeCard;
