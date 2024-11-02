import { Link } from "react-router-dom"
import"./Buttons.css"

const PrimaryButton = (props) => {
return (
    <div className="button primary-btn">
        <Link to="/Browse">{props.children}</Link>
    </div>
)
}

const SecondaryButton = (props) => {
return (
    <div className="button secondary-btn">
        {props.children}
    </div>
)
}

export default PrimaryButton
export {SecondaryButton}
