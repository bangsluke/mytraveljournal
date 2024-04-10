/* From https: //ui.mantine.dev/category/buttons/#action-toggle */

import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import cx from "clsx";
import classes from "./DarkModeToggle.module.css";

export default function DarkModeToggle() {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });

	return (
		<Group justify='center'>
			<ActionIcon
				onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
				variant='default'
				size='xl'
				aria-label='Toggle color scheme'>
				<LightModeIcon className={cx(classes.icon, classes.light)} />
				<DarkModeIcon className={cx(classes.icon, classes.dark)} />
			</ActionIcon>
		</Group>
	);
}
