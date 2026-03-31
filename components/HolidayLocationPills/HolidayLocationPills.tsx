import { HoverCard, Popover, Stack, Text, UnstyledButton } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { normalizeLocationPillLabel } from "../../services/locationDisplay";
import Pill from "../Pill/Pill";

const MAX_VISIBLE = 3;

const locIcon = <LocationOnRoundedIcon />;

type HolidayLocationPillsProps = {
	locations: string[] | null | undefined;
};

export default function HolidayLocationPills({ locations }: HolidayLocationPillsProps) {
	const isMobile = useMediaQuery("(max-width: 767px)");

	if (!locations?.length) return null;

	const labels = locations
		.map((raw) => normalizeLocationPillLabel(String(raw)))
		.filter((t) => t && t !== "TBC" && t !== "n/a");

	if (!labels.length) return null;

	const visible = labels.slice(0, MAX_VISIBLE);
	const rest = labels.slice(MAX_VISIBLE);
	const useClickPopover = Boolean(isMobile);

	const moreLabel = `+${rest.length} more locations`;

	const dropdown = (
		<Stack gap={6}>
			{rest.map((name) => (
				<Text key={name} size='sm'>
					{name}
				</Text>
			))}
		</Stack>
	);

	return (
		<>
			{visible.map((text, index) => (
				<Pill key={`loc-${index}`} icon={locIcon} text={text} />
			))}
			{rest.length > 0 &&
				(useClickPopover ? (
					<Popover width={280} position='bottom' withArrow shadow='md'>
						<Popover.Target>
							<UnstyledButton
								type='button'
								aria-label={`Show ${rest.length} more locations`}
								style={{ display: "inline-flex", verticalAlign: "middle" }}>
								<Pill icon={locIcon} text={moreLabel} />
							</UnstyledButton>
						</Popover.Target>
						<Popover.Dropdown>{dropdown}</Popover.Dropdown>
					</Popover>
				) : (
					<HoverCard width={280} shadow='md' withArrow openDelay={120} closeDelay={80}>
						<HoverCard.Target>
							<span style={{ display: "inline-flex", verticalAlign: "middle", cursor: "default" }}>
								<Pill icon={locIcon} text={moreLabel} />
							</span>
						</HoverCard.Target>
						<HoverCard.Dropdown>{dropdown}</HoverCard.Dropdown>
					</HoverCard>
				))}
		</>
	);
}
