export function Carousel() {
    return (
        <section className="md:p-6">
            <h2 className="text-lg font-bold text-center p-4">MUSIC</h2>
            <div className="carousel w-full">
                <CarouselItem id={'item1'}
                              spotify={"https://open.spotify.com/embed/playlist/7oiHCfqJHjtaq3JbJhRk90?utm_source=generator"}
                              text={'This is my playlist that I\'m constantly editing, adding songs I like and removing others to create the perfect mood for me. It\'s made up of all sorts of genres, and never fails to reset my mood to get me out of any funk.'}/>
                <CarouselItem id={'item2'}
                              spotify={"https://open.spotify.com/embed/playlist/0uT4uy3DYMzs3h9wkhAbVY?utm_source=generator"}
                              text={'My favorite instrumental artist is Samuel Kim. He takes certain soundtracks from film, TV, anime, and games amd turns them into Epic/Cinematic Arrangements.'}/>
                <CarouselItem id={'item3'}
                              spotify={"https://open.spotify.com/embed/track/5w4DNXyuAZhUO4y3erBg9G?utm_source=generator"}
                              text={'My favorite song has always changed over the years, but currently it is this song.'}/>
            </div>
            <CarouselNav/>
        </section>
    )
}

type CarouselItemProps = {
    id: string
    spotify: string
    text: string
}


function CarouselItem({id, spotify, text}: CarouselItemProps) {
    return (
        <div id={id} className={"carousel-item w-full flex-col items-center text-center"}>
            <iframe style={{borderRadius: '12px'}}
                    src={spotify}
                    width={"60%"}
                    height={"152"}
                    frameBorder={"0"}
                    allow={"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}
                    loading={"lazy"}></iframe>
            <div className={"container my-4 text-sm w-3/5"}>
                <p>{text}</p>
            </div>
        </div>
    )
}

function CarouselNav() {
    return (
        <div className={"flex justify-center w-full py-2 gap-2"}>
            <a href={'#item1'} className={"btn btn-xs"}>1</a>
            <a href={'#item2'} className={"btn btn-xs"}>2</a>
            <a href={'#item3'} className={"btn btn-xs"}>3</a>
        </div>
    )
}
