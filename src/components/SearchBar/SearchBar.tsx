import "./Search.css"
import {ReactComponent as Search_Loop} from "../../assets/images/search_loop.svg";

const searchDevice = (e) => {
    e.preventDefault()
    device.setSearchOption(e.target.value)
    device.setChangedDevices(device.devices.filter(
        dev => dev.name.toLowerCase().includes(device.searchOption.toLowerCase())))
}

const Search = () => {
    return (
        <div className="search_phones">
            <Search_Loop className="search_loop"/>
            <input onChange={e =>
                searchDevice(e)}
                   className="search_phones_input"/>
        </div>
    );
};

export default Search;