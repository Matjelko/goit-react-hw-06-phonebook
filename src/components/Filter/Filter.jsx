import './Filter.css'
import PropTypes from 'prop-types';

const Filter = ({ onFilterChange, filter }) => {
    const handleNameFilter = (evt) => {
        onFilterChange(evt.target.value)
    }

    return (
        <div className="filter__section">
            <p className="filter__paragraph">Find contacts by name</p>
            <input
                className="filter__input"
                type="text"
                name="name"
                title="title"
                value={filter}
                onChange={handleNameFilter}
            />
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
    handleNameFilter: PropTypes.func
}

export default Filter