interface Input {
	inputLabel: string;
	labelFor: string;
	inputType: string;
	inputId: string;
	inputName: string;
	placeholderText: string;
	ariaLabelName: string;
}
const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
}: Input) => {
	return (
		<div className="mb-4">
			<label
				className="block text-lg text-primary-light mb-1"
				htmlFor={labelFor}
			>
				{inputLabel}
			</label>
			<input
				className="w-full px-5 py-2 border border-primary-dark border-opacity-50 text-secondary-light bg-ternary-dark rounded-md shadow-sm text-md"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
	);
};

export default FormInput;
