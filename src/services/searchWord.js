export const fetchWord = async ({search}) =>{
    console.log(search)
    try{
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        let data = response.json()
        return data
    }catch(e){
        throw new Error('Error searching word')
    }
}