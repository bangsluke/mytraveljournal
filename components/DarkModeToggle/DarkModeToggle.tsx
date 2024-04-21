/* From https: //ui.mantine.dev/category/buttons/#action-toggle */

import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import cx from "clsx";
import styles from "./DarkModeToggle.module.css";

export default function DarkModeToggle() {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });

	return (
		<Group justify='center'>
			<ActionIcon
				onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
				variant='default'
				// size='xl'
				aria-label='Toggle color scheme'
				className={styles.button}>
				<LightModeIcon className={cx(styles.icon, styles.light)} />
				<DarkModeIcon className={cx(styles.icon, styles.dark)} />
			</ActionIcon>
		</Group>
	);
}
