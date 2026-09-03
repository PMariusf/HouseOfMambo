export default function Home() {
    return (
        <main className='flex flex-1 flex-col items-center justify-center p-6 text-center'>
            <h1 className='title-primary text-6xl md:text-8xl mb-2'>
                House of Mambo
            </h1>

            <p className='title-secondary text-lg md:text-xl mb-10'>Bergen</p>

            <div className='flex flex-col sm:flex-row gap-4'>
                <button className='btn-primary'>Kjøp billett</button>
                <button className='btn-secondary'>Se timeplan</button>
            </div>
        </main>
    );
}
