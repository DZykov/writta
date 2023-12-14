import './style.css';

export default function Treasure({ params }: { params: { id: number } }) {
    return (
        <>
            <div className="post">
                <div className="container">
                    <div dir='rtl'>
                        <div className="dropdown">
                            <div className='mx-6 my-2 p-2 bg-sky-400 shadow-lg cursor-pointer rounded-lg'>Options</div>
                            <div className="dropdown-content">
                                <input type="sumbit" defaultValue="Make private" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                <input type="sumbit" defaultValue="Make public" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                <input type="sumbit" defaultValue="Edit" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                                <input type="sumbit" defaultValue="Delete" className="my-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-600 focus:ring-opacity-80 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div style={{ '--image-url': `url(https://i.pinimg.com/736x/7e/90/43/7e9043a23a0ae24b178f14453f05a7e4.jpg)` }} className="head bg-[image:var(--image-url)] object-fill">
                        <div className="logo">writta</div>
                        <div className="info">
                            <div className="tags">
                                <i className="fa-solid fa-tag"></i>
                                <span>Coding, Programming</span>
                            </div>
                            <h1 className="title">Web Coding!</h1>
                            <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequatur
                                cupiditate incidunt cumque illo alias, odit dolorem et reprehenderit.</p>
                        </div>
                        <div className="username">Author: USERNAME</div>
                    </div>
                    <section className="details mb-5">
                        <div className="item">
                            <h5 className="item-title">Publish Date</h5>
                            <p className="item-text"><span className="item-data">May 27, 2023</span></p>
                        </div>
                        <div className="item">
                            <h5 className="item-title">Views</h5>
                            <p className="item-text"><span className="item-data">12700</span></p>
                        </div>
                        <div className="item">
                            <h5 className="item-title">Likes</h5>
                            <p className="item-text"><span className="item-data">551</span></p>
                        </div>
                        <div className="item">
                            <h5 className="item-title">Dislikes</h5>
                            <p className="item-text"><span className="item-data">151</span></p>
                        </div>
                    </section>
                    <div className="editor mb-10">
                        <h3>What is Web Coding?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cupiditate deleniti voluptas dolor, non optio
                            vitae reiciendis, eveniet ullam suscipit harum velit esse provident id! Dolore culpa omnis ullam! Atque?
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam quasi deleniti molestias
                            consequatur veniam nobis porro perferendis ex quae enim nesciunt, laborum odit quo tenetur velit
                            corrupti odio facere.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At exercitationem labore et omnis quod, sit
                            corporis beatae deleniti est totam vel eos, molestiae velit laudantium quam culpa ad ipsa ipsam!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum aspernatur provident reiciendis
                            neque nobis, esse veritatis, dolore consequuntur odit aliquid laboriosam quo eveniet facere. Minima sit
                            nobis architecto quos?</p>

                        <h4>Coding Daily, Coding All Time!</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, sint. Eveniet ex labore possimus minima
                            adipisci quasi sint ab voluptatibus, enim aliquid repudiandae magnam. Error harum distinctio sint iste
                            eos.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eos dicta facilis, fugit, ducimus
                            unde magni sit numquam omnis dolorem magnam debitis tempore aliquid esse quod laboriosam laudantium
                            voluptate ad?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident voluptatibus reiciendis
                            quae, voluptatem ut, tenetur, vel eligendi porro commodi dolore quam autem. Sint beatae repellat
                            voluptates dolorem quia dolore?</p>
                        <blockquote>
                            "In the realm of code, where logic meets creativity, a programmer finds their true wings,
                            soaring above challenges and crafting digital dreams." &mdash; ChatGPT
                        </blockquote>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nam odio iste unde laboriosam. Modi
                            dolorum ipsum aliquid labore minus fuga exercitationem sunt enim! Amet quaerat vero minima ea assumenda.
                        </p>
                        <pre className="language-python" tabIndex={0}>
                            <code className="language-python">
                                <span className="token keyword">print</span>
                                <span className="token punctuation">(</span>
                                <span className="token number">1</span>
                                <span className="token punctuation">)</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </>
    );
}