'use client'

import styles from './DonateMain.module.css'
import CheapStatus from './CheapStatus'
import Image from 'next/image'
import ExpensiveStatus from './ExpensiveStatus'

import { TableTitle } from './TableTitle'
import { cheapData, expensiveData } from './constants'
import { Status } from './Status'
import { useUserData } from '@/hooks/useUserData'
import { FaWallet } from "react-icons/fa";
import { ArrowDownIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export const DonateMain = () => {

  const { userData } = useUserData();


  const [scrolledTop, setScrolledTop] = useState(false);
  const [scrolledContainer, SetScrolledContainer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = document.documentElement.clientHeight;
  
      setScrolledTop(scrollPosition > viewportHeight * 0.4);
      SetScrolledContainer(scrollPosition > viewportHeight * 0.7);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.DonateMain}>
      <div className={styles.status_content}>

        <div className={`${styles.top} ${scrolledTop ? styles.scrolled : ''}`}>
          <Image
            className={styles.bee} 
            src='/bee.gif'
            alt='bee'
            width={300}
            height={300}
            quality={100}
          />
          <Image
            className={styles.allay} 
            src='/allay.gif'
            alt='bee'
            width={200}
            height={200}
            quality={100}
          />
          <Image
            className={styles.island} 
            src='/island.png'
            alt='bee'
            width={600}
            height={600}
            quality={100}
          />

          
          <div className={styles.radial}></div>
          <div className={styles.line}></div>
          <div className={styles.red}></div>
          <div className={styles.radial}></div>

          <div className={styles.title}>
            <h4 className={`text-white`}>Магазин привилегий</h4>
          </div>

          <div className={styles.status_container}>
            <div className={styles.statuses}>
              {cheapData.map(({ src, statusClass, statusName, price, buttonColor }) => (
              <CheapStatus
                key={statusClass}
                src={src}
                statusClass={statusClass}
                statusName={statusName}
                price={price}
                buttonColor={buttonColor}
              />
            ))}
              {expensiveData.map(({ src, statusClass, statusName, price, buttonColor }) => (
                <ExpensiveStatus
                  key={statusClass}
                  src={src}
                  statusClass={statusClass}
                  statusName={statusName}
                  price={price}
                  buttonColor={buttonColor}
                />
              ))}
            </div>
        </div>
        <div className={styles.balance}>
          <div className={styles.balance_container}>
            <a href='#improve'>Подробнее<ArrowDownIcon size={16}/></a>
          </div>
          {userData?.balance && 
          <div className='flex flex-row gap-2 items-center'>
            <FaWallet /><p>Ваш баланс:</p><span>{userData.balance}₽</span>
          </div>
          }
        </div>
        </div>
        <div className={`${styles.donate_container} ${scrolledContainer ? styles.scrolled : ''}`}>
          <div className='flex flex-col relative'>
            <h4 id='improve'>Стань лучше других.<br />Подробнее в деталях.</h4>

            <div className={styles.line}></div>
            <div className={styles.radial_2}></div>
            <div className={styles.sky}></div>

          </div>
          <div className={styles.donate_table}>
            <div className={styles.donate_table_header}>
              <div className={styles.heading} />
              <div className={styles.donate_table_statuses}>
                <TableTitle src='/vip_picture.png' text='Vip' background='bg_0' border='' price='99₽'/>
                <TableTitle src='/premium_picture.png' text='Premium' background='bg_1' border='' price='299₽'/>
                <TableTitle src='/deluxe_picture.png' text='Deluxe' background='bg_2' border='' price='499₽'/>
                <TableTitle src='/ultra_picture.png' text='ULTRA' background='bg_3' border='border_ultra' price='999₽'/>
                <TableTitle src='/legend_picture.png' text='LEGEND' background='bg_4' border='border_legend' price='1499₽'/>
              </div>
            </div>
            <div className={styles.top_skills}>
              <Status
                text="Кит набор Vip"
                icons={['check', 'check', 'check', 'check', 'check']}
                kit={true}
                src="/image.png"
              />
              <Status
                text="Кит набор Premium"
                icons={['xmark', 'check', 'check', 'check', 'check']}
                kit={true}
                src="/image.png"
              />
              <Status
                text="Кит набор Deluxe"
                icons={['xmark', 'xmark', 'check', 'check', 'check']}
                kit={true}
                src="/image.png"
              />
              <Status
                text="Кит набор ULTRA"
                icons={['xmark', 'xmark', 'xmark', 'check', 'check']}
                kit={true}
                src="/image.png"
              />
              <Status
                text="Кит набор LEGEND"
                icons={['xmark', 'xmark', 'xmark', 'xmark', 'check']}
                kit={true}
                src="/image.png"
              />
              <Status text="" icons={['none', 'none', 'none', 'none', 'none']} />    
              <Status text="Сохранение инвентаря" icons={['check', 'check', 'check', 'check', 'check']} />
              <Status text="Сохранение брони " icons={['check', 'check', 'check', 'check', 'check']} />
              <Status text="Сохранение опыта" icons={['check', 'check', 'check', 'check', 'check']} />
              <Status text="Писать цветным в чате" icons={['xmark', 'xmark', 'xmark', 'xmark', 'check']} />
              <Status text="" icons={['none', 'none', 'none', 'none', 'none']} />
              <Status text="Команда /feed" icons={['check', 'check', 'check', 'check', 'check']} />
              <Status text="Команда /near" icons={['check', 'check', 'check', 'check', 'check']} />
              <Status text="Команда /repair" icons={['check', 'check', 'check', 'check', 'check']} />
              <Status text="Команда /enderchest" icons={['check', 'check', 'check', 'check', 'check']} />
              <Status text="Команда /fly" icons={['xmark', 'check', 'check', 'check', 'check']} />
              <Status text="Команда /back" icons={['xmark', 'check', 'check', 'check', 'check']} />
              <Status text="Команда /repairall" icons={['xmark', 'check', 'check', 'check', 'check']} />
              <Status text="Команда /xt" icons={['xmark', 'xmark', 'check', 'check', 'check']} />
              <Status text="Команда /tppos" icons={['xmark', 'xmark', 'check', 'check', 'check']} />
              <Status text="Команда /exp" icons={['xmark', 'xmark', 'check', 'check', 'check']} />
              <Status text="Команда /firework" icons={['xmark', 'xmark', 'check', 'check', 'check']} />
              <Status text="Команда /jump" icons={['xmark', 'xmark', 'xmark', 'check', 'check']} />
              <Status text="Команда /heal" icons={['xmark', 'xmark', 'xmark', 'check', 'check']} />
              <Status text="Команда /god" icons={['xmark', 'xmark', 'xmark', 'check', 'check']} />
              <Status text="Команда /speed" icons={['xmark', 'xmark', 'xmark', 'xmark', 'check']} />
              <Status text="Команда /vanish" icons={['xmark', 'xmark', 'xmark', 'xmark', 'check']} />
              <Status text="Команда /top" icons={['xmark', 'xmark', 'xmark', 'xmark', 'check']} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.radial}></div>
      <div className={styles.line}></div>
    </div>
  )
}
