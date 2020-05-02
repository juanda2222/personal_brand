
import React, {useState} from "react"
import "./SkillsBanner.css"




const ProgressBar = (props) => {

    let [color, setBarColor] = useState("rgb(4, 86, 163)")

    let value = props.percentage.toString()+"%"

    return (
        <div className="bar_wrapper" 
            onMouseEnter={()=>{setBarColor("rgb(7, 114, 214)")}} 
            onMouseLeave={()=>{setBarColor("rgb(4, 86, 163)")}}>
            <span className="bar" style={{width: value, backgroundColor:color}}></span>
        </div>
    )
}

const SkillsBanner = props => {
    return (
        <div>
            <span id="skills_banner_pointer"></span>
            <div className="skills_container">
                <div className="skills_tittle">
                    <h1 >Skills</h1>
                    <hr/>
                </div>
                <div style={{width:"50%"}}>
                    <h3>Python, Nodejs, Java, c#</h3>
                    <ProgressBar percentage={80}/>
                
                    <h3>Dev. Ops</h3>
                    <ProgressBar percentage={30}/>
                
                    <h3>Sql, NoSql, Biquery</h3>
                    <ProgressBar percentage={75}/>
                
                    <h3>Html, Css</h3>
                    <ProgressBar percentage={70}/>
                
                    <h3>React, React Native</h3>
                    <ProgressBar percentage={70}/>
                </div>
            </div>
        </div>
    )
}   

export default SkillsBanner;