import { PageTitle } from './PageTitle';
import { TrackDetail } from './TrackDetail';
import { TracksList } from './TracksList';
import { useSelectedId } from "../bll/useSelectedId";

export function MainPage() {
    const {selectedId, setSelectedId} = useSelectedId()
    
    const handleClick = (id: string | null):void => {setSelectedId(id)}
    return (
        <div>
            <PageTitle />
            <div className="container">
                <div className="wrapper">
                    <TracksList 
                            onSelectTrackId = {handleClick}  
                            selectedTrackId = {selectedId}/>
                    <TrackDetail  selectedTrackId = {selectedId}/>
                </div>
            </div>
        </div>
    );
}
