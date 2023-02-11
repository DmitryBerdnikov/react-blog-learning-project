type Mods = Record<string, boolean>

type ClassNamesArgument = null | undefined | string | string[] | boolean | Mods

const CLASS_NAMES_SEPARATOR = ' '

export function classNames(...args: ClassNamesArgument[]): string {
	return args
		.map((item) => {
			if (item === null || item === undefined || typeof item === 'boolean') {
				return null;
			}

			if (typeof item === 'string') {
				return item;
			}

			if (Array.isArray(item)) {
				return item.join(CLASS_NAMES_SEPARATOR)
			}

			if (typeof item === 'object') {
				return Object.keys(item)
					.map((key) => (Boolean(item[key]) ? key : null))
					.filter(Boolean)
					.join(CLASS_NAMES_SEPARATOR)
			}

			console.error('classNames error: Unhandled type', item)

			return null
		})
		.filter(Boolean)
		.join(CLASS_NAMES_SEPARATOR)
		.trim()
}
