/* eslint-disable @typescript-eslint/no-explicit-any */
// Custom hook for layout management

import { useContext } from 'react';
import { LayoutContext, LayoutData, SavedLayout } from '@/context/LayoutContext';

export const useLayout = () => {
    const context = useContext(LayoutContext);

    if (!context) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }

    return context;
};

export const useLayoutData = (): LayoutData | null => {
    const { layoutData } = useLayout();
    return layoutData;
};

export const useSavedLayouts = (): Promise<any[]> => {
    const { getSavedLayouts } = useLayout();
    return getSavedLayouts();
};

export const useUpdateLayout = () => {
    const { updateLayoutData } = useLayout();
    return updateLayoutData;
};

export const useSaveLayout = () => {
    const { saveLayout } = useLayout();
    return saveLayout;
};

export const useLoadLayout = () => {
    const { loadLayout } = useLayout();
    return loadLayout;
};

export const useDeleteLayout = () => {
    const { deleteSavedLayout } = useLayout();
    return deleteSavedLayout;
};

export const useClearLayout = () => {
    const { clearLayoutData } = useLayout();
    return clearLayoutData;
};
