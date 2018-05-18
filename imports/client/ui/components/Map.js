// @flow
import * as React from "react";
// noinspection ES6CheckImport
import {YMaps, Map, Placemark} from "react-yandex-maps";

import type {placeProps} from "../../features/main/anyone/can-see-list-of-open-aid-requests";

const mapState = {center: [55.76, 37.64], zoom: 11};
//todo-2: write component test
export function MapOfAidRequests(placeData: Array<placeProps>) {
	//Impure: calls remote api
	const iconUrl =
		"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23f33' d='M25 14a8.327 8.327 0 0 1-.023.574c-.23 2.896-2.144 5.87-3.853 8.71L18 28.08V21a7 7 0 1 1 7-7z'/%3E%3Ccircle cx='18' cy='14' r='3' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E";
	return (
		<YMaps>
			<Map state={mapState}>
				{placeData.map((place, i) => (
					<Placemark
						key={i}
						geometry={{
							coordinates: place.where.coordinates
						}}
						properties={{
							hintContent: place.where.address,
							balloonContent: place.name
						}}
						options={{
							iconLayout: "default#image",
							iconImageHref: iconUrl,
							iconImageSize: [30, 42]
							// iconImageOffset: [-3, -42],
						}}
					/>
				))}
			</Map>
		</YMaps>
	);
}
