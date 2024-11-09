import press_Start_2P from '@/app'
import styles from './DonateMain.module.css'
import CheapStatus from './CheapStatus'
import ExpensiveStatus from './ExpensiveStatus'

import { TableTitle } from './TableTitle'
import { cheapData, expensiveData } from './constants'
import { Status } from './Status'

export const DonateMain = () => {

  return (
    <div className={styles.DonateMain}>
      <div className={styles.title}>
        <h1 className={`text-white ${press_Start_2P.className}`}>МАГАЗИН ПРИВИЛЕГИЙ</h1>
      </div>
      <div className={styles.status_content}>
        <div className={styles.status_container}>
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
        </div>
        <div className={styles.status_container}>
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
  )
}
