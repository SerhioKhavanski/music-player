import { useTrackDetail } from "../bll/useTrackDetail.tsx"
import styles from "./TrackDetail.module.css"

type Props ={
    selectedTrackId: string | null
}

export function TrackDetail({selectedTrackId}:Props) {

    const {selectedTrack} = useTrackDetail(selectedTrackId)
    return (
        <div className={styles.track}>
            <h2>Описание</h2>
            {!selectedTrack && !selectedTrackId && 'Track is not selected'}
            {!selectedTrack && selectedTrackId && 'Loading...'}
            {selectedTrack && selectedTrackId && selectedTrack.id !== selectedTrackId && 'Loading...'}
            {selectedTrack &&
            <div>
                <h3>{selectedTrack.attributes.title}</h3>
                <h4>Текст</h4>
                <p>
                {selectedTrack.attributes.lyrics??'нет текста'}
                </p>
            </div>
            }
        </div>
    );
}
