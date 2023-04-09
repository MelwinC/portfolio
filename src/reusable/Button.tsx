interface Test {
	title: string;
	type: string;
}

function Button({ title }: Test) {
	return <button>{title}</button>;
}

export default Button;
