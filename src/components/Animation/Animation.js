import { useState, useEffect, useRef } from "react"

// const useMyRef = (initialValue) => useState({ current: initialValue })[0]

const Animation = () => {
    const [background, setBackground] = useState('pink')

    const divRef = useRef(null)
     
    useEffect(() => {
        const onScroll = () => {
            // console.log('se hizo scroll')
            const div = divRef.current
            console.log(div)
            // const div = document.getElementById('scroll-color')
            // console.log(div.getBoundingClientRect())
        
            const { y } = div.getBoundingClientRect()
            const backgroundColor = y <= 0 ? 'orange' : 'pink'
            setBackground(backgroundColor)
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div>
            <div 
                ref={divRef}
                // id='scroll-color' 
                style={{ background, height: '180vh'}}>
                <h1>Scrollea para cambiar el color de fondo</h1>
                {/* React.createElement('button', { onClick: () => console.log('hice click)}) */}
            </div>
        </div>
    )
}

export default Animation