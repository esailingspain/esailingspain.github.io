import React, {useState} from 'react';

const WorkItem = (props) => {
        var {Icon, Title, Details, Class, delay, Image, link, component:IconComponent} = props;
        const [isHover, setHover] = useState(false);


        const item = IconComponent 
        ? <div style={{paddingTop: 24}}><IconComponent isHover={isHover} /></div> 
        : Image
            ? <img style={{width:60, marginTop: 24}} src={require("../../assets/image/" + Image)} alt="icon"/> 
            : <span className={Icon}></span>

        return(
            <div className={"col-md-4 work-item " + Class} data-wow-delay={delay} role="button" tabIndex={0} onMouseEnter={() => setHover(true)} onMouseLeave={()=>setHover(false)} >
                <a href={link}>
                <div className="icon">
                    {item}
                </div>
                <h2>{Title}</h2>
                </a>
                <p>{Details}</p>
            </div>
        )
}
export default WorkItem;