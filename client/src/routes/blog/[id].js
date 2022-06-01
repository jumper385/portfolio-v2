import { supabase } from "$lib/supabaseClient";

export async function get({params}) {
    const {data} = await supabase.from('blog').select().eq('id',params.id).single()
    if (data) {
        return {
            body: {data}
        }
    }
    return {
        status: 404
    }
}