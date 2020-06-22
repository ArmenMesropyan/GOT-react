export default class GetCharacter {

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

    transformCharacter({ name, gender, born, died, culture }) {
        return { name, gender, born, died, culture };
    }
}