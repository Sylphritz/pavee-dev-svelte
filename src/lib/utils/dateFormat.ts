import format from 'date-fns/format/index'

export const formatDate = (dateString: string) => {
	return format(new Date(dateString), 'dd MMMM yyyy')
}
