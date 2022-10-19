import Image from "next/image";

const CustomImage = (props) => {

    let img = props.source

    if (img > 2022) {
        img = 'future'
    }

    return (
        <div className='relative mx-auto bg-gradient-to-b from-sky-800 dark:from-sky-400 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={`/${img}.png`} alt='missing' width='400' height='400' />
        </div>
    )
}

export default CustomImage