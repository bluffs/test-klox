import React, {useState} from 'react'
import { useQuery, gql } from '@apollo/client';

import Episode from '../Episode/Episode';
import ListCharacter from '../ListCharacter/ListCharacter'

const FEED_QUERY = gql`
    {
        episodes {
            results {
                name,
                episode,
                id
            }
        }
    }
`;

const Autoselect = () => {

    const [selected, setSelected] = useState(null);
    const { data } = useQuery(FEED_QUERY);

    /*const EpList = [
        {
            ep: 'S01E01',
            name: 'Pilot'
        },
        {
            ep: 'S01E02',
            name: 'name of ep2'
        }
    ]*/

    return (
        <div>
            Episode selected = {selected}
            {data && (<> {data.episodes.results.map((ep) => (
                <Episode key={ep.id} episode={ep.episode} name={ep.name} clicked={setSelected} />
            ))}
            </>
            )}
            {/*EpList.map((ep) => (
                <Episode key={ep.ep} episode={ep.ep} name={ep.name} clicked={setSelected} />
            ))*/}
            {selected ? <ListCharacter selected={selected} /> : null}
        </div>
    )
}

export default Autoselect
