export default class ModalContentProvider {
	constructor() {
		this.modalContents = {
			portal: {
				title: 'portal',
				description: `I hope this throwaway project was tolerable for you.  Now onto the real surprise, regardless of where things stand I want you to have this... `,
			},
			faputa: {
				title: 'faputa',
				description:
					'SOSU, SOSSUUU, SOSSUUUUUUUU.   Andy misses you soooo soo much, you are his "Haku", & he regrets everything so much..... ALSO WHY IS SOSU, Nanachi & RIKO in the air.',
			},
			chopper: {
				title: 'chopper',
				description: 'I miss you & andy being together :(',
			},
			doodlebob: {
				title: 'doodlebob',
				description:
					'"Me Hoy Minoy.   YOU DOODLE! ME SPONGEBOB!   Neoy NAY NOY ME NOY NE"',
			},
			noface: {
				title: 'blackThing',
				description:
					"the bathhouse and bridge is not finish, please don't try to go. ",
			},
			chainChomp: {
				title: 'chainChomp',
				description:
					'Hoping we can one day play Mario Kart again, I am still up 5-1 so hopefully you can redeem yourself.',
			},
			office: {
				title: 'office',
				description:
					'Future headquarters inspo of hacking princesas incorporated.',
			},
			stitch: {
				title: 'stitch',
				description:
					'Ohana means familiy, and you are his family sosu.  He is so sorry and misses you deeply.',
			},
			japaneseHouse: {
				title: 'japaneseHouse',
				description:
					'nothing to see here ... *nonchalant whistle side look*- this is unfinished',
			},
			noodles: {
				title: 'noodles',
				description:
					'I hope we can still get ramen & sushi soon, i miss my baby dinosaur',
			},
			sushi: {
				title: 'sushi',
				description:
					'I hope we can still get ramen & sushi soon, i miss my baby dinosaur.',
			},
			boo: {
				title: 'BOO',
				description:
					'Hoping we can one day play Mario Kart again, I am still up 5-1 so hopefully you can redeem yourself.',
			},
			greenHeads: {
				title: 'greenHeads',
				description: '*grunt noise*',
			},
			pikachu: {
				title: 'pikachu',
				description: 'From on pika to another pika, andy really misses you.',
			},
			goingMerry: {
				title: 'Going Merry',
				description: 'I hope we can finish One Piece one day.',
			},
			bojji: {
				title: 'bojji',
				description:
					'Reminds me of us watching stars in the desert in Peru.  I hope we can go away again for August 30th.',
			},
			luffy: {
				title: 'luffy',
				description:
					'Like Luffy said in the anime to a crewmate... "I refuse your refusal in not being together."',
			},
		};
	}

	getModalInfo(portalName) {
		return this.modalContents[portalName];
	}
}
