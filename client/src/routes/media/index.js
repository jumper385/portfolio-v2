import {supabase} from '$lib/supabaseClient'

export async function get() {
    try {
        const {data, error} = await supabase.storage.from('photos').list('blog-photos')

        let getUrls = data.map(async e => {
            let publicUrl = await supabase.storage.from('photos').getPublicUrl(`blog-photos/${e.name}`)
            return {
                ...e, 
                ...publicUrl.data
            }
        })

        let blogPhotos = await Promise.all(getUrls)

        return {
            body: {
                blogPhotos
            }
        }
    } catch (error) {
        return {
            status:404, 
            error
        }
    }
}