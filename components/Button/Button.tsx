import { Button, useMantineTheme } from "@mantine/core";
import classes from "./Button.module.css";

type ButtonProps = {
	Text: string;
	onClick: () => void;
};

export function ButtonComponent({ Text, onClick }: ButtonProps) {
	const theme = useMantineTheme();

	return (
		<Button fullWidth className={classes.button} onClick={onClick} color={theme.primaryColor}>
			{Text}
		</Button>
	);
}
