import React, { useState } from 'react'
import '../App.css'

const Youtube = () => {

    const [ url, setUrl ] = useState({ ytVidUrl: "" });
    const [ video, setVideo ] = useState("");
    const [ videoTitle, setVideoTitle ] = useState("");
    const [ loader, setLoader ] = useState(false);
    const { ytVidUrl } = url;

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoader(true);
            const response = await fetch("https://videos-downloader-backend-nu.vercel.app/api/youtube", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({ ytVidUrl })
            });
            const json = await response.json();
            // console.log(json);
            // console.log(json.URL.status);
            if(json.URL.status == false){
                alert("Sorry for Inconvinience, Video not found or Internal errors.")
            };
            // console.log(json.URL.data.video);
            // console.log(json.URL.data.title);
            setVideo(json.URL.data.video);
            setVideoTitle(json.URL.data.title);
            setLoader(false);
        } catch (error) {
            // console.log(error)
        }
    };

    const onChange = (e) => {
        setUrl({...url, [e.target.name]: e.target.value});
    };

  return (
    <div className='container'>

        <h1 className='mt-5'>Youtube Downloader</h1>

        <form onSubmit={onSubmit} className='mt-4'>
            <div className="mb-3">
                <label htmlFor="ytVidUrl" className="form-label">Youtube URL</label>
                <input type="url" className="form-control" id="ytVidUrl" name='ytVidUrl' aria-describedby="emailHelp" onChange={onChange} placeholder='Paste your youtube url here' />
            </div>
            <button type="submit" className="btn btn-primary" disabled={!url}>Submit</button>
        </form>

        
        {loader && (
            <div className="mt-4 container d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )}

        {/* Conditionally render the video player and download link */}
        {video && (
            <div className="mt-4 container d-flex justify-content-center text-center">
                <div>
                <h3>{videoTitle}</h3>
                <video className='video' width="400" height="300" controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
        )}
    </div>
  )
}

export default Youtube
