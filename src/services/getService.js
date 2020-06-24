export default class GetService {

    getCharacterById = async(id) => {
        try {
            const res = await fetch(`https://anapioficeandfire.com/api/characters/${id}`).then(data => data.json());

            return this.transformCharacter(res);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getAllCharacters = async() => {
        try {
            const num = Math.floor(Math.random() * 30 + 1);
            const res = await fetch(`https://www.anapioficeandfire.com/api/characters?page=${num}&pageSize=10`)
                .then(data => data.json());

            return res.map(this.transformCharacter);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getAllHouses = async() => {
        try {
            const num = Math.floor(Math.random() * 30 + 1);
            const res = await fetch(`https://www.anapioficeandfire.com/api/houses?page=${num}?pageSize=10`)
                .then(data => data.json());

            return res.map(this.transformHouse);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getAllBooks = async() => {
        try {
            const res = await fetch(`https://www.anapioficeandfire.com/api/books?page=1?pageSize=10`)
                .then(data => data.json());

            return res.map(this.transformBook);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getBookById = async(id) => {
        try {
            const res = await fetch(`https://www.anapioficeandfire.com/api/books/${id}`)
                .then(data => data.json());

            return this.transformBook(res);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    transformBook({ name, authors, numberOfPages, publisher, country, mediaType, released, url }) {
        return { name, authors, numberOfPages, publisher, country, mediaType, released, url };
    }

    transformCharacter({ name, gender, born, died, culture }) {
        return { name, gender, born, died, culture };
    }

    transformHouse({ name, region, coatOfArms }) {
        return { name, region, coatOfArms };
    }
}