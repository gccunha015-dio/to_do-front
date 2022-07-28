function CreateFromCSV() {
	return (
		<form className='flex'>
			<input type='file' accept='text/csv' />
			<input type='submit' value='Create From CSV' />
		</form>
	);
}

export default CreateFromCSV;
