import { ChevronLeftIcon, ChevronRight, ChevronRightIcon, PlayCircleIcon } from 'lucide-react'
import styles from './Main.module.css'
import Image from 'next/image'
import { ImageRow } from './ImageRow'
import Link from 'next/link'
import { useState, useEffect } from 'react';

export const Main = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const viewportHeight = document.documentElement.clientHeight;
    
            setScrolled(scrollPosition > viewportHeight * 0.2);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    const urlArray = [
        '/Home/12.png',
        '/Home/4.png',
        '/Home/3.png',
        '/Home/8.png',
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? urlArray.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === urlArray.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <main className={styles.main}>
            <div className={styles.top_main}>
                <div className={styles.top_main_content}>
                    <video muted loop autoPlay className={styles.video}>
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                    <div className={styles.video_overllay} />
                    <div className={styles.video_bottom} />
                    <div className={styles.top_main_content_title}>
                        <div className={styles.aviable}>
                            <Image 
                                src='/anvil.gif' 
                                alt='anvil'
                                width={40}
                                height={40}
                            />
                            <div className='flex flex-col items-start'>
                                <span>Эпоха Блоков</span>
                                <p>Аркания уже доступна!</p>
                            </div>
                        </div>
                        <div className={styles.title}>
                            <h4>Лучшие сервера Minecraft с модами</h4>
                        </div>
                        <div className={styles.paragraph}>
                            <p>Добро пожаловать в мир безграничных возможностей! Исследуйте и создавайте вместе с нами.</p>
                        </div>
                        <div className={styles.links}>
                            <Link className={styles.start_play} href='#launcher'>Начать играть</Link>
                            <a className={styles.watch_trailer}>
                                <PlayCircleIcon size={16}/>Смотреть трейлер
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.radial}></div>
                <div className={styles.light}></div>
            </div>
            
            <div className={`${styles.images_container}`}>
                <div className={styles.sticky_text}>
                    <h4>Ваша галерея</h4>
                    <p>Лучшие снимки игроков попадут сюда.</p>
                </div>
                <div className={`${styles.image_blocks} ${scrolled ? styles.scrolled : ''}`}>
                    <ImageRow
                        images={[
                            { src: '/Home/1.png', height: '300px' },
                            { src: '/Home/2.png', height: '350px' },
                            { src: '/Home/3.png', height: '500px' },
                            { src: '/Home/4.png', height: '300px' },
                        ]}
                    />
                    <ImageRow
                        images={[
                            { src: '/Home/5.png', height: '350px' },
                            { src: '/Home/6.png', height: '450px' },
                            { src: '/Home/15.png', height: '300px' },
                            { src: '/Home/20.png', height: '350px' },
                        ]}
                    />
                    <ImageRow
                        images={[
                            { src: '/Home/9.png', height: '250px' },
                            { src: '/Home/10.png', height: '350px' },
                            { src: '/Home/11.png', height: '600px' },
                            { src: '/Home/12.png', height: '250px' },
                        ]}
                    />
                    <ImageRow
                        images={[
                            { src: '/Home/13.png', height: '400px' },
                            { src: '/Home/14.png', height: '300px' },
                            { src: '/Home/7.png', height: '450px' },
                            { src: '/Home/16.png', height: '300px' },
                        ]}
                    />
                    <ImageRow
                        images={[
                            { src: '/Home/17.png', height: '200px' },
                            { src: '/Home/18.png', height: '450px' },
                            { src: '/Home/19.png', height: '300px' },
                            { src: '/Home/8.png', height: '500px' },
                        ]}
                    />
                </div>

                <div className={styles.image_bottom} />
                <div className={styles.image_text}>
                    <div className={styles.text_content}>
                        <div className={styles.logo}>
                            <Image
                                width={24}
                                height={24}
                                src="/logo-top.png"
                                alt="Эпоха Блоков"
                                className={styles.logoImage}
                            />
                            <Link href="/" className={styles.link}>
                                Эпоха Блоков
                            </Link>
                        </div>
                        <span>
                            Уникальные и современные серверы Minecraft, созданные командой Эпохи Блоков.
                        </span>
                    </div>
                    <button>Подробнее</button>
                </div>
            </div>

            <div className={styles.features}>
                <div className={styles.features_title}>
                    <span>Особенности</span>
                    <div className={styles.features_header}>
                        <h3>Создай свой мир с полным набором инструментов!</h3>
                        <p>Используй мощные инструменты, чтобы создавать, развивать и расширять свой мир, делая его таким, каким ты хочешь его видеть!</p>
                    </div>
                </div>
                <div className={styles.features_container}>
                    <div className={styles.features_blocks}>
                        <div className={`${styles.block}`} style={{flex: '1.5 0 0px', border: '1px solid #222'}}>
                            <div className={styles.shadow_slider} />
                            <div className={styles.block_header}>
                                <h4>Новая геренация</h4>
                                <p>Мы внесли изменения в уникальные моды, которые отвечают за генерацию, обновив их для расширения возможностей и улучшения игрового опыта.</p>
                            </div>
                            <div className={styles.arrows}>
                                <div className={styles.arrow}>
                                    <ChevronLeftIcon size={28} absoluteStrokeWidth onClick={handlePrev}/>
                                </div>
                                <div className={styles.arrow}>
                                    <ChevronRightIcon size={28} absoluteStrokeWidth onClick={handleNext}/>
                                </div>
                            </div>
                            <Image
                                src={urlArray[currentIndex]}
                                alt='new generation images'
                                width={1920}
                                quality={100}
                                height={1080}
                                className={styles.images_slider} />
                        </div>
                        
                        <div className={styles.block} style={{flex: '1 0 0px', background: `url('/cave.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <div className={styles.shadow_slider} />
                            <div className={styles.block_header}>
                                <h4>Новые пещеры</h4>
                                <p>Мы добавили новые, уникальные пещеры, которые создадут ещё больше захватывающих возможностей для исследований.</p>
                            </div>
                        </div>
                    </div>


                    <div className={styles.features_blocks}>
                        <div className={`${styles.block}`}
                            style={{
                                border: '1px solid rgb(0, 39, 24)',
                                background: 'radial-gradient(100% 64% at 50% 100%, #002618 0%, rgb(0, 0, 0) 100%)'

                            }}
                        >
                            <div className={styles.block_header}>
                                <h4>Оптимизация</h4>
                                <p>Тысячи различных построек и данжей, которые заново создаются когда их зачистили, делая мир ещё более живым. Лута хватит на всех!</p>
                            </div>
                            <div className={styles.optimization}>
                                <h3>Использование ресурсов</h3>
                                <div className={styles.circles}>
                                    <div className={styles.circle_container}>
                                        <div className={styles.circle} style={{width: '130px'}}>
                                            <div className={styles.circleBlock}>4-5 ГБ</div>
                                        </div>
                                        <p>Память</p>
                                    </div>
                                    <div className={styles.circle_container}>
                                        <div className={styles.circle} style={{width: '150px'}}>
                                            <div className={styles.circleBlock}>40-60 %</div>
                                        </div>  
                                        <p>Процессор</p>
                                    </div>                                    
                                    <div className={styles.circle_container}>
                                        <div className={styles.circle} style={{width: '130px'}}>
                                            <div className={styles.circleBlock}>3-6 ГБ</div>
                                        </div>
                                        <p>Видеокарта</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.block_header}>
                                <h4>Новые моды</h4>
                                <p>С выходом новой версии стало возможным внедрить массу оригинальных модификаций, которые принесут больше разнообразия в игровой процесс.</p>
                            </div>
                            <div className={styles.show}>
                            <section className={styles.section}>
                                <ul className={styles.ul}>
                                    <li className={styles.li}>
                                        <div className={`${styles.icons} bg-[url('/icons/adastra.png')]`} />
                                        <div className={`${styles.icons} bg-[url('/icons/ae2.png')]`} />
                                        <div className={`${styles.icons} bg-[url('/icons/avaritia.png')]`} />
                                        <div className={`${styles.icons} bg-[url('/icons/botania.png')]`} />
                                        <div className={`${styles.icons} bg-[url('/icons/divine.png')]`} />
                                        <div className={`${styles.icons} bg-[url('/icons/ei.png')]`} />
                                        <div className={`${styles.icons} bg-[url('/icons/de.png')]`} />
                                        <div className={`${styles.icons} bg-[url('/icons/if.png')]`} />
                                        <div className={`${styles.icons} bg-[url('/icons/mekanism.png')]`} />
                                        <div className={`${styles.icons} bg-[url('/icons/tf.png')]`} />
                                        <div className={`${styles.icons} bg-[url('/icons/ts.png')]`} />
                                        <div className={`${styles.icons} bg-[url('/icons/furnance.png')]`} />
                                    </li>
                                </ul>
                                </section>
                            </div>
                        </div>
                    </div>


                    <div className={styles.features_blocks}>
                        <div 
                            className={`${styles.block}`}
                            style={{flex: '1 0 0px'}}
                        >
                            <div className={styles.block_header}>
                                <h4>Анимированные текстуры</h4>
                                <p>Тысячи различных построек и данжей, которые заново создаются когда их зачистили, делая мир ещё более живым. Лута хватит на всех!</p>
                            </div>

                            <div className={styles.amimated_video}>
                                <video muted loop autoPlay className={styles.animated}>
                                    <source src="/resources.mp4" type="video/mp4" />
                                </video>
                                <div className={styles.shadow_video}/>
                            </div>
                        </div>
                        <div 
                            className={styles.block}
                            style={{
                                flex: '1.5 0 0px',
                                background: 'radial-gradient(128% 107% at 0% 0%, #292929 0%, rgb(0, 0, 0) 77.61472409909909%)',
                                border: '1px solid rgb(30, 30, 30)'
                            }}
                        >
                            <div className={styles.block_header}>
                                <h4>Новые шрифты и GUI</h4>
                                <p>С выходом новой версии стало возможным внедрить массу оригинальных модификаций, которые принесут больше разнообразия в игровой процесс.</p>
                            </div>

                            <div className={styles.images}>
                                <div  className={styles.font_image}/>
                                <div  className={styles.compass}/>
                                <div  className={styles.map}/>
                                <div  className={styles.hud}/>
                                <div  className={styles.shadow_images}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.features_blocks}>
                        <div className={`${styles.block}`}
                            style={{
                                background: 'radial-gradient(150% 105% at 100% 100%, rgba(171, 171, 171, .25) 0%, rgba(255, 255, 255, 0) 100%)',
                                border: '1px solid rgb(30, 30, 30)'
                            }}
                        >
                            <div className={styles.block_header}>
                                <h4>Бесконечные постройки</h4>
                                <p>Тысячи различных построек и данжей, которые заново создаются когда их зачистили, делая мир ещё более живым. Лута хватит на всех!</p>
                            </div>
                        </div>
                        <div className={styles.block} 
                            style={{
                                border: '1px solid rgb(0, 70, 90)',
                                background: 'radial-gradient(94% 98% at 100% 100%, #0b4abf 0%, rgb(0, 3, 15) 100%)'
                            }}
                        >
                            <div className={styles.block_header}>
                                <h4>Новые моды</h4>
                                <p>С выходом новой версии стало возможным внедрить массу оригинальных модификаций, которые принесут больше разнообразия в игровой процесс.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.servers}>
                <div className={styles.servers_title}>
                    <span>Игровые сервера</span>
                    <div className={styles.servers_header}>
                        <h3>Уникальные игровые сервера на любой вкус!</h3>
                        <p>Исследуй миры, созданные для любого стиля игры — от знакомой классики до тяжелых технологий и космоса!</p>
                    </div>
                </div>  
                <div className={styles.servers_container}>
                    <div className={styles.server} style={{backgroundImage: `url('/Home/6.png')`, backgroundPosition: '50%'}}>
                        <div className={styles.server_style}>
                            <div className={styles.server_text}><h4>Аркания</h4>1.20.1</div>
                            <p>Погрузись в мир сложных технологий!</p>
                            <Link href='/servers'>Начать играть <ChevronRight size={18}/></Link>
                        </div>
                        <div className={styles.shadow}></div>
                    </div>
                    <div className={styles.server} style={{backgroundImage: `url('/Home/10.png')`, backgroundPosition: '50%'}}>
                        <div className={styles.server_style}>
                        <div className={styles.server_text}><h4>Технария</h4>1.19.2</div>
                            <p>Погрузись в мир сложных технологий!</p>
                            <Link href='/servers'>Начать играть <ChevronRight size={18}/></Link>
                        </div>
                        <div className={styles.shadow}></div>
                    </div>
                    <div className={styles.server} style={{backgroundImage: `url('/Home/17.png')`, backgroundPosition: '50%'}}>
                        <div className={styles.server_style}>
                        <div className={styles.server_text}><h4>Класиска +</h4>1.21.4</div>
                            <p>Погрузись в мир сложных технологий!</p>
                            <Link href='/servers'>Начать играть <ChevronRight size={18}/></Link>
                        </div>
                        <div className={styles.shadow}></div>
                    </div>
                </div>      
            </div>
            <div className={styles.launcher} id='launcher'>
                <div className={styles.launcher_container}>
                    <div className={styles.launcher_title}>
                        <div className={styles.launcher_text}>
                            <h4>Загрузи наш лаунчер легко!</h4>
                            <p>Погрузись в мир захватывающих приключений с нашим удобным, функциональным и надежным лаунчером!</p>
                        </div>
                        <div className={styles.launcher_buttons}>
                            <button>Скачать лаунчер</button>
                            <Link href='/auth'>Войти в аккаунт</Link>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <div className={styles.image_container}/>
                    </div>
                </div>
                <div className={styles.radialB}></div>
                <div className={styles.line}></div>
            </div>
        </main>
    )
}
        