// Built on from https://ui.mantine.dev/category/buttons/#social-buttons
import { Button, ButtonProps } from "@mantine/core";
import { GithubIcon } from "@mantinex/dev-icons";
import { GoogleIcon } from "./GoogleIcon";
import classes from "./SocialButtons.module.css";

export function GoogleButton(props: ButtonProps & React.ComponentPropsWithoutRef<"button">) {
	return <Button leftSection={<GoogleIcon />} variant='default' {...props} />;
}

export function GithubButton(props: ButtonProps & React.ComponentPropsWithoutRef<"button">) {
	return <Button {...props} leftSection={<GithubIcon style={{ width: "1rem", height: "1rem" }} />} className={classes.githubButton} />;
}
