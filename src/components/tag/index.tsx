import s from './tag.module.css'

interface TagProps {
	text: string
	color?: string
}

export default function Tag({ text, color = 'var(--accent)' }: TagProps) {
	return (
		<span className={s.root} style={{ background: color }}>
			{text}
		</span>
	)
}
