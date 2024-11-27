import { ModComponent } from './ModComponent'
import styles from './ModList.module.css'
import press_Start_2P from '@/app'

export const ModList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={`text-red-500 ${press_Start_2P.className}`}>СПИСОК МОДОВ</h1>
                <h2>От графических улучшений до дополнительных механик — каждый мод поможет вам сделать игру более увлекательной и разнообразной.</h2>
            </div>
            <div className={styles.mod_list}>
            <div className={styles.mod_list_container}>
                <div className={styles.mod_list_header}>
                    <div className={styles.header_content}>
                        <div className={styles.container_name}>Название</div>
                        <div className={styles.container_description}>Описание</div>
                    </div>
                    <div className={styles.tip}>
                        <div className={`${styles.tip_mod} bg-red-600`}>Геймплей</div>
                        <div className={`${styles.tip_mod} bg-yellow-600`}>Клиент</div>
                        <div className={`${styles.tip_mod} bg-green-600`}>Генерация</div>
                    </div>
                </div>
                <div className={styles.mods_container}>
                    <div className={styles.mods}>
                        < ModComponent text='Ad Astra' description='Путешествуйте в неизведанные миры с этим расширением, которое добавляет уникальные элементы, новые механики и захватывающие приключения в ваш игровой процесс.' color='red'/>
                        < ModComponent text='Applied Energistics 2' description='Оптимизируйте управление ресурсами с помощью системы хранения и автоматизации, позволяющей преобразовывать физические предметы в энергию и организовывать их в удобные сети.' color='red'/>
                        < ModComponent text='Avaritia' description='Откройте новые горизонты с помощью мощного контента, который включает бесконечные возможности, уникальные предметы и механики, предназначенные для истинных искателей ресурсов и экспериментов.' color='red'/>
                        < ModComponent text='Botany' description='Исследуйте мир ботаники с уникальными растениями и механиками, которые обогатят вашу игровую среду и предоставят новые возможности для создания и взаимодействия.' color='red'/>
                        < ModComponent text='Divine RPG' description='Погрузитесь в эпическое приключение с новыми измерениями, монстрами и множеством уникальных предметов, которые добавят глубину и разнообразие вашему игровому опыту.' color='red'/>
                        < ModComponent text='Deeper Caves' description='Исследуйте бесконечные подземелья с новыми биомами, монстрами и редкими ресурсами, погружая вас в таинственный и захватывающий мир подземелий.' color='red'/>
                        < ModComponent text='Draconic Evolution' description='Откройте для себя могущественную магию драконов, создавая уникальные предметы и технологии, которые изменят вашу игру, включая невероятные инструменты и оружие.' color='red'/>
                        < ModComponent text='Greg Tech' description='Расширяет возможности технологической игры, добавляя сложные механизмы, продвинутые рецепты и новые ресурсы, обогащая игровой процесс и углубляя взаимодействие с другими модами..' color='red'/>
                        < ModComponent text='Ender IO' description='Расширьте свои возможности, интегрируя различные технологии для автоматизации процессов, хранения и транспортировки ресурсов.' color='red'/>
                        < ModComponent text='Mekanism' description='Включает множество технологий для автоматизации, генерации энергии и обработки ресурсов, предлагая игрокам мощные инструменты и механизмы для создания сложных систем.' color='red'/>
                        < ModComponent text='Solar Flux Reborn' description='Позволяет игрокам создавать солнечные панели для эффективной генерации энергии, улучшая возможности управления ресурсами и устойчивое развитие.' color='red'/>
                        < ModComponent text='Thermal Dynamics' description='Расширяет возможности управления энергией и транспортировки предметов, предоставляя игрокам инструменты для оптимизации процессов в своем мире.' color='red'/>
                        < ModComponent text='Twilight Forest' description='Открывает доступ к загадочному измерению с уникальными биомами, существами и подземельями, предлагая игрокам новые приключения и исследования.' color='red'/>
                        < ModComponent text='Ambient Sounds' description='Улучшает атмосферу с реалистичными звуками для разных биомов.' color='yellow'/>
                        < ModComponent text='Better F3' description='Улучшает стандартный экран отладки, добавляя более подробную информацию и улучшая удобство использования.' color='yellow'/>
                        < ModComponent text='Better FPS' description='Оптимизирует производительность игры, снижая лаги и улучшая частоту кадров для более плавного игрового процесса.' color='yellow'/>
                        < ModComponent text='Better Ping' description='Уменьшает задержки в сетевых играх, улучшая стабильность соединения и обеспечивая более быструю реакцию на действия игрока.' color='yellow'/>
                        < ModComponent text='Better Stats' description='Расширяет возможности отображения статистики, предлагая более детализированные данные о вашем игровом процессе и достижениях.' color='yellow'/>
                        < ModComponent text='Blur' description='Добавляет эффект размытия фона, улучшая визуальное восприятие интерфейса и создавая более стильный внешний вид.' color='yellow'/>
                        < ModComponent text='Colorfull Hearts' description='Заменяет стандартные сердечки на яркие и разнообразные, добавляя индивидуальности вашему здоровью и улучшая общий визуальный стиль игры.' color='yellow'/>
                        < ModComponent text='Equipment Compare' description='Позволяет сравнивать предметы экипировки, облегчая выбор лучших предметов для вашего персонажа и улучшая игровой процесс.' color='yellow'/>
                        < ModComponent text='Falling Tree' description='Позволяет деревьям падать целиком при срубке, добавляя реалистичности игре.' color='yellow'/>
                        < ModComponent text='Fast Load' description='Ускоряет загрузку игры, улучшая производительность.' color='yellow'/>
                        < ModComponent text='Fast Quit' description='Позволяет быстро выйти из игры, экономя время.' color='yellow'/>
                        < ModComponent text='Item Physic' description='Улучшает физику предметов, придавая им реалистичное поведение при падении и взаимодействии с миром.' color='yellow'/>
                        < ModComponent text='Item Zoom' description='Позволяет увеличивать изображение предметов для более детального просмотра в инвентаре и на земле.' color='yellow'/>
                        < ModComponent text='Jade' description='Упрощает отображение информации об объектах и местоположениях в мире, улучшая навигацию и взаимодействие.' color='yellow'/>
                        < ModComponent text='JEI' description='Удобный интерфейс для просмотра рецептов и ингредиентов, упрощает крафт и исследование предметов.' color='yellow'/>
                        < ModComponent text='JER' description='Позволяет отображать информацию о блоках и предметах в мире, улучшая взаимодействие и навигацию.' color='yellow'/>
                        < ModComponent text='Mod Menu' description='Упрощает доступ к настройкам модов в игре, позволяя быстро переключаться между ними.' color='yellow'/>
                        < ModComponent text='NEA' description='Предоставляет улучшенную информацию об окружающей среде и блоках, упрощая взаимодействие с ними в игре.' color='yellow'/>
                        < ModComponent text='Screenshot Viewer' description='Упрощает просмотр и организацию ваших скриншотов, позволяя быстро находить нужные моменты.' color='yellow'/>
                        < ModComponent text='Shulker Tooltip' description='Предоставляет дополнительную информацию о содержимом шалкеров, улучшая взаимодействие с ними.' color='yellow'/>
                        < ModComponent text='Smooth Scroll' description='Обеспечивает плавную прокрутку интерфейса, улучшая навигацию по миру.' color='yellow'/>
                        < ModComponent text='Smooth Swapping' description='Обеспечивает плавный переход между предметами в инвентаре, улучшая взаимодействие.' color='yellow'/>
                        < ModComponent text='Sound Physics' description='Улучшает акустику в игре, добавляя реалистичные звуковые эффекты для различных материалов и окружений.' color='yellow'/>
                        < ModComponent text='Tips' description='Предоставляет полезные подсказки и советы во время игры, улучшая понимание механик и взаимодействий.' color='yellow'/>
                        < ModComponent text='Xaeros Minimap' description='Компактная карта, отображающая ваше местоположение и важные объекты в мире, позволяя легко ориентироваться и исследовать.' color='yellow'/>
                        < ModComponent text='Xaeros WorldMap' description='Расширенная карта мира с подробным отображением территорий и ландшафтов, позволяющая вам планировать путешествия и исследовать окружающий мир.' color='yellow'/>
                        < ModComponent text='Better Nether' description='Улучшает Нижний мир, добавляя новые биомы, блоки и существа, чтобы сделать его более разнообразным и интересным для исследования.' color='green'/>
                        < ModComponent text='Better Village' description='Превращает деревни, добавляя новые здания, NPC и улучшая взаимодействия, чтобы сделать жизнь в деревне более увлекательной.' color='green'/>
                        < ModComponent text='Better Dungeons' description='Добавляет новые подземелья с уникальными монстрами и сокровищами.' color='green'/>
                        < ModComponent text='Better End Island' description='Улучшает биомы и структуры в конце игры, добавляя новые элементы и ресурсы.' color='green'/>
                        < ModComponent text='Better Mineshafts' description='Обновляет шахты, добавляя новые пути, ресурсы и интересные детали.' color='green'/>
                        < ModComponent text='Better Strongholds' description='Улучшает крепости, делая их более интересными и разнообразными.' color='green'/>
                        < ModComponent text='Bridges' description='Добавляет новые мосты, упрощая перемещение между локациями.' color='green'/>
                        < ModComponent text='Depper Caves' description='Расширяет подземелья, добавляя новые уровни и уникальные биомы.' color='green'/>
                        < ModComponent text='Ocean Monuments' description='Добавляет разнообразие и сложность в океанские памятники, с новыми врагами и сокровищами.' color='green'/>
                        < ModComponent text='Tectonic' description='Вносит изменения в генерацию мира, добавляя реалистичные тектонические процессы и новые биомы.' color='green'/>
                        < ModComponent text='TerraBlender' description='Улучшает генерацию мира, создавая более сложные и разнообразные ландшафты с уникальными биомами.' color='green'/>
                        < ModComponent text='Terralith' description='Преобразует мир, добавляя новые биомы, структуры и детали, создавая более живописные и разнообразные ландшафты.' color='green'/>
                        < ModComponent text='Данжы & Постройки' description='И еще очень много новых стуктур, которые мы не сможем сюда поместить...' color='green'/>
                    </div>
                    <div className={styles.another}>
                            Кроме того, у нас есть еще более 150 модов, которые добавляют уникальные возможности и функционал в игру.
                        </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}