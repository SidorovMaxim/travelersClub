import React, {createRef, useEffect} from "react";
// import about from './images/about.jpg';
import aboutMainImg1 from '../images/about1.jpg';
import aboutMainImg2 from '../images/about2.jpg';
import aboutMainImg3 from '../images/about3.jpg';
import aboutMainImg4 from '../images/about4.jpg';



const Main = props => {
	// Init props
	const {blocks, refs} = props;

	// Custom constants
	const blocksSmall = ['aboutMainChild1', 'aboutMainChild2'];

	const onClickBlocks = [
		{name: 'aboutMain', 	  delay: 8000, scrollPart: 3},
		{name: 'aboutMainChild1', delay: 4800, scrollPart: 5},
		{name: 'aboutMainChild2', delay: 3000, scrollPart: 8},
	];

	// Refs
	blocks.forEach((item, j) => {
		refs[item.name] = createRef(null);
	});

	blocksSmall.forEach((item, j) => {
		refs[item] = createRef(null);
	});	

	refs['aboutMain'] = createRef(null);

	// Custom methods
	function onClick(item, click) {
		const {name, scrollPart, delay} = item;
		
		if (refs[name].current.scrollLeft < +(refs[name].current.scrollWidth * (1 - 1 / scrollPart)).toFixed(0)) {
			refs[name].current.scrollBy({
				left: refs[name].current.scrollWidth / scrollPart + 1,
				behavior: 'smooth'
			});

		} else {
			refs[name].current.scrollTo({
				left: 0,
				behavior: 'smooth'
			});			
		}

		if (click !== undefined) {
			clearInterval(item.interval);
			item.interval = setInterval(onClick.bind(null, item), delay);
		}
	}

	

	// Default methods
	useEffect(() => {
		onClickBlocks.forEach((item, j) => {
			onClickBlocks[j].interval = setInterval(onClick.bind(null, item), item.delay);
		});
	});

	// Render
	return (
		<main>
			<div className='about-container block-container' ref={refs['about']}>
				<h2 className='about-header'>
					О компании
				</h2>
				<div className='about-main' onClick={onClick.bind(null, onClickBlocks[0])} ref={refs['aboutMain']}>
					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg1} alt='about-background-1' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>Наше агентство<br />организует отдых для клиентов<br />уже более 15 лет.</p>
						</div>
					</div>

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg1} alt='about-background-1' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>Нашими услугами воспользовались<br />уже более ______ клиентов<br />и остались довольны.</p>
						</div>
					</div>	

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg2} alt='about-background-2' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>Позвоните нам и мы подберем</p>
						</div>
					</div>
				</div>
			</div>

			<div className='about-container-child-1 block-container'>
				<div className='about-main' onClick={onClick.bind(null, onClickBlocks[1])} ref={refs['aboutMainChild1']}>
					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg1} alt='about-background-1' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>Что бы Вы не выбрали:<br />райские пляжи...</p>
						</div>
					</div>				

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg2} alt='about-background-2' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>горнолыжные курорты...</p>
						</div>
					</div>

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg3} alt='about-background-3' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>города старинной архитектуры...</p>
						</div>
					</div>

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg4} alt='about-background-4' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>современные мегаполисы...</p>
						</div>
					</div>

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg4} alt='about-background-4' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>самый лучший отдых</p>
						</div>
					</div>
				</div>
			</div>

			<div className='about-container-child-2 block-container'>
				<div className='about-main' onClick={onClick.bind(null, onClickBlocks[2])} ref={refs['aboutMainChild2']}>
					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg1} alt='about-background-1' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>Все доступные туры на рынке</p>
						</div>
					</div>				

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg2} alt='about-background-2' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>только реальные цены</p>
						</div>
					</div>

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg3} alt='about-background-3' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>индивидуальный подход</p>
						</div>
					</div>

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg4} alt='about-background-4' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>широкий бюджетный диапазон</p>
						</div>
					</div>

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg1} alt='about-background-1' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>большой опыт менеджеров</p>
						</div>
					</div>				

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg2} alt='about-background-2' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>гибкий рабочий график</p>
						</div>
					</div>

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg3} alt='about-background-3' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>удобный офис</p>
						</div>
					</div>

					<div className='about-main-child'>
						<img className='about-main-img' src={aboutMainImg4} alt='about-background-4' />
						<div className='about-main-text'>
							<p className='about-main-text-in'>только для Вас!</p>
						</div>
					</div>
				</div>
			</div>

{/*					<p>
						Что бы Вы не выбрали: различные райские пляжи либо горнолыжные курорты, города старинной архитектуры 
						или современные мегаполисы - мы подберем самый лучший отдых для Вас!
					</p>

					<p>
						Мы сами любим путешествовать и постоянно проверяем на себе различные гостиницы, экскурсии, курорты и многое другое. 
						Благодаря этому наши менеджеры имеют большой опыт и постоянно развиваются, чтобы Ваш отдых прошёл незабываемо.
					</p>

					<p>
						- Hам доступны все предложения, что есть на туристическом рынке.<br />
						- У нас есть все возможности для создания тура с индивидуальным маршрутом.<br />
						- Mы не указываем несуществующие цены.<br />
						- Mы не будем продавать тур, понимая, что турист будет им разочарован.<br />
						- Mы всегда стараемся найти тот вариант, который позволит хорошо отдохнуть в пределах выделенного бюджета.<br />
						- Bы можете нам позвонить даже в нерабочее время.<br />
					</p>*/}

			<div className='countries-container block-container' ref={refs['countries']}>
				<h2 className='countries-header'>
					Страны
				</h2>
				<div>
					
				</div>
			</div>

			<div className='news-container block-container' ref={refs['news']}>
				<h2 className='news-header'>
					Новости
				</h2>
				<div>
					
				</div>
			</div>

			<div className='contacts-container block-container' ref={refs['contacts']}>
				<h2 className='contacts-header'>
					Контакты
				</h2>
				<div>
					<p>
						+78314576317, +79081523881<br />
						г. Кстово, бул. Мира, д.1<br />
						e-mail: travel@kstovo-tur.ru
					</p>
				</div>
			</div>				
		</main>
	);
}



export default Main;