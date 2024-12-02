import globe from "../assets/globe.png"
export default function Header(){
    return(
        <>
            <div className="header">
                <img src={globe} alt="globe icon" />
                <h1>Travel Journey</h1>
            </div>
        </>
    )
}