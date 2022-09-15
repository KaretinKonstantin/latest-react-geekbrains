import { BaseSyntheticEvent, Fragment } from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleAction} from "../../store/profile/actions";
import { RootState } from '../../store'

export const Profiles = () => {
    const active = useSelector((state: RootState) => state.active);
    const dispatch = useDispatch();

    const handleClick = (event:BaseSyntheticEvent) => {
        dispatch(toggleAction(event.target.checked));
    }
    return (
        <Fragment>
            <Link to="/">Home</Link>
            <h1>Profiles</h1>
            <input type="checkbox"
                   onClick={handleClick}/>
            {active && <p>Профиль</p>}
        </Fragment>
    )
}