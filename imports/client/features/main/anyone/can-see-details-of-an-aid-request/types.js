// @flow
import type {aid} from '../can-see-list-of-open-aid-requests/types'

type additionalProps = {
	when: string,
	description: string,
	author: {
		phone: string
	}
}

export type aidDetails = aid & additionalProps
