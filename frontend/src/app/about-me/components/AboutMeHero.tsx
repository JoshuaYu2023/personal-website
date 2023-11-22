export function AboutMeHero() {
    return (
        <div className="container mx-auto my-4 md:flex gap-12 max-md:space-y-12">
            <section className="md:my-auto md:p-6">
                <img src="images/me.jpg" alt="my wedding photo" className="block mx-auto rounded-lg w-72 h-72 md:w-72 md:h-72"/>
            </section>
            <section className="basis-5/6 md:p-6">
                <h1 className="sm:text-sm md:text-lg font-bold p-4">About Me</h1>
                <p className="p-4 bg-white bg-opacity-10 rounded-lg">Hello! My name is Joshua Yu. I was born in Albuquerque in 2001, and grew up in the Northeast Heights area. I was homeschooled from kindergarten through high-school, and I attended Rio Grande Enrichment Studies as a part of my high-school experience. During high-school, I worked as an independent "landscaper" for friends and family, mostly consisting of basic yard work/cleanup. I also attended CNM as a dual credit student, and got about halfway through to an associates degree in communications. After graduating high-school, I worked at Dion's for 4 years, working my way up to becoming the Assistant Catering Manager.<br/>I have many interests, but the ones I want to tell you about are my love for music, DND, and anime. My love for music started when I first learned the piano and violin at a young age. My love for DND started about 4 years ago, as it became a new way I could spend time with friends on a cooperative project. And my love for anime has been around since I was 5, and it has grown in the last few years as I have watched more and more.</p>
            </section>
        </div>
    )
}