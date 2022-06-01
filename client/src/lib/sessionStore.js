import {writable} from 'svelte/store'

export const user = writable(false);
export const blogDraft = writable({
    title:"",
    short_title:"",
    author:"",
    body:"",
})

// # Editor Generation

// This is generated through the editor! It's super nice and has a realtime preview of the Markdown input; additionally, i've done it so that you can edit how the markdown displays i.e. the image below:

// ![This image has a caption on the bottom that you enter through markdown](https://aznmknfzgxpvupoqbxbn.supabase.co/storage/v1/object/public/photos/blog-photos/editor-setup.png)

