import React from "react";
import styles from "./styles.module.css";

export const MainRules = () => {
  return (
    <div className={styles.MainRules}>
      <div className={styles.mainContainer}>
        <div className={styles.holder_content}>
          <div className={styles.title}>
            <h4>ИГРОВЫЕ ПРАВИЛА</h4>
            <p>
              ВСЕ ПРАВИЛА ВСТУПАЮТ В СИЛУ С ТОГО МОМЕНТА, КОГДА ВЫ ЗАШЛИ НА
              СЕРВЕР.
            </p>
          </div>

          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.title_container}>
                <h4>Раздел 1. Основные правила</h4>
              </div>
              <div className={styles.info}>
                <div className={styles.inputs}>
                  <p>
                    1.1. Пользуясь нашими сервисами и серверами, пользователи
                    тем самым соглашаются со всеми правилами, перечисленными
                    ниже. Если пользователь не согласен с ними, то он обязуется
                    прекратить использование сервисов и серверов проекта.
                  </p>
                  <p>
                    1.2. Незнание правил не освобождает пользователя от
                    ответственности.
                  </p>
                  <p>
                    1.3. Запрещена продажа и покупка игровых ресурсов за
                    реальные ценности, а также запрещен обмен игровых ресурсов
                    на что-либо, не относящиеся к проекту «Эпоха Блоков».
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Блокировка аккаунта сроком - навсегда]
                    </span>
                  </p>
                  <p>
                    1.4. За свой игровой аккаунт отвечаете только Вы и никто
                    другой. Администрация не возвращает ресурсы, потерянные в
                    результате взлома или передачи аккаунта.
                  </p>
                  <p>
                    1.5. Запрещены ники содержащие в себе нецензурные выражения,
                    оскорбление/унижение кого-либо, упоминие родных, названия
                    проектов и ники администрации проекта. В таком случае у
                    пользователя есть 1 час на смену никнейма с помощью сервсиса
                    на сайте или перенос вещей на другой аккаунт для избежание
                    наказания. <br /> Наказание:
                    <span className={styles.ban}>
                       [Блокировка аккаунта сроком - навсегда]
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.title_container}>
                <h4>Раздел 2. Cервер</h4>
              </div>
              <div className={styles.info}>
                <div className={styles.inputs}>
                  <p>
                    2.1. Запрещено использовать, хранить, распространять
                    стороннее ПО. Разрешённые ПО: Кликеры, макросы Дополнительно
                    запрещённые: - Программы контролируемо замедляющие интернет
                    соединение. - Программы, которые изменяют реестр
                    операционной системы для получения преимущества над другими
                    пользователями. {""}
                    <br />
                    <br />
                    {""} Программы позволяющие внедрять различные изменения в
                    игру.
                    <br />
                    Наказание: {""}
                    <span className={styles.ban}>
                      {""}[Блокировка адреса игрока сроком - навсегда]
                    </span>
                  </p>
                  <p>
                    2.2. Запрещено использовать баги портящие игровой процесс
                    (создание лагов на сервере, крашей клиента и т.п.).
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Блокировка аккаунта сроком от 12 часов до бессрочного, в
                      зависимости от ущерба серверу и игрокам]
                    </span>
                  </p>
                  <p>
                    2.3. Запрещены‌ ‌постройки,‌ ‌которые‌ ‌могут‌ ‌оскорбить‌
                    ‌чувства‌ ‌других‌ ‌игроков,‌ разжигающие‌ ‌межрасовую‌ ‌и‌
                    ‌межнациональную‌ ‌рознь‌ ‌и‌ ‌ненависть,‌ ‌а‌ ‌также
                    постройки,‌ ‌представляющие‌ ‌собой‌ ‌нецензурные‌
                    ‌выражения‌ ‌или‌ ‌образы.
                    <br />
                    <br />
                    Так же запрещаются постройки не имеющие смысла или создающие
                    нагрузку на сервер (Столбы, хаотично размещённые блоки, лаг
                    машины). <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Блокировка аккаунта от 1 до 3 дней и демонтаж постройки]
                    </span>
                  </p>
                  <p>
                    2.4. Запрещено причинять вред чужим регионам, заливать
                    регионы лавой или водой, засыпать песком, гравием и т.п.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                       [Блокировка аккаунта сроком - 3 дня]
                    </span>
                  </p>
                  <p>
                    2.5. Запрещено строить ловушки и места, откуда нельзя
                    выбраться, закрывать игрока блоками, а также включать режим
                    боя в регионе с целью убийства игрока. Также запрещено
                    как-либо взаимодействовать на игрока в территории с
                    выключенным режимом боя.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                       [Блокировка аккаунта сроком - 3 дня]
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.title_container}>
                <h4>Раздел 3. Валюта</h4>
              </div>
              <div className={styles.info}>
                <div className={styles.inputs}>
                  <p>
                    3.1. Администрация не замораживает срок действия привилегии
                    или услуги, если у игрока отсутствует возможность играть на
                    сервере.
                  </p>
                  <p>
                    3.2. Мы не несём ответственность за ресурсы, купленные у нас
                    сайте, в случае их потери.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.title_container}>
                <h4>Раздел 4. Пользователи</h4>
              </div>
              <div className={styles.info}>
                <div className={styles.inputs}>
                  <p>
                    4.1. Запрещен обман игроков, нарушение условий сделок и
                    мошенничество в торговых операциях. Если ресурсы, полученные
                    в результате обмана, найти не удалось, у игрока, нарушившего
                    правило, забирают ресурсы, равные по ценности, на которые он
                    обманул.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Блокировка аккаунта сроком - 3 дня]
                    </span>
                  </p>
                  <p>
                    4.2. Запрещена безвозмездная передача (дарение) предметов, а
                    также неравноценный обмен с явной выгодой одной из сторон
                    игрокам, с которыми вы не состоите в одной группе (пати).
                    Любые сделки между игроками, не находящимися в составе одной
                    группы, должны осуществляться только на взаимовыгодных и
                    равных условиях через предусмотренные игровые механики
                    торговли.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Блокировка аккаунта сроком - 3 дня, в особых случая может
                      доходить до блокировки аккаунта]
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.title_container}>
                <h4>Раздел 5. Чат</h4>
              </div>
              <div className={styles.info}>
                <div className={styles.inputs}>
                  <p>
                    5.1. Запрещено рекламировать и упоминать сообщества, группы
                    и мероприятия в социальных сетях, сайты, а также сторонние
                    ресурсы, которые не относятся к игровому процессу и проекту.
                    <br />
                    Разрешаются ссылки на видео ролики, прямые трансляции и
                    тикток ролики, контент которых принадлежит пользователям
                    имеющим статус YouTube, TikTok или Twitch на проекте или
                    сервере.
                    <br />
                    Допустимый промежуток, между отправкой таких ссылок - 20
                    минут.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 4 дня, в особых случая доходит
                      до блокировки аккаунта]
                    </span>
                  </p>
                  <p>
                    5.2. Запрещён флуд сообщениями. 3 или более одинаковых
                    сообщения или имеющих более 70% схожести с предыдущем в
                    промежуток меньше минуты.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 1 час]
                    </span>
                  </p>
                  <p>
                    5.2.1. Запрещена организация массового флуда в любой форме.
                    Под массовым флудом подразумевается засорение чата пятью и
                    более cообщениями от большого количества людей с интервалом
                    меньше 1 мин. К организации флуда относятся только
                    побудительные сообщения игрока. Пример: Кто хочет лут + в
                    чат.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 3 дня]
                    </span>
                  </p>
                  <p>
                    5.2.2 Запрещены сообщения содержащие флуд символами или
                    бессмысленные хаотичные символы. Примеры таких сообщений:
                    gggggggggggg, fdfafadfd1342rfafaf, ffffffgggggsss
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 1 час]
                    </span>
                  </p>
                  <p>
                    5.3. Запрещён спам сообщениями. 4 или более сообщения
                    подряд, без перебития другим сообщением от игрока или
                    сервера.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 1 час]
                    </span>
                  </p>
                  <p>
                    5.4. Запрещено использование всех слов которые в бан-листе
                    на площадке Twitch
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 3 часа]
                    </span>
                  </p>
                  <p>
                    5.5. Запрещено упоминание, оскорбление родственников,
                    родителей пользователя. Разрешено упоминание братьев или
                    сестёр пользователя не в грубой форме.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 5 дней]
                    </span>
                  </p>
                  <p>
                    5.6. Запрещена скрытая, прямая, а также косвенная реклама
                    проектов, относящихся к игре Minecraft, серверов с похожей
                    тематикой, либо не относящихся к проекту «Эпоха Блоков».
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 4 дня, в особых случая доходит
                      до блокировки аккаунта]
                    </span>
                  </p>
                  <p>
                    5.7. Запрещено разжигание межрасовой и межнациональной розни
                    и ненависти,сексизм, дискриминация по религиозным признакам,
                    любая пропаганда религий и вероисповеданий, а также
                    упоминание, пропагандирование террористических организаций,
                    группировок и т.п.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 12 часов]
                    </span>
                  </p>
                  <p>
                    5.8. Запрещены угрозы блокировкой аккаунта, ограничением
                    чата.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 12 часов]
                    </span>
                  </p>
                  <p>
                    5.8.1. Запрещаются любые угрозы в сторону персонала (угрозы
                    варном, снятием и т.д.) и написание многократных жалоб с
                    целью снять с должности персонал. чата.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 12 часов]
                    </span>
                  </p>
                  <p>
                    5.9. Запрещено упоминать и пропагандировать наркотические
                    вещества в любой форме.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 1 день]
                    </span>
                  </p>
                  <p>
                    5.10. Запрещены необоснованные просьбы о помощи,
                    направленные администраторам или модераторам. Когда зовете
                    их, объясните, почему они должны телепортироваться к Вам.
                  </p>
                  <p>
                    5.11. Запрещено упоминать какое-либо место (пвп арену,
                    клановый дом и т.п. места), а также какие-либо ссылки чаще,
                    чем 1 раз в минуту.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 1 час]
                    </span>
                  </p>
                  <p>
                    5.12. Запрещено писать сообщения, содержащие более половины
                    заглавных букв. Аббревиатуры не считаются нарушением данного
                    правила.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Ограничение чата сроком - 30 минут]
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.title_container}>
                <h4>Раздел 6. Администрация</h4>
              </div>
              <div className={styles.info}>
                <div className={styles.inputs}>
                  <p>
                    6.1. Администрация‌ ‌вправе‌ ‌не‌ ‌отвечать‌ ‌на‌ ‌просьбы‌
                    ‌игроков, ‌если‌ ‌они‌ ‌сформулированы‌ ‌нечетко‌ ‌или‌ ‌же‌
                    ‌их‌ ‌суть‌ ‌неясна. ‌Излагайте‌ ‌свои‌ ‌мысли‌ ‌таким‌
                    ‌образом, ‌чтобы‌ ‌они‌ ‌были‌ ‌понятны.
                  </p>
                  <p>
                    6.2. При‌ ‌несоблюдении‌ ‌правил, ‌администратор‌ ‌имеет‌
                    ‌полное‌ ‌право‌ ‌забанить‌ ‌игрока‌ ‌на‌ ‌проекте‌ ‌без‌
                    ‌объяснения‌ ‌причины.
                  </p>
                  <p>
                    6.3. Запрещено‌ ‌вводить‌ ‌администрацию‌ ‌в‌ ‌заблуждение‌
                    ‌ложными‌ ‌жалобами, ‌а‌ ‌также‌ ‌просить‌ ‌помилования,
                    ‌предоставляя‌ ‌при‌ ‌этом‌ не соответствующие
                    действительности‌ ‌доказательства.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [На усмотрение администрации]
                    </span>
                  </p>
                  <p>
                    6.4. Администраторы проекта управляют проектом строго по
                    своему усмотрению и вправе наказать игрока по причине, не
                    указанной в правилах.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [На усмотрение администрации]
                    </span>
                  </p>
                  <p>
                    6.5. Администрации сервера запрещено как-либо вмешиваться в
                    игровой процесс игроков, без критических обстоятельств или
                    серьёзной причины.
                  </p>
                  <p>
                    6.6. Администрация сервера не в праве выдавать вещи
                    созданные в креативном режиме, если это не имеет роль
                    решения проблем игроков, проведение плановых событий или
                    компенсации за предоставленную информацию.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [От 1 вговора, может доходить до снятия с должности]
                    </span>
                  </p>
                  <p>
                    6.7. Администрация сервера обязуется выполнять должностные
                    обязанности персонала сервера, и выполнять роль следящего,
                    если ни одного члена персонала нет в сети.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Выговор, на усмотрение администрации проекта]
                    </span>
                  </p>
                  <p>
                    6.8. Администратор сервера не в праве использовать режим
                    невидимки без должной причины на это.
                    <br />
                    Причины при которых администратор сервера может войти в
                    режим невидимки:
                    <br />
                    · Администратор сервера ведёт слежку за игроком сервера.
                    <br />
                    · Администратор сервера проводит плановое событие.
                    <br />
                    · Администратор сервера создаёт помеху для игрового процесса
                    игроков в локации, где он находится.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Выговор, на усмотрение администрации проекта]
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.title_container}>
                <h4>Раздел 7. Персонал</h4>
              </div>
              <div className={styles.info}>
                <div className={styles.inputs}>
                  <p>
                    7.1. Каждый член персонала обязуется беспрекословно
                    исполнять и не нарушать правила утверждённые администрацией
                    проекта.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [От 1 до 3 выговоров, на усмотрение администрации]
                    </span>
                  </p>
                  <p>
                    7.2. При обращении игрока к одному из членов персонала, член
                    персонала обязуется помочь игроку в его вопросе связанном с
                    игрой или проектом.
                    <br />
                    Член персонала может перенаправить обращение игрока к
                    другому члену персонала или администратору сервера, если
                    обращение игрока не связано с компетентностью должности
                    члена персонала.
                    <br />
                    При обращении к члену персонала по игровым функциям сервера,
                    персонал может написать игроку о неполном ознакомлении его с
                    той функцией сервера, которая была в обращении игрока,
                    только если, с момента введения функции ещё не прошло 7 дней
                    или член персонала занимает должность стажёра. В остальных
                    случаях персонал должно быть ознакомлен почти со всеми
                    интересующими игроков функциями, для того, чтобы в любой
                    момент помочь игроку с освоением сервера.
                  </p>
                  <p>
                    7.3. Каждый член персонала обязуется относиться не предвзято
                    к каждому из игроков, не обращая внимания на личные
                    неприязни или обиды.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [От 1 до 2 выговоров, на усмотрение администрации]
                    </span>
                  </p>
                  <p>
                    7.4. Каждый член персонала обязуется не распространять
                    информацию полученную в беседах персонала, в чатах персонала
                    или при письменном, или устном общении с администрацией или
                    персоналом, а так же полученную из таблиц созданных
                    администрацией, без согласия администрации.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>[От 1 до 3 выговоров]</span>
                  </p>
                  <p>
                    7.5. Члены персонала не обязаны отчитываться в чате перед
                    игроками или предъявлять какие-либо доказательства по их
                    просьбе в чате или в социальных сетях.
                    <br />
                    При просьбе предъявить доказательства на наказание со
                    стороны игрока, стоит перенаправить игрока к администратору
                    сервера или если наказание было выдано по жалобе на форуме,
                    перенаправить его на форумную тему с жалобой.
                  </p>
                  <p>
                    7.6. Члену персонала запрещено неадекватно общаться с
                    игроками проекта на сервере, в официальных группах, беседах
                    или каналах проекта.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>[От 1 до 2 выговоров]</span>
                  </p>
                  <p>
                    7.7. Член персонала обязуется провести честный обмен между
                    игроками по просьбе игроков, при проведении обмена, член
                    персонала должен снимать видео записать процесса обмена с
                    его итогом.
                    <br />
                    Обмен происходит строго по заданному плану:
                    <br />
                    1. Член персонала выясняет условия обмена между игроками по
                    их договорённости.
                    <br />
                    2. Член персонала получает обмениваемые между игроками
                    ресурсы, виртуальную валюту или другие игровые ценности.
                    <br />
                    3. Член персонала убеждается, что все условия обмена
                    выполнены.
                    <br />
                    4. Член персонала передаёт игрокам ресурсы, виртуальную
                    валюту или другие игровые ценности исходя из договорённости
                    игроков.
                    <br />
                    При нарушении членом персонала плана обмена, обмане со
                    стороны члена персонала или нарушении обязанности записи
                    видео процесса обмена следует наказание члена персонала.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Выговор, в особых случая может доходить до снятия]
                    </span>
                  </p>
                  <p>
                    7.8. ЧЛЕН 💀 персонала обязуется следить за соблюдением
                    правил сервера игроками и своевременно пресекать нарушение
                    правил утверждённых администрацией проекта.
                    <br /> Член персонала обязан пресекать нарушение сразу после
                    его обнаружения, если такого не произошло, то член персонала
                    подвергается наказанию.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>[От 1 до 2 выговоров]</span>
                  </p>
                  <p>
                    7.9. Пресекая нарушение правил член персонала обязуется
                    описать причину выданного наказания при выдаче наказания.
                    Причиной может являться номер(а) правила(ил), по
                    которому(ым) выдано наказание, краткое описание правила(ил)
                    на русском языке, так же разрешено использовать всем
                    понятный транслит английскими символами в лёгкой форме.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [Выговор, на усмотрение администрации]
                    </span>
                  </p>
                  <p>
                    7.10. Члену персонала запрещено распространять ложную
                    информацию, клеветать кого-либо.
                    <br />
                    Наказание: <span className={styles.ban}>[Выговор]</span>
                  </p>
                  <p>
                    7.11. Член персонала не имеет права злоупотреблять или
                    использовать свои полномочия во вред другим игрокам или
                    серверу в целом, либо в пользу себя, друзей или третьих лиц.
                    <br />
                    Наказание:{" "}
                    <span className={styles.ban}>
                      [От 1 до 3 выговоров, на усмотрение администрации]
                    </span>
                  </p>
                  <p>
                    7.12. Член персонала обязан соблюдать речевые нормы, быть
                    общительным, грамотным, воспитанным, вежливым и толерантным
                    по отношению ко всем игрокам проекта.
                    <br />
                    Наказание: <span className={styles.ban}>[Выговор]</span>
                  </p>
                  <p>
                    7.13. Член персонала, если наказанием является блокировка
                    аккаунта, должен предупредить нарушителя об этом в
                    глобальном чате.
                    <br />
                    Наказание: <span className={styles.ban}>[Выговор]</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.title_container}>
                <h4>Раздел 8. Выговоры</h4>
              </div>
              <div className={styles.info}>
                <div className={styles.inputs}>
                  <p>
                    8.1. У всех членов персонала есть свой список выговоров,
                    размер этого списка зависит от должности члена персонала.
                    <br />У стажёра размер этого списка равен одному, а у всех
                    остальных - трём. Если при получении выговора общее
                    количество выговоров равно размеру списка выговором, то
                    такой член персонала снимается с должности.
                  </p>
                  <p>
                    8.2. Каждый выговор имеет свой срок снятия, он равняется
                    двум неделям после получения выговора. <br />
                    Так же если член персонала получает выговор, когда у него
                    уже есть один выговор, то срок снятия первого выговора,
                    будет продлён до срока снятия второго выговора.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.radial}></div>
      <div className={styles.line}></div>
    </div>
  );
};
