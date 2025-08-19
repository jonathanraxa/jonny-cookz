'use server'; // special directive - creates a server action
import { redirect } from "next/navigation";
// all fuctions defined in here are treated as server actions
// funct executes on the server

import { saveMeal } from "./meals";

// uses the FormData classes in JS
export const shareMeal = async (formData) => {
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
    await saveMeal(meal);
    redirect('/meals');
};
