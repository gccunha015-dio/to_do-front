export function removeAllWhiteSpaces(str: string): string {
	return str.replace(/\s+/g, '');
}

export function separateWithOneSpace(str: string): string {
	return str.replace(/\s+/g, ' ').trim();
}
