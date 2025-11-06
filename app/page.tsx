import Image from 'next/image'

const news = [
    {
        date: "5.03.2025",
        text: "Joined GroupLens under Dr. Harmanpreet Kaur and Dr. Stevie Chancellor"
    }
]

export default function About() {
    return (
        <main className="flex w-full max-w-[1280px] mt-[10rem] min-h-screen">
            {/* Sidebar */}
            <aside className="w-[320px] flex-shrink-0 flex flex-col sticky top-[10rem] h-[calc(100vh-10rem)]">
                <div className='flex justify-center items-center p-4'>
                    <div className="w-full rounded-full overflow-hidden aspect-square">
                        <Image 
                            src="/images/Joel2.JPG" 
                            width={320} 
                            height={320} 
                            alt='Joel headshot' 
                            className="w-full h-full object-cover object-[center_25%]" 
                        />
                    </div>
                </div>
                <div className='flex-1 flex-col py-[2rem] overflow-y-auto'>
                    <div className='flex justify-between items-center mb-[.5rem]'>
                        <h3 className='text-2xl font-semibold'>Joel Markley</h3>
                        <p className='text-xl font-light'>he/him</p>
                    </div> 
                    <div className='flex justify-start items-center gap-x-[1rem]'>
                        <svg width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M352 348.4C416.1 333.9 464 276.5 464 208C464 128.5 399.5 64 320 64C240.5 64 176 128.5 176 208C176 276.5 223.9 333.9 288 348.4L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 348.4zM328 160C297.1 160 272 185.1 272 216C272 229.3 261.3 240 248 240C234.7 240 224 229.3 224 216C224 158.6 270.6 112 328 112C341.3 112 352 122.7 352 136C352 149.3 341.3 160 328 160z"/></svg>
                        <p className='text-lg font-light'>Minneapolis, MN</p>
                    </div> 
                    <div className='flex justify-start items-center gap-x-[1rem]'>
                        <svg width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z"/></svg>
                        <p className='text-lg font-light'>University of Minnesota</p>
                    </div> 
                    <div className='flex justify-start items-center gap-x-[1rem]'>
                        <svg width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg>
                        <a href='https://www.linkedin.com/in/joelmarkley' className='text-lg font-light underline'>LinkedIn</a>
                    </div> 
                </div>
            </aside>
            
            {/* Main content - scrollable */}
            <div className="flex-1 pl-[4rem]">
                <h1 className='text-6xl font-bold mb-[2rem]'>Joel Markley</h1>
                <p className='text-xl mb-[2rem]'>I&apos;m Joel! I&apos;m a first year Human-Computer Interaction Ph.D. student from the <a className='text-orange-600 hover:underline' href='https://grouplens.org/'>GroupLens</a> lab at the University of Minnesota. My two awesome co-advisors are <a className='text-orange-600 hover:underline' href='https://harmanpk.github.io/'>Dr. Harmanpreet Kaur</a> and <a className='text-orange-600 hover:underline' href='https://steviechancellor.com/'>Dr. Stevie Chancellor</a>.</p>
                <p className='text-xl mb-[2rem]'>Prior to starting my Ph.D., I recieved my BS in Computer Science from the University of Minnesota's College of Science &amp; Engineering. During my undergrad, I investigated proactive alternatives to reactive moderation and leveraged LLMs to scale these kinds of systems under the guidance of Dr. Kaur and Dr. Chancellor. Additionally, I worked on the <a className='text-orange-600 hover:underline' href='https://movielens.org/'>MovieLens</a> movie recommendation research project with <a className='text-orange-600 hover:underline' href='https://scholar.google.com/citations?user=uCgVKcYAAAAJ'>Dr. Daniel Kluver</a>.</p>
                <div className='w-full flex items-center gap-x-[.5rem] mt-[4rem] mb-[1rem]'>
                    <h2 className='text-3xl font-semibold'>Research Interests</h2>
                    <div className='border-b border-b-black w-full flex-1 mt-2'/>
                </div>
                <p className='text-xl mb-[2rem]'>My research interests lie at the intersection of human cognition and online communities. I'm interested in how we can develop systems to support online communities that focus on developing prosocial behavior among users instead of maintaining the immediate quality of the community's information ecosystem. <b>Currently, I&apos;m investigating how we can personalize and scale proactive moderation with a conversational moderation intervention that accounts for user characteristics.</b></p>
                <div className='w-full flex items-center gap-x-[.5rem] mt-[4rem] mb-[1rem]'>
                    <h2 className='text-3xl font-semibold'>News</h2>
                    <div className='border-b border-b-black w-full flex-1 mt-2'/>
                </div>
                {
                    news.map((_news, idx) => (
                        <div key={idx} className='w-full flex items-center gap-x-[4rem]'>
                            <h3 className='text-xl text-orange-600'>{_news.date}</h3>
                            <p className='text-lg'>{_news.text}</p>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}
