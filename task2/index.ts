const printKeysMessages = (keyNumbers: Map<number, null>): void => {
    const getMessage = (keyNumber: number): string | null => {
        if (keyNumber % 3 === 0 && keyNumber % 5 === 0) {
            return "I can believe in that!";
        }

        if (keyNumber % 3 === 0) {
            return "Devided by tree";
        }

        if (keyNumber % 5 === 0) {
            return "Oops, here is 5";
        }
        return null;
    };

    keyNumbers.forEach((el, keyNumber) => {
        if (getMessage(keyNumber)) {
            console.log(`${keyNumber}: ${getMessage(keyNumber)}`);
        }
    });
};

const keyNumbers = new Map<number, null>();

for (let i = 0; i <= 100; i++) keyNumbers.set(i, null);

printKeysMessages(keyNumbers);

const checkHouse = (houseData: string[]): boolean => {
    const [area, status, owners, street] = houseData;

    if (area === "56" || (area === "40" && street === "Ленина")) {
        return true;
    }

    return false;
};

const checkAllHouses = (houses: string[][]): void => {
    houses.forEach((house) => console.log(`${house}: ${checkHouse(house)}`));
};

const houses: string[][] = [
    ["36", "не приватизирован", "4 собственника", "Парковая"],
    ["45", "приватизирован", "3 собственника", "Луговая"],
    ["56", "не приватизирован", "1 собственник", "Луговая"],
    ["56", "приватизирован", "5 собственников", "Ленина"],
    ["25", "не приватизирован", "2 собственника", "Ленина"],
];

checkAllHouses(houses);
