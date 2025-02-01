export const Title = ({ text }: { text: string }) => {
	return (
		<div className="mt-4 mb-3">
			<p className="text-[#70C368] font-[Inconsolata] font-extrabold text-3xl">
				{text}
			</p>
		</div>
	)
}