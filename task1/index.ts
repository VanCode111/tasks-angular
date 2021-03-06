import response from "./data.js";

interface ITemp {
    temperature: string;
    city: string;
    optional?: boolean;
}

interface IData {
    dt: string;
    quantity: number;
    age: number | null;
    temp: ITemp;
}

type TDateMap = Map<string, IData[]>;

const getUniqueDates = (data: IData[]): Set<string> => {
    const uniqueDates: Set<string> = new Set();

    data.forEach((item) => uniqueDates.add(item.dt));

    return uniqueDates;
};

const getDatesMap = (data: IData[]): TDateMap => {
    const dateMap: TDateMap = new Map();

    const addElement = (item: IData, dateMap: TDateMap): void => {
        if (dateMap.has(item.dt)) {
            dateMap.get(item.dt).push(item);
        } else {
            dateMap.set(item.dt, [item]);
        }
    };

    data.forEach((item) => addElement(item, dateMap));

    return dateMap;
};

const data = response;

const uniqueDates: Set<string> = getUniqueDates(data);

const datesMap: TDateMap = getDatesMap(data);

console.log(uniqueDates);
console.log(datesMap);
