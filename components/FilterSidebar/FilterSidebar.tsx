import { Checkbox, Text, Stack, Divider, Button, CloseButton, Group } from '@mantine/core';
import { useFilter, FILTER_CATEGORIES, FilterState } from '../../context/FilterContext';
import styles from './FilterSidebar.module.css';

const FilterSidebar = () => {
    const { isFilterSidebarOpen, toggleFilterSidebar, filters, setFilters } = useFilter();

    const handleFilterChange = (category: keyof FilterState, value: string[]) => {
        setFilters(prev => ({
            ...prev,
            [category]: value
        }));
    };

    const clearFilters = () => {
        // Clear All means RESET to showing everything (ALL checked).
        setFilters({
            Type: FILTER_CATEGORIES.Type,
            Location: FILTER_CATEGORIES.Location,
            Company: FILTER_CATEGORIES.Company,
            Activity: FILTER_CATEGORIES.Activity
        });
    }

    // Helper to render checkboxes for a category
    const renderCategory = (category: keyof typeof FILTER_CATEGORIES) => (
        <div key={category} style={{ marginBottom: '1.5rem' }}>
            <Text fw={700} mb="sm" style={{ textTransform: 'capitalize' }}>{category}</Text>
            <Checkbox.Group
                value={filters[category]}
                onChange={(value) => handleFilterChange(category, value)}
            >
                <Stack gap="xs">
                    {FILTER_CATEGORIES[category].map((tag) => (
                        <Checkbox key={tag} value={tag} label={tag} />
                    ))}
                </Stack>
            </Checkbox.Group>
        </div>
    );

    const sidebarClass = `${styles.filterSidebar} ${isFilterSidebarOpen ? styles.filterSidebarOpen : styles.filterSidebarClosed}`;

    return (
        <>
            <aside className={sidebarClass}>
                <div className={styles.filterContent}>
                    <div className={styles.filterHeader}>
                        <Text size="lg" fw={700}>Filter Holidays</Text>
                        <CloseButton onClick={toggleFilterSidebar} size="lg" />
                    </div>

                    <Stack>
                        {Object.keys(FILTER_CATEGORIES).map((category) => renderCategory(category as keyof typeof FILTER_CATEGORIES))}

                        <Divider my="sm" />

                        <Button variant="outline" color="red" onClick={clearFilters}>
                            Clear All Filters
                        </Button>
                    </Stack>
                </div>
            </aside>

            {/* Overlay/Blackout if needed? Main sidebar uses it on mobile. 
            User didn't explicitly ask for blackout, but said "same fashion". 
            Main sidebar on desktop is static (no blackout). 
            But filter sidebar overlays content. 
            Ideally we should have a blackout if it overlays. 
            However, user emphasized "appear below page header". 
            Let's stick to the sidebar element for now.
        */}
        </>
    );
};

export default FilterSidebar;
