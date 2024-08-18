import s from './tag.module.css'

interface TagProps {
	text: string
}

export default function Tag({ text }: TagProps) {
	return <span className={s.root}>{text}</span>
}
