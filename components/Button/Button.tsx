import { Button, useMantineTheme } from "@mantine/core";
import classes from "./Button.module.css";
import React from 'react';

type ButtonProps = {
	children?: React.ReactNode;
	Text?: string; // Kept for backward compatibility if needed, but we'll try to migrate
	onClick: () => void;
	fullWidth?: boolean;
	disabled?: boolean;
};

export function ButtonComponent({ Text, children, onClick, fullWidth, disabled }: ButtonProps) {
	const theme = useMantineTheme();

	return (
		<Button fullWidth={fullWidth} className={classes.button} onClick={onClick} color={theme.primaryColor} disabled={disabled}>
			{children || Text}
		</Button>
	);
}
