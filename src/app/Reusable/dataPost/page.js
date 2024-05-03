// import { useState } from "react"
// import { files } from "@/app/Config/firebase"

// function DataPost () {
   
//     const [text ,setText] = useState()
//     const [imageFile ,setimageFile ] = useState()
//     const [videoFile ,setvideoFile ] = useState()
   
//     console.log(text)


  

//     async function fileWork () {
//        try {
//         await files ({text , imageFile, videoFile})
//        } catch (error) {
//         console.log(error)
//        }
//     }

//     return<div>
//         <div>
//             <input onChange={(e) => setText(e.target.value)} placeholder="Hey! What's on your mind" />
//             <label>image</label>     <input onChange={(e) => setimageFile(e.target.files[0])} type="file" />
//             <label>video</label>     <input onChange={(e) => setvideoFile(e.target.files[0])} type="file" />
//             <button onClick={fileWork}>Post</button>
//         </div>
//     </div>
// }

// export default DataPost;
import { useState } from "react"
import { files } from "@/app/Config/firebase"

function DataPost () {
   
    const [text ,setText] = useState("")
    const [imageFile ,setImageFile] = useState(null)
    const [videoFile ,setVideoFile] = useState(null)

    async function fileWork () {
        try {
            await files ({ text, imageFile, videoFile })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <div style={{ backgroundColor: "#f0f2f5", padding: "15px", borderRadius: "10px", maxWidth: "500px", width: "100%" }}>
                <div>
                    <textarea 
                        placeholder="Hey! What's on your mind" 
                        style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <label style={{ marginRight: "10px" }}>For Images</label>
                    <input 
                        type="file" 
                        onChange={(e) => setImageFile(e.target.files[0])} 
                        style={{ marginBottom: "10px" }} 
                    />
                    <br />
                    <label style={{ marginRight: "10px" }}>For Videos</label>
                    <input 
                        type="file" 
                        onChange={(e) => setVideoFile(e.target.files[0])} 
                        style={{ marginBottom: "10px" }} 
                    />
                    <br />
                    <button 
                        onClick={fileWork} 
                        style={{ backgroundColor: "#1877f2", color: "white", padding: "8px 15px", borderRadius: "5px", border: "none", cursor: "pointer",marginLeft:"200px" }}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DataPost;
