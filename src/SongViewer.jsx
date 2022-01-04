import React, { useState } from 'react';
import Song from './Song.jsx'

export default function SongViewer(props) {
    const [endsongs, setEndsongs] = useState([]);
    
    if (endsongs.length > 0) {
        return(
            <>
                <form>
                    <label>Upload an endsong.json file here: </label> 
                    <input onChange={(event) => {
                        let reader = new FileReader();
                        reader.onload = (event) => {
                            setEndsongs(() => {
                                let output = endsongs.concat(JSON.parse(event.target.result));

                                return output;
                            })
                        };
                        reader.readAsText(event.target.files[0]);
                    }} type="file" accept="application/JSON" />
                </form>
                <div id="songs">
                    {
                        endsongs.map((obj, i) => {
                            return(
                                <Song name={obj.master_metadata_track_name} album={obj.master_metadata_album_album_name} artist={obj.master_metadata_album_artist_name} datetime={obj.ts} key={i} />
                            );
                        })
                    }
                </div>
            </>
        );
    } else {
        return(
        <>
            <form>
                <label>Upload an endsong.json file here: </label> 
                <input onChange={(event) => {
                    let reader = new FileReader();
                    reader.onload = (event) => {setEndsongs(endsongs.concat(JSON.parse(event.target.result)))};
                    reader.readAsText(event.target.files[0]);
                    }} type="file" accept="application/JSON" />
            </form>
            <div id="songs">
                Import an endsong.json file to begin.
            </div>
        </>
        );
    }
}