function CreateOne() {
	return (
		<form className='flex justify-evenly'>
			<label className='flex flex-col'>
				Description
				<input type='text' />
			</label>
			<label className='flex flex-col'>
				Is done ?
				<input type='checkbox' />
			</label>
			<input type='submit' value='Create Task' />
		</form>
	);
}

export default CreateOne;
