import s from './tag.module.css'

interface TagProps {
	text: string
	color?: string
	textColor?: string
}

export default function Tag({
	text,
	color = 'var(--accent)',
	textColor = 'inherit',
}: TagProps) {
	return (
		<span className={s.root} style={{ background: color, color: textColor }}>
			{text}
		</span>
	)
}
