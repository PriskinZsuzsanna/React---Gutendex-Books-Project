
import Icon from './favicon.ico'

const Header = ({ setNewTopic, prevPage, nextPage, filterBooks, query, setQueryValue }) => {


    return (
        <div className='header'>
            <div className='header-title'>
                <img src={Icon} alt="" />
                <h1>Project Gutenberg Books</h1>
            </div>
            <div className='form'>
                <h3>Pick a category</h3>
                <div className='form-inline'>

                    <button className='prev' onClick={prevPage}>Prev</button>
                    <form>
                        <select name="select" id="select" onChange={setNewTopic}>
                            <option value="select">Select</option>
                            <option value="children">Children</option>
                            <option value="fiction">Fiction</option>
                            <option value="family">Family</option>
                            <option value="beauty">Beauty</option>
                            <option value="good&evil">Good vs Evil</option>
                            <option value="coming&of&age">Coming of age</option>
                            <option value="power">Power</option>
                            <option value="justice">Justice</option>
                            <option value="romance">Romance</option>
                        </select>
                    </form>
                    <button className='next' onClick={nextPage}>Next</button>

                </div>
            </div>

            <div className="filter">
                <h3>Find a book</h3>
                <input type="search" value={query} onChange={setQueryValue} />
              
            </div>
        </div>
    )
}

export default Header
