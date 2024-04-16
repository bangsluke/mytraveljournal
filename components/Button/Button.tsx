import { Button, useMantineTheme } from "@mantine/core";
import classes from "./Button.module.css";

type ButtonProps = {
	Text: string;
	onClick: () => void;
	fullWidth?: boolean;
};

export function ButtonComponent({ Text, onClick, fullWidth }: ButtonProps) {
	const theme = useMantineTheme();

	return (
		<Button fullWidth={fullWidth} className={classes.button} onClick={onClick} color={theme.primaryColor}>
			{Text}
		</Button>
	);
}
