import { useState } from "react"
import { useDispatch } from "react-redux";
import { Profile as ProfileType, actions } from "../features/profile";

const Profile = () => {
    const [alias , setAlias] = useState('');
    const [name , setName] = useState('');
    const dispatch = useDispatch();

    const handleSave = () => {
        const newProfile : ProfileType = {
            alias: alias,
            name: name
        }

        dispatch(actions.changeProfile(newProfile));
       // dispatch(actions.changeAlias(alias));
       // dispatch(actions.changeName(name));
    }

    const handleReset = () => {
        dispatch(actions.resetProfile());
        setAlias('');
        setName('');
    }

    return (
        <>
            <h3>User profile</h3>
            <section>
                Alias:
                <input type="text" value={alias} onChange={e => setAlias(e.target.value)} />
            </section>
            <section>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </section>

            <button onClick={handleSave}>Save</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default Profile;