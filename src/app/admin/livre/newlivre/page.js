import NewLivre from "@/components/livresComponents/newLivre";
import { fetchEditeur } from "@/services/editeurService";
import { fetchSpecialite } from "@/services/specialiteService";
import { fetchAuteur } from "@/services/auteurService";
const getEditeurs = async () => {
    const data = await fetchEditeur()
    return data;
}
const getSpecialites = async () => {
    const data = await fetchSpecialite()
    console.log(data)
    return data;
}
const getAuteurs = async () => {
    const data = await fetchAuteur()
    return data;
}
const NewLivrePage = async () => {
    const editeurs = await getEditeurs()
    const specialites = await getSpecialites()
    const auteurs = await getAuteurs()

    return (
        <div>
            <NewLivre LesEditeurs={editeurs} lesSpecialites={specialites}
                lesAuteurs={auteurs} />
        </div>
    )
}
export default NewLivrePage