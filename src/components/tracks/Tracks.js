import React from 'react'
import TrackCard from './TrackCard'
import './Tracks.css'
const Tracks = () => {
    return (
        <div id="tracks">
            <h1 className="heading">TRACKS</h1>
            <div className="track-grid">
                <TrackCard title="Open Innovation" description="LoremIpsum LoremIpsum LoremIpsum LoremIpsum LoremIpsum "/>
            <TrackCard title="Employability" />
            <TrackCard title="Education"/>
            <TrackCard title="Food"/>
            <TrackCard title="Sustainable Development"/>
            <TrackCard title="Social Security"/>
            </div>
        </div>
    )
}

export default Tracks
