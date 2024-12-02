

export default function MainContent(props){
    return(
        <>
            <div className="details1">
                <img className="mjImg" src={props.img} alt="Image" />
                <div className="content1">
                    <div className="mapDetails1">
                        <img src={props.logo} alt="" />
                        <p>{props.location}</p>
                        <a href={props.a}>view on google maps</a>
                    </div>
                    <h1>{props.place}</h1>
                    <strong>{props.date}</strong>
                    <p>{props.content}</p>
                </div>

            </div>
        </>
    )
}