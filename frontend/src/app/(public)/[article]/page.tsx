'use client'

import CommentsSection from "@/components/comments/comments";
import Identicon from "@/components/identicon/identicon";
import { useParams } from "next/navigation";
import './style.css';

export default async function Treasure({ params }: { params: { article: string } }) {

    return (
        // `url(${fetchedUrl})`
        <>
            <div className="post">
                <div className="container">
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
                        <h4>What is Web Coding?</h4>
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
                    </div>
                </div>
            </div>
            <CommentsSection article={""} />
        </>
    );
}