import { fetchLivreById } from "@/services/livreService"

import { fetchSpecialite } from "@/services/specialiteService";
import { fetchAuteur } from "@/services/auteurService";
import UpdateLivre from "@/components/livresComponents/updateLivre";
import { fetchEditeur } from "@/services/editeurService";
const getlivre = async (id) => {
    const data = await fetchLivreById(id)
    return data;
}
const getEditeurs = async () => {
    const data = await fetchEditeur()

    return data;
}
const getSpecialites = async () => {
    const data = await fetchSpecialite()
    return data;
}
const getAuteurs = async () => {
    const data = await fetchAuteur()
    return data;
}
const LivreUpdatePage = async ({ params }) => {
    const livre = await getlivre(params.id)
    const editeurs = await getEditeurs()
    const specialites = await getSpecialites()
    const auteurs = await getAuteurs()
    return (
        <div>
            <UpdateLivre livre={livre} LesEditeurs={editeurs}
                lesSpecialites={specialites} lesAuteurs={auteurs} />
        </div>
    )
}
export default LivreUpdatePage