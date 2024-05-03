// 'use client'
// import Link from "next/link";
// import { auth, provider } from "../Config/firebase";
// import { signInWithPopup, FacebookAuthProvider, signOut } from "firebase/auth";
// import { useState, useEffect } from "react";
// import { useRouter } from 'next/navigation';
// import DataPost from "../Reusable/dataPost/page";
// import { getData } from "../Config/firebase";
// import { ClientPageRoot } from "next/dist/client/components/client-page";




// function LoginPage() {

//     const router = useRouter()

//     const [user, setUser] = useState();
//     const [profileImg, setprofileImg] = useState();
//     const [data, setdata] = useState([])


//     async function facebooklogin() {

//         signInWithPopup(auth, provider).then((result) => {
//             setUser(result.user);
//             const kaam = result.user.providerData;

//             const credential = FacebookAuthProvider.credentialFromResult(result);
//             const accessToken = credential.accessToken;

//             fetch(`https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`)
//                 .then((res) => res.blob())
//                 .then((blob) => {
//                     setprofileImg(URL.createObjectURL(blob));
//                 })
//         })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     function loggout() {
//         signOut(auth)
//         setUser(null)
//     }


//     useEffect(function () {
//         getDATAA()
//     }, [])

//     async function getDATAA() {
//         const ads = await getData()
//         setdata(ads)

//     }
//     console.log(data)




//     return (
//         <div>







//                 {user ? (

//                     <>
//                      <div>
//                     <div className="container">
//                 <nav className="navbar">
//                     <div className="logo">
//                         <img src='https://github.com/hafizhammad123/working-time/blob/main/OH.png?raw=true' alt="Logo" />
//                     </div>

//                     <div className="search">
//                         <input type="text" placeholder="Search..." />
//                     </div>

//                     {user ? (
//                         <div className="">
//                             <h1 className="color">Wellcome {user.displayName}


//                                 <br />
//                                 {user.email}

//                                 <button className="BTN" onClick={loggout}>Log Out</button>

//                             </h1>
//                         </div>
//                     ) : (
//                         <h1 className="color">Wellcome Web Graph Studio</h1>
//                     )}

//                     <div className="profile">

//                         <img src={profileImg} alt="Profile" />
//                     </div>
//                 </nav>

//             </div>

//                         <DataPost />

//                        <div className="post-container">
//                             {data.map(function (item, index) {
//                                 if (item.videourl) { 
//                                                                    return (
//                                         <div key={index} className="post-card">
//                                             <div className="post-header">
//                                                 <h2>{item.work}</h2>
//                                             </div>
//                                             <div className="post-media">
//                                                 <video controls>
//                                                     <source src={item.videourl} type="video/mp4" />
//                                                 </video>
//                                             </div>
//                                             <div className="post-interactions">
//                                                 <button className="like-btn">Like</button>
//                                                 <button className="comment-btn">Comment</button>
//                                                 <button className="share-btn">Share</button>
//                                             </div>
//                                         </div>
//
//                                     );
//                                 } else {

//                                     return (
//                                         <div key={index} className="post-card">
//                                             <div className="post-header">
//                                                 <h2>{item.work}</h2>
//                                             </div>
//                                             <div className="post-media">
//                                                 {item.imaurl && <img src={item.imaurl} alt="Post" />}
//                                             </div>
//                                             <div className="post-interactions">
//                                                 <button className="like-btn">Like</button>
//                                                 <button className="comment-btn">Comment</button>
//                                                 <button className="share-btn">Share</button>
//                                             </div>
//                                         </div>
//                                     );
//                                 }
//                             })}

//                         </div>

//                         </div>

//                     </>
//                 ) : (

//                     <div>
//                     <div className="front">

//                     <button className="F-btn"  onClick={facebooklogin}>facebook login</button>
//                     </div>
//                     </div>
//                 )
//                 }








//         </div>
//     );
// }
// export default LoginPage;

'use client'


import Link from "next/link";
import { auth, provider } from "../Config/firebase";
import { signInWithPopup, FacebookAuthProvider, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import DataPost from "../Reusable/dataPost/page";
import { getData } from "../Config/firebase";
import Home from "../page";

function LoginPage() {

    const router = useRouter()

    const [user, setUser] = useState();
    const [profileImg, setprofileImg] = useState();
    const [data, setdata] = useState([])

    async function facebooklogin() {
        signInWithPopup(auth, provider).then((result) => {
            setUser(result.user);
            const kaam = result.user.providerData;
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            fetch(`https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`)
                .then((res) => res.blob())
                .then((blob) => {
                    setprofileImg(URL.createObjectURL(blob));
                })
        })
            .catch((err) => {
                console.log(err);
            });
    }

    function loggout() {
        signOut(auth)
        setUser(null)
    }

    useEffect(function () {
        getDATAA()
    }, [])

    async function getDATAA() {
        const ads = await getData()
        setdata(ads)
    }

    return (
        <div>
            {user ? (
                <>
                    <div>
                        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
                            <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div>
                                    <img src='https://media.licdn.com/dms/image/D4E16AQFrow5khaUr4g/profile-displaybackgroundimage-shrink_200_800/0/1712568416124?e=2147483647&v=beta&t=j9TbB2Cee7zBSMd7P3IxT6O7a1kGWbr_7uZXKCgc3GY' alt="Logo" style={{ width: "200px",height:"80px" }} />
                                </div>
                                <div>
                                    {user ? (
                                        <div>
                                            <h1 style={{ color: "black" }}>Welcome {user.displayName}<br />{user.email}<button style={{ backgroundColor: "#3b5998", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px", cursor: "pointer" }} onClick={loggout}>Log Out</button></h1>
                                        </div>
                                    ) : (
                                        <h1 style={{ color: "black" }}>Haris Khan</h1>
                                    )}
                                </div>
                                <div>
                                    
                                    <img src={profileImg} alt="Profile" style={{ width: "70px", borderRadius: "50%" }} />
                                </div>
                                <button style={{background:"blue"}}>Lets Chat</button>
                            </nav>
                        </div>
                        <DataPost />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            {data.map(function (item, index) {
                                return (
                                    <div key={index} className="card w-96 bg-base-100 shadow-xl">
                                        <figure><h2 className="card-title">{item.work}</h2>
                                            {item.videourl ? (
                                                
                                                <video controls style={{ maxWidth: "100%" }}>
                                                    <source src={item.videourl} type="video/mp4" />
                                                </video>
                                            ) : (
                                                <img style={{maxWidth:"100%"}} src={item.imaurl} alt="Post" />
                                            )}
                                        </figure>
                                        <div className="card-body">
                                            <div className="card-actions justify-between">
    <button className="btn btn-primary" style={{ backgroundColor: "#1877f2", color: "white", borderRadius: "5px", padding: "5px 10px", cursor: "pointer",marginBottom:"10px",margintop:"18px",marginLeft:"35px"}}>
        Like
        <span role="img" aria-label="Like" style={{ marginLeft: "5px" }}>👍</span>
    </button>
    <span style={{ marginRight: "10px" }}></span>
    <button className="btn btn-primary" style={{ backgroundColor: "#1877f2", color: "white", borderRadius: "5px", padding: "5px 10px", cursor: "pointer"}}>
        Comment
        <span role="img" aria-label="Comment" style={{ marginLeft: "5px" }}>💬</span>
    </button>
    <span style={{ marginRight: "10px" }}></span>
    <button className="btn btn-primary" style={{ backgroundColor: "#1877f2", color: "white", borderRadius: "5px", padding: "5px 10px", cursor: "pointer" }}>
        Share
        <span role="img" aria-label="Share" style={{ marginLeft: "5px" }}>📤</span>
    </button>
</div>


                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                        <button onClick={facebooklogin} style={{ padding: "10px 20px", backgroundColor: "#3b5998", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>Login with Facebook</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginPage;
