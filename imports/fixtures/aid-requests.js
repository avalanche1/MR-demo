//@flow
import type {aid} from "../client/features/main/anyone/can-see-list-of-open-aid-requests/types";
import type {aidDetails} from "../client/features/main/anyone/can-see-details-of-an-aid-request/types";
import merge from "lodash.merge";

export const forOpenRequestsList: Array<aid> = [
	{
		_id: "DFrysqkuqL",
		fromMia: true,
		title: "Javascript-разработчик для помощи c МР",
		where: {
			address: "Удалённо",
		},
		reward: 50,
		author: {
			_id: "Mia",
			name: "Мия",
			picURL:
				"https://images.pexels.com/photos/937606/pexels-photo-937606.jpeg?cs=srgb&dl=beautiful-beauty-close-up-937606.jpg&fm=jpg"
		}
	},
	{
		_id: "ubrysqkuqa",
		title: "Помочь мне с генеральной уборкой",
		where: {
			metroName: "Серпуховская",
			address: "Новолесная улица, 1",
			coordinates: [55.781565, 37.591728]
		},
		reward: 50,
		author: {
			_id: "ubrysqkuqa_u",
			name: "Королевна",
			picURL:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcwXRKA5CBlNEWRBcf0vHhoRC-4uLc5VVCH6jPbuQF3UYR7Z0lw"
		}
	},
	{
		_id: "gukwbgett",
		title: "Встерить меня на вокзале и помочь с чуммоданами",
		where: {
			metroName: "Комсомольская",
			address: "улица Знаменка, 9",
			coordinates: [55.74943, 37.606972]
		},
		reward: 60,
		author: {
			_id: "gukwbgett_u",
			name: "Скала Дуэйн",
			picURL:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Dwayne_The_Rock_Johnson_2009_street_portrait.jpg/548px-Dwayne_The_Rock_Johnson_2009_street_portrait.jpg"
		}
	},
	{
		_id: "cifmzwdsyp",
		title: "Нужен перфоратор",
		where: {
			metroName: "",
			address: "Нахимовский проспект, 11",
			coordinates: [55.663512, 37.605391]
		},
		reward: 25,
		author: {
			_id: "cifmzwdsyp_u",
			name: "Красавчик Джо",
			picURL: "http://img.zergnet.com/2028835_300.jpg"
		}
	},
	{
		_id: "wcniizbd",
		title: "Сходить вместе в суд",
		where: {
			metroName: "Баррикадная",
			address: "Ярославское шоссе, 10",
			coordinates: [55.853435, 37.681631]
		},
		reward: 100,
		urgent: true,
		author: {
			_id: "wcniizbd_u",
			name: "Улыбчивый",
			picURL: "http://larrybrownsports.com/wp-content/uploads/2011/09/mike-tyson.jpg"
		}
	},
	{
		_id: "hfziyoea",
		title: "Поучить меня немецкому",
		where: {
			metroName: "",
			address: "Ленинградский проспект, 22",
			coordinates: [55.781975, 37.574983]
		},
		reward: 40,
		author: {
			_id: "hfziyoea_u",
			name: "Ангела",
			picURL:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Angela_Merkel_%282008%29.jpg/220px-Angela_Merkel_%282008%29.jpg"
		}
	}
];

const additionalFieldsForIndividualRequests: Array<Object> = [
	{
		_id: "DFrysqkuqL",
		when: "Чем скорее, тем лучше)",
		description:
			"Мне требуется помощь в техническом развитии Моей Республики: программирование на javascript. 10-20ч в неделю. Благодарность в меритах указана за час работы.",
		author: {phone: "9160582855"}
	},
	{
		_id: "ubrysqkuqa",
		when: "09.05.2018 21:11",
		description:
			"Хочу сделать генеральную уборку в квартире. 2 комнаты, 50 кв.м. Одна, боюсь, не справлюсь.. Нужно помыть полы, ванную, вынести на помойку всякий хлам..",
		author: {phone: "9160582855"}
	},
	{
		_id: "gukwbgett",
		when: "10.05.2018 03:11",
		description:
			"2 апреля прибываю в мск из спб; у меня будет 4 тяжелых чумодана; нужно 2 человека, кот смогут помочь с их транспортировкой до такси, а потом поднять их в квартиру.",
		author: {phone: "9234567890"}
	},
	{
		_id: "cifmzwdsyp",
		when: "10.05.2018 09:11",
		description: "Нужен перфоратор на выходные проделать пару дырок в стене",
		author: {phone: "9551234567"}
	},
	{
		_id: "wcniizbd",
		when: "10.05.2018 15:11",
		description:
			"23.01 у меня судебное заседение и меня всего трясёт от одной мысли, что нужно туда идти и что-то там говорить. Нужен Друг, который часто бывает в судах (юрист, адвокат?) и чуствует себя там, как рыба в воде.Будет несколько заседаний, пока не знаю сколько точно",
		author: {phone: "9115565556"}
	},
	{
		_id: "hfziyoea",
		when: "10.05.2018 21:11",
		description:
			"Хочу начать учить немецкий язык. Ищу Друга-репетитора. Не обязательно, чтобы ты работал репетитором - нужно просто, чтобы ты знал язык и умел объяснять. Заниматься можно у меня или я могу приезжать к тебе.",
		author: {phone: "9117777777"}
	}
];

/**
 * @description: merge_each_object_inside_two_arrays_of_objects
 * @exampleInput: [{foo:1}, {bar:1}], [{foo:2}, {bar:1}, {baz:1}]
 * @exampleOutput: [{foo:2}, {bar:1}, {baz:1}]
 * @pure: true
 * @hasTests: false
 */
function merge_each_object_inside_two_arrays_of_objects(arr1: Array<Object>, arr2: Array<Object>) {
	const res: Array<Object> = arr1.map((objectFromArr1, i) => {
		const objectFromArr2 = arr2[i];
		return merge({}, objectFromArr1, objectFromArr2);
	});
	return res;
}

export const forIndividualRequests: Array<aidDetails> = merge_each_object_inside_two_arrays_of_objects(
	forOpenRequestsList,
	additionalFieldsForIndividualRequests
);