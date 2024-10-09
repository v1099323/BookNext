import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loader = ({
	count = 1,
	height = 20,
	gap = 15
}: {
	count?: number
	height?: number
	gap?: number
}) => {
	return (
		<Skeleton style={{ height: height, marginBottom: gap }} count={count} />
	)
}

export default Loader
