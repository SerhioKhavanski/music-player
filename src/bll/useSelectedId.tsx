import { useState } from "react";

export function useSelectedId() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    return {
        selectedId,
        setSelectedId
    };
}
