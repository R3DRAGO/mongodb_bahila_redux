import {FC} from 'react';

interface IProps {
    genreName: string
}

const GenreBadge: FC<IProps> = ({genreName}) => {
    return (
        <div>
            {genreName}
        </div>
    );
};

export {GenreBadge};