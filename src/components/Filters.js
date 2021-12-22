import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../store/filtersSlice';
import './Filters.css';

const Filters = () => {
    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();
    return (
        <div className='filters'>
            <span className={filters.showHighRated ? 'active' : ''} onClick={() => dispatch(toggleFilter('showHighRated'))}>Show high rated</span>
            <span className={filters.showLessCostly ? 'active' : ''} onClick={() => dispatch(toggleFilter('showLessCostly'))}>Show less costly</span> 
        </div>
    );
};

export default Filters;