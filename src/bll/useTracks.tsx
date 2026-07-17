import { useState, useEffect } from "react";
import { type TrackListItemOutput, getTracks } from "../dal/api-fake.ts";


export function useTracks() {
    const [tracks, setTraks] = useState<Array<TrackListItemOutput> | null>(null);
    useEffect(() => {
        getTracks().then(json => setTraks(json.data));
    }, []);
    return {
        tracks
    };
}
