import { useFormRegister } from '../hooks/useFormRegister'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const MovieFilter = (props) => {

    const [register] = useFormRegister({
        title: '',
    }, props.onChangeFilter)

    return (
        <section className='movie-filter-container'>
            <form className='movie-filter '>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
                <label htmlFor="title"></label>
                <input {...register('title', 'text')} className='no-outline' placeholder='Movies, shows and more...'/>
            </form>
        </section>
    )

}