export function formatName(inputName: string): string {
    if (inputName.includes("-")) {
        const nameArr: string[] = inputName.split("-");
        const outputString: string = nameArr[1].charAt(0).toUpperCase() + nameArr[1].substring(1) + " " + nameArr[0].charAt(0).toUpperCase() + nameArr[0].substring(1);
        return outputString; 
    } else {
        return (inputName.charAt(0).toUpperCase() + inputName.substring(1));
    }
    
}