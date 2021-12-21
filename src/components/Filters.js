import './Filters.css';

const Filters = ({filters, toggleFilters}) => {
    return (
        <div className='filters'>
            <span className={filters.showHighRated ? 'active' : ''} onClick={() => toggleFilters('showHighRated')}>Show high rated</span>
            <span className={filters.showLessCostly ? 'active' : ''} onClick={() => toggleFilters('showLessCostly')}>Show less costly</span> 
        </div>
    );
};

export default Filters;