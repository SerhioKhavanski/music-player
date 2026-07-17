import { useState, useEffect } from "react";
import { type GetTrackDetailsOutputData, getTrack } from "../dal/api-fake.ts";

export function useTrackDetail(selectedTrackId: string | null) {
    const [selectedTrack, setSelectedTrack] = useState<GetTrackDetailsOutputData | null>(null);
    useEffect(() => {
        if (!selectedTrackId) {
            setSelectedTrack(null);
            return;
        }
        // getTrack(selectedTrackId).then(json => setSelectedTrack(json.data));
        getTrack().then(json => setSelectedTrack(json.data));

    }, [selectedTrackId]);

    return {
        selectedTrack
    };
}
