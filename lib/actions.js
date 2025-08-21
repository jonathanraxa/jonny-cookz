'use server'; // special directive - creates a server action
import { redirect } from "next/navigation";
// all fuctions defined in here are treated as server actions
// funct executes on the server

import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";


const isInvalidText = (text) => !text || (typeof text === 'string' && text.trim() === '');
// uses the FormData classes in JS
export const shareMeal = async (prevState, formData) => {
    // store this to the database
    // store image in a file system
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };

    // validating server-side
    // if ONE of these values is false, then return invalid
    const isInvalid = [
        'title',
        'summary',
        'instructions',
        'image',
        'creator',
        'creator_email'].some(val => {
            if (val === 'creator_email' && !meal[val].includes('@')) return true;
            if (val === 'image' && !meal[val] && meal[val].size === 0) return true;
            return isInvalidText(meal[val]);
        })

    if (isInvalid) {
        return {
            message: 'Invalid input data provided.',
        }
    }

    await saveMeal(meal);

    // tells next to revalidate cache that blongs to a certain route path
    // nextJs throws away the cache for this page
    revalidatePath('/meals');
    redirect('/meals');
};
