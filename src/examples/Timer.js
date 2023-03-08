import { Timer } from "../components/Timer"

export default function TimerExamples(){
    return (
        <div>
           <Timer duration={2 * 60 * 1000}/>
        </div>
    )
}