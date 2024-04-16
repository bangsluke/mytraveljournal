import { Button, Menu, rem, useMantineTheme } from "@mantine/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./HolidayCardList.module.css";

// Define the FilterDecade component props
interface FilterDecadeProps {
	selectedDecade: string;
	onDecadeChange: (newDate: string) => void;
}

const FilterDecade: React.FC<FilterDecadeProps> = ({ selectedDecade, onDecadeChange }) => {
	const theme = useMantineTheme();
	const decades = ["All", "1990s", "2000s", "2010s", "2020s"];

	// Define the handleClick handler
	const handleClick = (decade: string) => {
		// Call the parent component's callback function
		onDecadeChange(decade);
	};

	// Define the DecadesDropdownOptions with onClick functions
	const DecadesDropdownOptions = decades.map((decade) => (
		<Menu.Item key={decade} value={decade} onClick={() => handleClick(decade)}>
			{decade}
		</Menu.Item>
	));

	return (
		<div className={styles.filter}>
			<label>Filter by Decade: </label>
			<Menu transitionProps={{ transition: "pop-top-right" }} position='top' width={220} withinPortal trigger='click-hover'>
				<Menu.Target>
					<Button
						rightSection={<KeyboardArrowDownIcon style={{ width: rem(18), height: rem(18) }} />}
						color={theme.colors.primary[1]}
						className={styles.filterButton}>
						{selectedDecade}
					</Button>
				</Menu.Target>
				<Menu.Dropdown>{DecadesDropdownOptions}</Menu.Dropdown>
			</Menu>
		</div>
	);
};

export default FilterDecade;
