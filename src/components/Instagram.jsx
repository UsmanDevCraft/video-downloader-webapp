import React, { useState } from 'react'

const Instagram = () => {

  const [ url, setUrl ] = useState({ instaVidUrl: "" });
  const [ video, setVideo ] = useState("");
  const [ img, setImg ] = useState("");
  const [ loader, setLoader ] = useState(false);
    const { instaVidUrl } = url;

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoader(true);
            const response = await fetch("http://localhost:5000/api/instagram", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({ instaVidUrl })
            });
            const json = await response.json();
            // console.log(json);
            if(json.URL.status == false){
                alert("Sorry for Inconvinience, Video not found or Internal errors.")
            }
            // console.log(json.URL.data[0].url);
            // console.log(json.URL.data[0].thumbnail);
            setImg(json.URL.data[0].thumbnail);
            setVideo(json.URL.data[0].url);
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

        <h1 className='mt-5'>Instagram Downloader</h1>

        <form onSubmit={onSubmit} className='mt-4'>
            <div className="mb-3">
                <label htmlFor="instaVidUrl" className="form-label">Instagram URL</label>
                <input type="url" className="form-control" id="instaVidUrl" name='instaVidUrl' aria-describedby="emailHelp" onChange={onChange} placeholder='Paste your Instagram url here'/>
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
        {img && (
            <div className="mt-4 container d-flex justify-content-center">
                <div>
                <a href={video}>
                <img src={img} className='image' width="400px" height="300px" alt="image" />
                </a>
                </div>
            </div>
        )}
    </div>
  )
}

export default Instagram