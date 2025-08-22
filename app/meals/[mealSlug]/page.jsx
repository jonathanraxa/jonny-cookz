import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getMeal } from '@/lib/meals';

import classes from './page.module.css';

// dynamic metadata
export const generateMetadata = async ({ params }) => {
    const meal = getMeal(params.mealSlug);
    if (!meal) {
        notFound();
    }
    return {
        title: meal.title,
        description: meal.summary,
    }
}

const MealDetailsPage = ({ params }) => {
    const meal = getMeal(params.mealSlug);
    if (!meal) {
        // call a special function
        // finds the closest "not found" page
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />')

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>
                        {meal.title}
                    </h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>
                        {meal.summary}
                    </p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions,
                }}>
                </p>
            </main>
        </>
    )
}

export default MealDetailsPage;

// what's this error?
// Error: Route "/meals/[mealSlug]" used `params.mealSlug`. `params` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis

// why are we doing dangerouslySetInnerHTML?