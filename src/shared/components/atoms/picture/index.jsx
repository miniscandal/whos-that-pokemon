import './styles.css';

function Picture({
	src = URL.createObjectURL(new Blob([], { type: 'image/png' })),
	alt = 'picture',
	size = 'regular'
}) {

	return (
		<div className="picture" data-size={size}>
			<img src={src} alt={alt} />
		</div>
	);
}

export { Picture };
