'use client';

// must be a client component b/c this catches errors on the client side as well
const Error = ({ error }) => {
    return (
        <main className='error'>
            <h1>An error occured!</h1>
            <p><i>Failed to fetch meal data. Please try again later.</i></p>
        </main>
    )
}
export default Error;