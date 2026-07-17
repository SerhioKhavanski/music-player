export type GetTrackDetailsOutputData = {
    id:string
    attributes:{
        title: string
        lyrics: string | null
    }
}
export type TrackListItemOutput = {
    id:string 
    attributes: TrackListItemOutputAttributes
}
type AttachmentDto = {
    url:string
}
type TrackListItemOutputAttributes={
        title:string
        attachments:Array<AttachmentDto>
    }


export const getTrack= (selectedTrackId:string) =>{
    const promise: Promise<{data:GetTrackDetailsOutputData}> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/'+selectedTrackId,{
    headers:{
        'api-key':'332f2e3f-8919-4562-981d-3178b715a51d'
    }
    }).then(res=>res.json())
    return promise
}

export const getTracks = () => {
    const promise: Promise<{data:Array<TrackListItemOutput>}> =  fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks',{
    headers:{
        'api-key':'332f2e3f-8919-4562-981d-3178b715a51d'
    }
    }).then(res=>res.json())
    return promise
}