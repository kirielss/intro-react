import { useState } from 'react';

const ANIMALS = ["gato", "cachorro", "coelho", "pombo", "hamster", "reptil"];

const SearchParams = () => {
    const [location, setLocation] = useState("")
    const [animal, setAnimal] = useState("")
    const [breed, setBreed] = useState("")
    const breeds = [];


    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location {location}
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <label htmlFor='animal'>
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) => {
                            return (
                                <option key={animal} value={animal}>
                                    {animal}
                                </option>
                            )
                        })}
                    </select>
          
                </label>
                <label htmlFor='breed'>
                    Raça
                    <select
                        id="breed"
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                        onBlur={(e) => {
                            setBreed(e.target.value);
                        }}
                    >
                        <option />
                        {breeds.map((raças) => {
                            return (
                                <option key={raças} value={raças}>
                                    {raças}
                                </option>
                            )
                        })}
                    </select>
          
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;