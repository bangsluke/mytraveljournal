import styles from "./HolidayCardList.module.css";

// Define the FilterDecade component props
interface FilterDecadeProps {
	selectedDecade: string;
	onDecadeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterDecade: React.FC<FilterDecadeProps> = ({ selectedDecade, onDecadeChange }) => {
	const decades = ["All", "1990s", "2000s", "2010s", "2020s"];

	return (
		<div className={styles.filter}>
			<label>Filter by Decade: </label>
			<select title='Decade Filter' value={selectedDecade} onChange={onDecadeChange}>
				{decades.map((decade) => (
					<option key={decade} value={decade}>
						{decade}
					</option>
				))}
			</select>
		</div>
	);
};

export default FilterDecade;
