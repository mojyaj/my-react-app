import profilePic from './assets/dummy-profile-pic-A.jpg'

function Card() {
    return( 
        <div className="card_master">
            <div className="card_A">
                <img className="card_image" src={profilePic} alt="profile picture"></img>
                <h2>Card A</h2>
                <p>Image has no styles</p>
            </div>

            <div className="card_B">
                <img className="card_image" src={profilePic} alt="profile picture"></img>
                <h2>Card B</h2>
                <p>Profile Picture has styles: <br></br> 
                    border-radius: 50%      <br></br> 
                    max-width: 60%;         <br></br> 
                    height: auto;           <br></br> 
                    border-radius: 50%;     <br></br> 
                    margin-bottom: 10px;    <br></br> 
                </p>
            </div>

            <div className="card_C">
                <img className="card_image" src={profilePic} alt="profile picture"></img>
                <h2 className="card_title">Card C</h2>
                <p className="card_text">{"<h2> and <p>"} tags has styles: <br></br>
                    font-family: Arial, sans-serif;    <br></br>
                    margin: 0;                         <br></br>
                    color: hsl(0, 50%, 45%);          <br></br>
                </p>
            </div>
        </div>
    );
}

export default Card