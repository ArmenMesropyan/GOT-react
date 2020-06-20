export default class GetCharacter {

    async getCharacterById(id) {
        try {
            const res = await fetch(`https://anapioficeandfire.com/api/characters/${id}`).then(data => data.json());

            return this.transformCharacter(res);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    transformCharacter({name, gender, born, died, culture}) {
        return {name, gender, born, died, culture};
    }
}