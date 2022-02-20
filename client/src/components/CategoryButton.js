import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const options = [ // à remplacer par fetch
	'Aucune',
	'Informatique',
	'Vêtements',
	'Véhicules',
	'Immobilier',
	'Sports',
	'Meubles & Décoration',
	'Livres',
	'Instruments de musique',
	'Jeux & Jouets',
];

function ConfirmationDialogRaw(props) {
	const { onClose, value: valueProp, open, ...other } = props;
	const [value, setValue] = React.useState(valueProp);
	const radioGroupRef = React.useRef(null);

  	React.useEffect(() => {
		if (!open) {
		setValue(valueProp);
		}
	}, [valueProp, open]);

	const handleEntering = () => {
		if (radioGroupRef.current != null) {
		radioGroupRef.current.focus();
		}
	};

	const handleCancel = () => {
		onClose();
	};

	const handleOk = () => {
		onClose(value);
	};

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<Dialog
		sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
		maxWidth="xs"
		TransitionProps={{ onEntering: handleEntering }}
		open={open}
		{...other}
		>
		<DialogTitle>Choisissez votre catégorie</DialogTitle>
		<DialogContent dividers>
			<RadioGroup
			ref={radioGroupRef}
			aria-label="catégorie"
			name="catégorie"
			value={value}
			onChange={handleChange}
			>
			{options.map((option) => (
				<FormControlLabel
				value={option}
				key={option}
				control={<Radio />}
				label={option}
				/>
			))}
			</RadioGroup>
		</DialogContent>
		<DialogActions>
			<Button autoFocus onClick={handleCancel}>
			Cancel
			</Button>
			<Button onClick={handleOk}>Ok</Button>
		</DialogActions>
		</Dialog>
	);
};

ConfirmationDialogRaw.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	value: PropTypes.string.isRequired,
};

export default function ConfirmationDialog() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('');

	const handleClickListItem = () => {
		setOpen(true);
	};

	const handleClose = (newValue) => {
		setOpen(false);

		if (newValue) {
		setValue(newValue);
		}
	};

	return (
		<Button variant='outlined' sx={{alignItems:'center', borderColor:'lightgray', textTransform:'capitalize', height:'56px'}}>
			<List component="div" role="group">
				<ListItem
				button
				divider
				aria-haspopup="true"
				aria-controls="catégorie-menu"
				aria-label="catégorie"
				onClick={handleClickListItem}
				>
				<ListItemText primary="Catégorie" secondary={value} />
				</ListItem>
				<ConfirmationDialogRaw
				id="catégorie-menu"
				keepMounted
				open={open}
				onClose={handleClose}
				value={value}
				/>
			</List>
		</Button>
	);
}