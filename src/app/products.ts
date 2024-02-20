

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Увлажнитель воздуха Maxmoll H2O Humid-300 белый',
    price: 1448,
    description: 'Ультразвуковой настольный увлажнитель воздуха с заправочной емкостью для воды в объеме 300 мл. Корпус прибора выполнен из ABS пластика черного цвета. Корпус прибора и внутренняя емкость легко моются и дезинфицируются с помощью бытовых моющих средств. Увлажнитель питается от порта USB, номинальный потребляемый ток 250 – 350 мА. Прибор оборудован таймером на 4 или 6 часов работы.'
  },
  {
    id: 2,
    name: 'Настольная лампа CSX515 LED, 7 Вт, пластик',
    price: 4989,
    description: 'Удобный легкий светодиодный настольный светильник подойдет в использовании как для школьного так и для любого более взрослого возраста. Удобно переносить в различные места дома. Имеет 3 режима освещения, удобно регулировать при чтении книг, сенсорное управление. Дополнительные опции: установка времени, температура в комнате, дата. Светильник излучает мягкий, без мерцания, анти-синий регулируемый оттенок. Светильник с двойной головкой, держатель лампы может быть сложен, разворачивается на 180 градусов влево и вправо, И угол поворота 160 градусов вверх и вниз обеспечивает вам больший диапазон освещения и угол. Длительный срок службы батареи — 2000 мА · ч литиевая батарея, несколько способов зарядки, вы можете зарядить светильник через розетки, компьютеры и банки питания. Эта креативная портативная настольная лампа имеет небольшой размер, легко носить с собой и не занимает много места. Как в рюкзаке, так и в багаже, вы можете взять с собой этот светильник для работы и чтения.'
  },
  {
    id: 3,
    name: 'Печенье Milka Choco Cow шоколадное 200 г',
    price: 599,
    description: 'Печенье Milka с молочным шоколадом. Подходит и для того, чтобы порадовать самих себя сытным и вкусным лакомством, и для того, чтобы угостить друзей, которые по достоинству оценят ваш выбор.'
  },
  {
    id: 4,
    name: 'Мышь Xiaomi Mi Dual Mode Wireless Mouse Silent Edition белый',
    price: 4510 ,
    description: 'Беспроводное соединение с Bluetooth или крошечный USB-приемник 2.4 ГГц на нижней крышке мыши.Снижение шума при щелчках помогает вам наслаждаться спокойной обстановкой для вас и ваших соседей. Тихое скольжение и прокрутка с гладким резиновым колесом.Наслаждайтесь плавным управлением курсором, точным отслеживанием и легким выбором текста с разрешением 1300 точек на дюйм.Элегантный изгиб корпуса естественным образом регулируется на ладони. Легкий и компактный по размеру, он прост в использовании и транспортировке. Гладкая УФ-краска и точечная текстура на боковой поверхности обеспечивают больший комфорт при ношении в течение всего дня.'
  }, 
  {
    id: 5,
    name: 'SPLAT зубная паста Биокальций 100 мл',
    price: 799,
    description: 'Зубная паста Биокальций разработана SPLAT Professional для восстановления эмали и снижения чувствительности зубов. Она насыщает зубы природным кальцием, укрепляя их и восстанавливая поврежденные участки. Гидроксиапатит действует идентично пломбе, замуровывая микротрещины на поверхности эмали. Натуральный фермент папаин в сочетании с компонентом Polydon препятствуют образованию налета и зубного камня. Инновационная система Sp.White System безопасно отбеливает зубы.'
  },
  {
    id: 6,
    name: 'Корм Felix кусочки в желе форель 75 г 1 шт',
    price: 166,
    description: 'Каждый котик желает наслаждаться совершенно особенным кормом, у которого будет такой аппетитный вид и аромат, словно Вы приготовили его сами. Каждый пакетик корма для взрослых кошек аппетитные кусочки содержит нежные кусочки в сочном желе - вкуснятину, от которой кота за уши не оттащишь! Эксперты Purina, разрабатывая влажные корма для домашних любимцев, создали корм для взрослых кошек Felix аппетитные кусочки - специально для вашего любителя вкуснятины. Влажный корм для кошек Felix аппетитные кусочки - полнорационный, содержит все необходимое для здоровой активной долгой жизни.'
  },
  {
    id: 7,
    name: 'Фотопленка Kentmere PAN 400 36 шт',
    price: 7500,
    description: 'тип пленки: черно-белая,количество кадров: 36,увствительность (ISO): 400'
  },
  {
    id: 8,
    name: 'DENARI, металл, 108x170 см, черный',
    price: 12456,
    description: 'Черная напольная вешалка с органайзером для вещей в комплекте идеально впишется в пространство вашего дома, дачи, квартиры, комнаты, гардероба, зала, кабинета и даже офиса и бани. Открытый шкаф стойка быстрой сборки предназначен для хранения сумок, обуви, шляп, пиджаков, рубашек, платьев, брюк, шарфов и других вещей. Стойка для одежды позволит быстро навести порядок в прихожей или аккуратно разместить вещи в спальне, это отличная гардеробная система. Также имеется 6 функциональных полок для вещей или обуви из нетканого материала, который легко поддается мойке и не промокает. Прилагается инструкция сборки на русском и английском языке.Так же каждому покупателю высылается видеоинструкция, чтобы легче было собрать вешалку. Органайзер может быть разного цвета.Модель и размер органайзера могут отличаться.'
  },
  {
    id: 9,
    name: 'Электрогирлянда Штора цвет свечения теплый белый 3 м',
    price: 1788,
    description: 'Новогодняя гирлянда-штора это украшение, состоящее из набора маленьких светодиодных огоньков, которые соединены между собой и могут быть зацеплены за края окна, шкафа или другой поверхности. Они создают эффект мягкого свечения и добавляют праздничную атмосферу в помещение.'
  },
  {
    id: 10,
    name: 'Коврик Yoga Mat 170x60x0.6 см 183x60x0.6 см розовый',
    price: 2498,
    description: 'Коврик для фитнеса и йоги с двойным слоем - это лучший помощник при занятиях на полу и жестких поверхностях. Двойной коврик для йоги поможет избежать травм и дискомфорта в спине и поясницы, защитит ваши колени и локти во время выполнения упражнений.'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/