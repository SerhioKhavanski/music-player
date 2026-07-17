import clsx from "clsx"
import type { TrackListItemOutput } from "../dal/api-base"
import styles from "./TracksList.module.css"

type Props ={
    track: TrackListItemOutput
    onSelect: (id:string)=>void
    isSelect: boolean
}

export function TaskItem({track,onSelect,isSelect}:Props) {
    const handleClick = () =>{onSelect?.(track.id)}
    return (
        <li onClick={handleClick}
            className= {
                    clsx({
                    [styles.track]:true,
                    [styles.selected]:isSelect,
                })
            }>

            <h3>{track.attributes.title}</h3>
            <audio src={track.attributes.attachments[0].url} controls></audio>
        </li>
    );
}
