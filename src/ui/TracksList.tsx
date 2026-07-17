import { TaskItem } from "./TrackItem"
import { useTracks } from "../bll/useTracks.tsx"
import styles from "./TracksList.module.css"
type Props = {
    selectedTrackId: string | null
    onSelectTrackId: (id:string|null) => void
}

export function TracksList({onSelectTrackId,selectedTrackId}: Props){


    const {tracks} = useTracks()


    if(!tracks){
        return (
            <span className="alert">Loading...</span> 
        )
    }

    if(tracks.length===0){
        return (
            <span className="alert">No tracks</span> 
        )
    }

    const handleResetClick = ()=>{onSelectTrackId?.(null)} 
    return(
        <ul className={styles.tracks} >
            <div className="controls">
                <button className="reset" onClick={handleResetClick} >Reset selection</button>
                <hr />
            </div>
          {tracks.map(track=> {
            return(
                <TaskItem   key = {track.id} 
                            track = {track} 
                            onSelect = {onSelectTrackId}
                            isSelect = {track.id === selectedTrackId}/>
            )
            }
          )
        }
        </ul>
    )
}

