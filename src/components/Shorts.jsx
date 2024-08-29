import React, { useState } from 'react'

const Shorts = () => {

  const [ url, setUrl ] = useState({ shortsVidUrl: "" });
    const [ video, setVideo ] = useState("");
    const [ videoTitle, setVideoTitle ] = useState("");
    const [ loader, setLoader ] = useState(false);
    const { shortsVidUrl } = url;

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoader(true);
            const response = await fetch("http://localhost:5000/api/shorts", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({ shortsVidUrl })
            });
            const json = await response.json();
            // console.log(json);
            if(json.data.status == false){
                alert("Sorry for Inconvinience, Video not found or Internal errors.")
            }
            // console.log(json.data.data.high);
            // console.log(json.data.data.title);
            setVideo(json.data.data.high);
            setVideoTitle(json.data.data.title);
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

        <h1 className='mt-5'>Shorts Downloader</h1>

        <form onSubmit={onSubmit} className='mt-4'>
            <div className="mb-3">
                <label htmlFor="shortsVidUrl" className="form-label">Shorts URL</label>
                <input type="url" className="form-control" id="shortsVidUrl" name='shortsVidUrl' aria-describedby="emailHelp" onChange={onChange} placeholder='Paste your Shorts url here'/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
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

export default Shorts
