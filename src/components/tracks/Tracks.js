import React from 'react'
import TrackCard from './TrackCard'
import './Tracks.css'
const Tracks = () => {
    return (
        <div>
            <h1 className="heading">TRACKS</h1>
            <div className="track-grid">
            <TrackCard/>
            <TrackCard/>
            <TrackCard/>
            <TrackCard/>
            <TrackCard/>
            <TrackCard/>
            </div>
        </div>
    )
}

export default Tracks
