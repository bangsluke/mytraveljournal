import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the filter categories and their possible tags
export const FILTER_CATEGORIES = {
    Type: ["school", "work", "yearAbroad2024-25"],
    Location: ["local", "abroad"],
    Company: ["tits", "family", "extendedFamily", "university", "couple"],
    Activity: ["festival", "wedding", "airbnb", "stag", "skiing", "roadtrip", "golf"]
};

// Define the shape of the filter state
export interface FilterState {
    Type: string[];
    Location: string[];
    Company: string[];
    Activity: string[];
}

interface FilterContextType {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
    isFilterSidebarOpen: boolean;
    toggleFilterSidebar: () => void;
    activeFilterCount: number;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Initial state: Show all, except hide "local".
// This implies "Location" should have "abroad" selected, or logic should handle "empty = all".
// If we use "empty = all", then to hide "local", we must explicitly select "abroad".
// If we had 10 locations, selecting 9 is annoying. But here we validly only have "local" and "abroad".
// So selecting "abroad" effectively hides "local".
const INITIAL_FILTERS: FilterState = {
    Type: FILTER_CATEGORIES.Type,
    Location: FILTER_CATEGORIES.Location.filter(t => t !== "local"),
    Company: FILTER_CATEGORIES.Company,
    Activity: FILTER_CATEGORIES.Activity
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

    const toggleFilterSidebar = () => {
        // console.log("Toggling Filter Sidebar. Current:", isFilterSidebarOpen);
        setIsFilterSidebarOpen(prev => !prev);
    };

    // Load filters from localStorage on mount
    React.useEffect(() => {
        const savedFilters = localStorage.getItem('filters');
        if (savedFilters) {
            try {
                const parsedFilters = JSON.parse(savedFilters);
                // Simple validation to ensure structure matches
                if (parsedFilters.Type && parsedFilters.Location) {
                    setFilters(parsedFilters);
                }
            } catch (e) {
                console.error("Failed to parse filters from storage", e);
            }
        }
    }, []);

    // Save filters to localStorage on change
    React.useEffect(() => {
        localStorage.setItem('filters', JSON.stringify(filters));
    }, [filters]);

    // Calculate active filter count
    // Logic: "All filters selected is 0 filters applied". "Removing a checkbox counts as 1 additional filter".
    // So we need to sum up the Total Possible Tags and subtract the Current Selected Tags.
    // Wait, this applies per category.
    // If "Type" has 3 options. Selected is 3. Count = 0. Selected is 2. Count = 1.
    // If "Location" has 2 options. Selected is 2. Count = 0. Selected is 1 (abroad). Count = 1.
    // Sum of all difference.

    const activeFilterCount = Object.keys(FILTER_CATEGORIES).reduce((acc, categoryKey) => {
        const key = categoryKey as keyof typeof FILTER_CATEGORIES;
        const totalTags = FILTER_CATEGORIES[key].length;
        const selectedTags = filters[key].length;
        return acc + (totalTags - selectedTags);
    }, 0);

    return (
        <FilterContext.Provider value={{ filters, setFilters, isFilterSidebarOpen, toggleFilterSidebar, activeFilterCount }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
};
