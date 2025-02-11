export const Footer = () => {
    return (
        <footer className='absolute z-[90] items-center bottom-3 left-1/2 transform -translate-x-1/2 flex'>
            <div className='flex border rounded-full border-black px-4 py-0.5 items-center'>
                <a href={`tel:${+380730672127}`} className=''>+380730672127</a>
            </div>
        </footer>
    )
}