import {useParams} from "react-router-dom";

import {SelectedGenres} from "../../components";

const SelectedGenresPage = () => {
    const {id} = useParams();
    return (
        <div>
            <SelectedGenres key={id} id={id}/>
        </div>
    );
};

export {SelectedGenresPage};